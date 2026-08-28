/* 福建风土物产日历 · 地图原点视觉系统 v1
 * 核心点 = 地理位置 · 大小 = 当月风土显著度 · 颜色 = 物候进程
 * 光晕 = 纯视觉 · 名称 = 识别 · 点击 = 详情
 */
(function () {
  "use strict";

  /* ---------------- 常量 ---------------- */
  const MONTHS = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
  const ACTIVE_MIN = 31;           // seasonal_activity ≥ 31 视为“本月正在发生”
  const CLUSTER_ZOOM = 6.8;        // 低于该缩放级别使用聚合（默认视图第一次放大即脱离聚合）
  const ANIM_MS = 420;
  const IMG_ZOOM = 6.8;            // 脱离聚合后，只要原点不再重叠就过渡为插画（第一次放大即生效）
  const COARSE = typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches;
  const REDUCED_MOTION = typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SUPPORTS_FILLBOX = typeof CSS !== "undefined" && typeof CSS.supports === "function" && CSS.supports("transform-box", "fill-box");

  /* 原点出现动画：撞色环涌现 → 错峰生长 → 整体离心扩散
   * ringMode：
   *   complement —— 外环描边 = 该点填充色的互补色（HSL 色相 +160°，S70% L55%）
   *   mono       —— 外环描边 = 同色系
   *   mapped     —— 外环描边按物候阶段取 ringColorMap 映射
   * triggerOn：initial=开屏后首现 / month=切换月份 / filter=筛选变化 / zoom=缩放回散点
   */
  const POP_CONFIG = {
    staggerMs: 45,            // 每个点之间的错峰间隔（30–80ms）
    popDuration: 0.4,         // 撞色环涌现时长（s）：0 → 1.2 → 1.0，轻微 overshoot
    ringMode: "mono",         // 'complement' | 'mono' | 'mapped'
    ringColorMap: {},         // 供 ringMode:'mapped'：{ dormant:'#…', bloom:'#…', grow:'#…', … }
    enableBurst: true,        // 入场完成后是否做一次整体离心扩散
    burstThreshold: 100,      // 可见点数超过该值跳过整体扩散
    burstDuration: 0.6,       // 整体扩散时长（s）
    triggerOn: ["initial", "month", "filter", "zoom"], // 触发场景：首现 / 切月 / 筛选 / 脱离聚合
  };

  const STAGE = {
    dormant:   { label: "休眠", color: "#c6c6bb" },
    grow:      { label: "生长", color: "#b4c4b2" },
    prep:      { label: "备料 / 原料", color: "#c6c6bb" },
    rest:      { label: "休作 / 淡季", color: "#c6c6bb" },
    age:       { label: "熟成 / 陈化", color: "#c9c2b2" },
    ripe:      { label: "成熟", color: "#d8b84c" },
    harvest:   { label: "采收 / 采摘", color: "#78B268" },
    craft:     { label: "传统制作 / 加工", color: "#bb7b4e" },
    spectacle: { label: "物候盛景", color: "#E8A0A8" },
  };
  /* 地图原点颜色：只展示核心风土动作（采收/成熟/制作加工/物候盛景） */
  const MAP_COLOR = {
    dormant: "#a7b09c", grow: "#9fc3a8", prep: "#a7b09c", rest: "#a7b09c", age: "#a7b09c",
    ripe: "#d8b84c",
    harvest: "#78B268",
    craft: "#bb7b4e",
    spectacle: "#E8A0A8",
  };
  function mapColor(st) { return MAP_COLOR[st] || STAGE[st].color; }

  /* 状态归类：原始数据为组合串（如「生长|采收」「成熟|采收」）。
   * 只取核心动作词，优先级：采收 > 制作加工 > 物候盛景(开花) > 成熟；
   * 生长/储藏为后台状态，不参与地图与文案展示。
   * 传统加工物（无生物物候）改用「工艺节令」：备料/制作/熟成/成品/休作，
   * 地图只显示 制作加工（暖橙）与 成品上市（成熟·暖黄）。 */
  const CORE_TOKEN_STAGE = { "采收": "harvest", "加工": "craft", "开花": "spectacle", "成熟": "ripe" };
  const STAGE_SHORT = {
    dormant: "休眠", grow: "生长", prep: "备料", rest: "休作", age: "熟成",
    ripe: "成熟", harvest: "采收", craft: "加工", spectacle: "开花",
  };
  /* 工艺型花卉（水仙雕刻、杜鹃造型）：加工标注为「造型 / 工艺」 */
  const CRAFT_AS_SCULPT = new Set(["FJ058", "FJ061"]);

  function productKind(p) {
    const cat = String((p && p.basic && p.basic.category) || "");
    if (cat.includes("传统加工物")) return "processed";
    if (cat.includes("花卉")) return "flower";
    return "generic";
  }

  function stageOfStatus(status, kind) {
    const tokens = multi(status);
    if (kind === "processed") {
      // 传统加工物：加工→制作；熟成→陈化；成熟→成品/当季；采收/生长/开花→备料/原料；储藏→休作
      if (tokens.includes("加工")) return "craft";
      if (tokens.includes("熟成")) return "age";
      if (tokens.includes("成熟")) return "ripe";
      if (tokens.includes("采收") || tokens.includes("生长") || tokens.includes("开花")) return "prep";
      return "rest";
    }
    for (const tok of ["采收", "加工", "开花", "成熟"]) if (tokens.includes(tok)) return CORE_TOKEN_STAGE[tok];
    return null;
  }

  const SIZE_TABLE = [
    { min: 81, r: 10, halo: 38, label: "风土高峰" },
    { min: 51, r: 8,  halo: 30, label: "较重要" },
    { min: 21, r: 6,  halo: 26, label: "正在发生" },
    { min: 0,  r: 5,  halo: 22, label: "弱" },
  ];

  const FILTER_GROUPS = [
    { key: "category", label: "分类", values: ["茶", "水果", "蔬菜", "笋类", "粮食", "菌类", "花卉", "药食同源", "水产", "海产", "畜禽", "蜂产品", "竹木", "香料", "传统加工物", "其他"] },
    { key: "terrain", label: "地形", values: ["山地", "丘陵", "平原", "河谷", "盆地", "台地", "海岸", "滩涂", "岛屿", "湿地"] },
    { key: "elevation_class", label: "海拔", values: ["低海拔", "中低海拔", "中海拔", "高海拔"] },
    { key: "temperature_class", label: "温度", values: ["凉爽", "温暖", "温热"] },
    { key: "precipitation_class", label: "降水", values: ["中降水", "较高降水", "高降水"] },
    { key: "moisture_class", label: "湿润度", values: ["湿润", "中等"] },
    { key: "water_type", label: "水域", values: ["河流", "溪流", "湖泊", "水库", "地下水", "河谷", "滨海", "潮间带", "滩涂", "浅海", "海岛", "雨养", "灌溉"] },
    { key: "soil_class", label: "土壤", values: ["酸性", "中性"] },
    { key: "ecosystem", label: "生态", values: ["森林", "竹林", "茶园", "果园", "农田", "湿地", "滩涂", "海洋", "河谷", "草地", "林下"] },
  ];

  /* 地形地质示意层（低对比；山脉为概略走向，水系来自 OpenStreetMap 实测轨迹） */
  const GRID_BOUNDS = { latMin: 23.5, latMax: 28.5, lonMin: 115.6, lonMax: 120.9 };
  const MOUNTAINS = [
    { name: "武夷山脉", pts: [[27.87, 117.72], [27.35, 117.52], [26.75, 117.0], [26.2, 116.55], [25.7, 116.22], [25.15, 116.05]], labelAt: [26.55, 116.6] },
    { name: "太姥山脉", pts: [[27.35, 120.32], [27.15, 120.2], [26.95, 120.06], [26.8, 119.95]], labelAt: [27.28, 120.25] },
    { name: "鹫峰山脉", pts: [[27.3, 119.3], [27.0, 119.08], [26.7, 118.88], [26.4, 118.68]], labelAt: [27.0, 119.05] },
    { name: "戴云山脉", pts: [[25.98, 118.45], [25.7, 118.22], [25.42, 118.1], [25.15, 118.0]], labelAt: [25.72, 118.3] },
    { name: "博平岭", pts: [[25.35, 116.55], [25.0, 116.8], [24.65, 117.05]], labelAt: [25.0, 116.83] },
  ];
  const RIVER_T1 = new Set(["闽江", "九龙江", "晋江", "汀江", "木兰溪", "交溪"]);

  /* ---------------- 状态 ---------------- */
  const state = {
    month: new Date().getMonth() + 1,
    showAll: false,
    filters: {},          // key -> Set(values)
    activePid: null,
    loaded: false,
    products: [],         // index
    byId: new Map(),
    geo: null,
    riversGeo: null,
    cardContent: {},      // L1 卡片内容（product_id -> 字段）
    visiblePids: new Set(),
    splashActive: true,   // 开屏期间隐藏物产原点
    pendingEnter: false,  // 数据未就绪时用户已点击「点击进入」
    heroes: new Set(),    // 当月主角物产 id（峰值月轮换）
    defaultZoom: null,    // 进入时的默认缩放：低于等于该级别不显示插画
    imgAvailable: null,   // 已有抠图文件的物产 id 集合（小写）
    monthGuides: null,    // 月份导语（12 个月的主题/金句/正文）
    guideTimer: null,     // 导语插图轮播定时器
    guideIdx: 0,          // 轮播当前索引
    guidePendingReveal: false, // 关闭导语后补播原点出现动画
    yearRoundIds: new Set(),   // 「全年都有」物产（核心动作覆盖 ≥11 个月）
    highlightMonths: null,     // 季节性高光：灰色地带物产 -> 高光月集合
  };

  let map, geoLayer, tileLayer;
  const originLayer = L.layerGroup();
  const haloLayer = L.layerGroup();
  const labelLayer = L.layerGroup();
  const imgLayer = L.layerGroup();
  const ringLayer = L.layerGroup();
  const popLayer = L.layerGroup();    // 撞色环出现动画的临时图层
  const clusterLayer = L.layerGroup();
  const cityLabelLayer = L.layerGroup();
  const geogLayer = L.layerGroup();

  const dots = new Map();   // pid -> { dot, halo, label, pid }
  const dotStates = new Map(); // pid -> current style snapshot
  let layoutTimer = null;

  /* ---------------- 工具 ---------------- */
  const $ = (sel) => document.querySelector(sel);
  const num = (v) => (v === null || v === undefined || v === "" ? null : Number(v));
  const multi = (v) => (v ? String(v).split("|").map((s) => s.trim()).filter(Boolean) : []);

  function hexToRgb(hex) {
    const h = hex.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map((x) => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, "0")).join("");
  }
  function lerpColor(a, b, t) {
    const ca = hexToRgb(a), cb = hexToRgb(b);
    return rgbToHex(ca[0] + (cb[0] - ca[0]) * t, ca[1] + (cb[1] - ca[1]) * t, ca[2] + (cb[2] - ca[2]) * t);
  }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }

  /* ---------------- 原点出现动画 ---------------- */
  function hexToHsl(hex) {
    const [r, g, b] = hexToRgb(hex).map((v) => v / 255);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (max === min) return [0, 0, l];
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h;
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
    return [h * 360, s, l];
  }

  function complementColor(hex) {
    const [h] = hexToHsl(hex);
    return `hsl(${Math.round((h + 160) % 360)}, 70%, 55%)`;
  }

  function ringColorFor(stageKey, fillHex) {
    if (POP_CONFIG.ringMode === "mono") return fillHex;
    if (POP_CONFIG.ringMode === "mapped") return POP_CONFIG.ringColorMap[stageKey] || complementColor(fillHex);
    return complementColor(fillHex);
  }

  function prepPath(el) {
    if (!el || el.dataset.popPrepared) return;
    el.dataset.popPrepared = "1";
    el.style.transformBox = "fill-box";
    el.style.transformOrigin = "50% 50%";
    el.style.willChange = "transform, opacity";
  }

  /* CSS 驱动动画（transform/opacity，transform-box 保证绕圆心缩放，不触发 reflow） */
  function animatePop(el, cls, delay, onEnd) {
    el.classList.add(cls);
    if (delay) el.style.animationDelay = delay + "s";
    el.addEventListener("animationend", function cleanup() {
      el.removeEventListener("animationend", cleanup);
      el.classList.remove(cls);
      el.style.animationDelay = "";
      if (onEnd) onEnd();
    });
  }

  function animateFade(el, delay, cls, onEnd) {
    el.classList.add(cls);
    if (delay) el.style.animationDelay = delay + "s";
    el.addEventListener("animationend", function cleanup() {
      el.removeEventListener("animationend", cleanup);
      el.classList.remove(cls);
      el.style.animationDelay = "";
      if (onEnd) onEnd();
    });
  }

  /* 单个点：整体离心扩散（向外位移 + 半径呼吸一次，CSS transition 驱动） */
  function burstEl(el, dx, dy) {
    const dur = POP_CONFIG.burstDuration / 2;
    el.style.transition = "transform " + dur + "s cubic-bezier(0.22, 1, 0.36, 1)";
    requestAnimationFrame(() => {
      el.style.transform = "translate(" + dx + "px," + dy + "px) scale(1.05)";
      setTimeout(() => {
        el.style.transition = "transform " + dur + "s cubic-bezier(0.45, 0, 0.55, 1)";
        el.style.transform = "translate(0, 0) scale(1)";
        setTimeout(() => {
          el.style.transition = "";
          el.style.transform = "";
        }, dur * 1000 + 60);
      }, dur * 1000 + 30);
    });
  }

  /* 单个原点：撞色外环 + 内填圆同步 0→1.2→1.0 生长，外环随后淡出 */
  function playDotPop(entry, target, delay) {
    if (REDUCED_MOTION) return;
    const p = state.byId.get(entry.pid);
    if (!p) return;
    const dotEl = entry.dot.getElement();
    if (!dotEl) return;
    const canScale = SUPPORTS_FILLBOX;
    prepPath(dotEl);

    const ringColor = ringColorFor(target.stage, target.color);
    let ring = null, ringEl = null;
    if (ringColor) {
      ring = L.circleMarker(
        L.latLng(num(p.basic.latitude), num(p.basic.longitude)),
        {
          radius: Math.max(8, target.r + 2),
          color: ringColor,
          weight: 0.8,
          fill: false,
          opacity: 1,
          interactive: false,
          className: "origin-pop-ring",
        }
      );
      popLayer.addLayer(ring);
      ringEl = ring.getElement();
      if (ringEl) prepPath(ringEl);
    }

    const d = delay || 0;
    if (canScale) animatePop(dotEl, "anim-pop", d);
    else animateFade(dotEl, d, "anim-fade");

    const haloEl = entry.halo.getElement();
    if (haloEl) animateFade(haloEl, d + 0.1, "anim-fade");

    if (ringEl) {
      if (canScale) animatePop(ringEl, "anim-ring", d, () => { if (ring) popLayer.removeLayer(ring); });
      else animateFade(ringEl, d + 0.45, "anim-fade-out", () => { if (ring) popLayer.removeLayer(ring); });
    }
  }

  /* 入场完成后：从地图中心向外做一次整体离心扩散（位移 + 半径呼吸一次） */
  function playBurst(visible) {
    if (REDUCED_MOTION || !POP_CONFIG.enableBurst) return;
    if (visible.length > POP_CONFIG.burstThreshold) return;
    const size = map.getSize();
    const cpt = L.point(size.x / 2, size.y / 2);
    for (const p of visible) {
      const entry = dots.get(p.id);
      if (!entry || !originLayer.hasLayer(entry.dot)) continue;
      const el = entry.dot.getElement();
      if (!el || !SUPPORTS_FILLBOX) continue;
      prepPath(el);
      const pt = map.latLngToContainerPoint(L.latLng(num(p.basic.latitude), num(p.basic.longitude)));
      const dx = pt.x - cpt.x, dy = pt.y - cpt.y;
      const dist = Math.hypot(dx, dy) || 1;
      const u = Math.min(16, 4 + dist * 0.008);
      burstEl(el, (dx / dist) * u, (dy / dist) * u);
    }
  }

  function scheduleBurst(visible, delay) {
    if (!POP_CONFIG.enableBurst || REDUCED_MOTION) return;
    if (visible.length > POP_CONFIG.burstThreshold) return;
    setTimeout(() => {
      if (!state.splashActive) playBurst(visible);
    }, (delay + POP_CONFIG.popDuration + 0.2) * 1000);
  }

  function stageFor(row, kind) {
    const st = stageOfStatus(row && row.phenology_status, kind);
    if (st) return st;
    if (kind === "processed") return "rest";
    const tokens = multi(row && row.phenology_status);
    if (tokens.includes("生长")) return "grow";
    return "dormant";
  }

  /* 核心风土动作状态：通用 = 采收/成熟/制作加工/物候盛景；传统加工物 = 制作加工/成品上市 */
  const CORE_STAGES_GENERIC = ["harvest", "ripe", "craft", "spectacle"];
  const CORE_STAGES_PROCESSED = ["craft", "ripe"];
  function isCoreStage(st, kind) {
    return (kind === "processed" ? CORE_STAGES_PROCESSED : CORE_STAGES_GENERIC).includes(st);
  }
  function isCoreStatus(s, kind) { return isCoreStage(stageOfStatus(s, kind), kind); }

  /* 卡片月份标签：按类别给出工艺节令 / 生物物候的不同称谓 */
  function cardStageLabel(p, st) {
    const kind = productKind(p);
    if (kind === "processed") {
      return { craft: "制作/工艺", ripe: "成品/当季", prep: "备料/原料", rest: "休作/淡季", age: "熟成/陈化" }[st] || STAGE_SHORT[st] || st;
    }
    if (kind === "flower" && st === "craft") return CRAFT_AS_SCULPT.has(p.id) ? "造型/工艺" : "制作/工艺";
    return STAGE_SHORT[st] || st;
  }

  /* 状态栏/详情行文案：只显示归类后的核心动作或工艺阶段 */
  function statusLabelFor(s, p) {
    const kind = productKind(p);
    const st = stageOfStatus(s, kind);
    if (!st) return "";
    if (kind === "processed") {
      return { craft: "传统制作 / 加工", ripe: "成熟", prep: "备料 / 原料", rest: "休作 / 淡季", age: "熟成 / 陈化" }[st] || STAGE[st].label;
    }
    return STAGE[st].label;
  }

  function sizeFor(a) {
    for (const s of SIZE_TABLE) if (a >= s.min) return s;
    return SIZE_TABLE[SIZE_TABLE.length - 1];
  }

  function monthRow(p, m) {
    return (p._pheno && p._pheno[m]) || null;
  }

  function textWidth(text) {
    let w = 0;
    for (const ch of String(text)) w += ch.charCodeAt(0) > 255 ? 12.5 : 6.5;
    return w + 6;
  }

  /* ---------------- 数据 ---------------- */
  /* 加载进度反馈：按资源完成数推进（伪进度），封面与状态栏同步展示 */
  let _loadStep = 0;
  const _loadTotal = 6;   // json / geo / river / china / manifest / guides（card_content 已懒加载）
  function setLoadProgress(label) {
    _loadStep = Math.min(_loadStep + 1, _loadTotal);
    const txt = `${label} · ${_loadStep}/${_loadTotal}`;
    const st = $("#mapStatus");
    if (st) st.textContent = "正在载入数据… " + txt;
    const sp = $("#splashProgress");
    if (sp) sp.textContent = "正在准备福建的山与海… " + txt;
  }

  async function loadData() {
    try {
      const [jsonRes, geoRes, riverRes, chinaRes, manifestRes, guidesRes] = await Promise.all([
        fetch("data/Fujian_Terroir_Calendar.json").then((r) => { setLoadProgress("物产名录"); return r; }),
        fetch("assets/fujian.geojson").then((r) => { setLoadProgress("地图轮廓"); return r; }),
        fetch("assets/fujian_rivers.geojson").then((r) => { setLoadProgress("水系"); return r; }),
        fetch("assets/china_context.geojson").catch(() => null).then((r) => { setLoadProgress("邻省"); return r; }),
        fetch("assets/illustrations/splash/cutout/manifest.json").catch(() => null).then((r) => { setLoadProgress("插画清单"); return r; }),
        fetch("data/month_guides.json").catch(() => null).then((r) => { setLoadProgress("月度导语"); return r; }),
      ]);
      // 注：card_content.json（详情深度内容）已改为点击详情时懒加载，首屏不再下载（899KB）
      const data = await jsonRes.json();
      state.geo = await geoRes.json();
      state.riversGeo = await riverRes.json();
      state.chinaGeo = chinaRes && chinaRes.ok ? await chinaRes.json() : null;
      const manifest = manifestRes && manifestRes.ok ? await manifestRes.json() : null;
      state.imgAvailable = Array.isArray(manifest) && manifest.length ? new Set(manifest) : null;
      const guides = guidesRes && guidesRes.ok ? await guidesRes.json() : null;
      state.monthGuides = Array.isArray(guides) ? guides : null;

      state.products = data.products
        .filter((p) => p.product_id !== "FJ120") // 建盏：点位与内容暂不下沉到前端
        .map((p) => {
          const item = {
            id: p.product_id,
            name: p.product_name,
            basic: p.basic || {},
            terroir: p.terroir || {},
            sources: p.sources || [],
            _pheno: {},
          };
          for (const r of p.phenology || []) {
            const m = Number(r.month);
            if (m >= 1 && m <= 12) item._pheno[m] = r;
          }
          state.byId.set(item.id, item);
          return item;
        });
      // 全年都有：12 个月中 ≥11 个月处于核心动作状态（用于「全年都有」视图与单月剔除）
      for (const p of state.products) {
        let n = 0;
        for (let mm = 1; mm <= 12; mm++) {
          const row = p._pheno[mm];
          if (row && stageOfStatus(String(row.phenology_status || ""), "generic")) n++;
        }
        if (n >= 11) state.yearRoundIds.add(p.id);
      }
      // 季节性高光：非传统加工物、核心覆盖 8-10 个月的灰色地带物产，
      // 单月地图只保留「事件月」——茶叶=采收（春/秋茶季），其余=采收/成熟/开花
      state.highlightMonths = new Map();
      for (const p of state.products) {
        if (state.yearRoundIds.has(p.id)) continue;
        if (productKind(p) === "processed") continue;
        const coreMonths = [];
        for (let mm = 1; mm <= 12; mm++) {
          const row = p._pheno[mm];
          if (row && stageOfStatus(String(row.phenology_status || ""), "generic")) coreMonths.push(mm);
        }
        if (coreMonths.length < 8) continue;
        const isTea = String(p.basic && p.basic.category || "").includes("茶");
        const set = new Set();
        for (const mm of coreMonths) {
          const toks = multi(p._pheno[mm].phenology_status);
          const hit = isTea ? toks.includes("采收") : (toks.includes("采收") || toks.includes("成熟") || toks.includes("开花"));
          if (hit) set.add(mm);
        }
        if (set.size) state.highlightMonths.set(p.id, set);
      }
      state.loaded = true;
      // 通知封面：数据就绪（若用户已点「点击进入」则自动进入）
      window.dispatchEvent(new CustomEvent("fjt:loaded"));
      init();
    } catch (err) {
      $("#mapStatus").textContent = "数据载入失败：" + err.message;
      console.error(err);
    }
  }

  /* 详情深度内容（card_content.json）懒加载：首次打开详情时拉取并缓存 */
  let cardContentLoaded = false;
  async function ensureCardContent() {
    if (cardContentLoaded) return;
    cardContentLoaded = true;
    try {
      const r = await fetch("data/card_content.json");
      if (r.ok) {
        const dd = await r.json();
        if (dd && dd.products) state.cardContent = dd.products;
      }
    } catch (e) {
      console.error("card_content 懒加载失败", e);
    }
  }

  /* ---------------- 地图 ---------------- */
  function initMap() {
    map = L.map("map", {
      zoomControl: false,
      attributionControl: false,
      minZoom: 7,    // 最小缩放：再小会暴露出整片邻国与海洋，破坏「福建地图」的视觉聚焦
      maxZoom: 13,
      preferCanvas: false,
    });
    window.__fjt = window.__fjt || {};
    window.__fjt.map = map; // 便于调试与深链扩展

    L.control.zoom({ position: "bottomright" }).addTo(map);

    // 原点、光晕、标签、选中圈与聚合图层常驻地图（聚合模式外为空）
    geogLayer.addTo(map);
    originLayer.addTo(map);
    haloLayer.addTo(map);
    labelLayer.addTo(map);
    imgLayer.addTo(map);
    ringLayer.addTo(map);
    popLayer.addTo(map);
    clusterLayer.addTo(map);
    addGeography();

    tileLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      opacity: 0.14,   // 大幅减淡：只留海岸线/省界的空间定位感
      className: "map-tiles",
      attribution: "© OpenStreetMap",
    });
    tileLayer.addTo(map);

    const fujianBounds = L.geoJSON(state.geo).getBounds();
    const mobileView = window.innerWidth < 860;
    map.fitBounds(fujianBounds.pad(0.06), { animate: false });
    // 宽屏容器下 fitBounds 按高度受限，福建水平占比低、左右露出邻国与大片海洋。
    // 再放大一档让福建成为画面主体（邻国出画），用户可缩小/拖动查看周边。
    if (map.getZoom() < 8) map.setZoom(map.getZoom() + 1, { animate: false });
    state.defaultZoom = map.getZoom();   // 默认视图缩放：未放大前不显示插画
    map.setMaxBounds(fujianBounds.pad(mobileView ? 1.25 : 0.35));

    // 邻省矢量底图（浙江/江西/湖南/广东），瓦片不可用时仍能看到福建周边
    if (state.chinaGeo && state.chinaGeo.features) {
      const ctxLayer = L.geoJSON(state.chinaGeo, {
        style: { color: "#d8d2c4", weight: 0.8, fillColor: "#f1eee4", fillOpacity: 0.45, interactive: false },
      });
      ctxLayer.addTo(map);
      L.geoJSON(state.chinaGeo, {
        style: { color: "#d8d2c4", weight: 0.6, fill: false, interactive: false },
        onEachFeature: (feat, layer) => {
          const c = layer.getBounds().getCenter();
          const name = (feat.properties && feat.properties.name) || "";
          const icon = L.divIcon({
            className: "geo-label grid neighbor",
            html: `<span class="gl">${escapeHtml(name)}</span>`,
            iconSize: [0, 0],
            iconAnchor: [0, 0],
          });
          L.marker(c, { icon, interactive: false, keyboard: false, zIndexOffset: -40 }).addTo(ctxLayer);
        },
      });
    }

    // 福建主体：按「山地市 / 沿海市」分区填充（山海分区的明度层次，风土地图表达）
    geoLayer = L.geoJSON(state.geo, {
      style: (feat) => {
        const n = (feat.properties && feat.properties.name) || "";
        const inland = n.includes("南平") || n.includes("三明") || n.includes("龙岩");
        return inland
          ? { color: "#b0a68b", weight: 1.0, fillColor: "#e8dfc9", fillOpacity: 0.6 }
          : { color: "#b0a68b", weight: 1.0, fillColor: "#f8f5ec", fillOpacity: 0.85 };
      },
      interactive: false,
    });
    geoLayer.addTo(map);

    // 城市名称（极淡）
    L.geoJSON(state.geo, {
      style: { color: "#cfc9ba", weight: 0.8, fill: false },
      interactive: false,
      onEachFeature: (feat, layer) => {
        const c = layer.getBounds().getCenter();
        const name = (feat.properties && feat.properties.name) || "";
        const icon = L.divIcon({
          className: "city-label",
          html: name,
          iconSize: [0, 0],
          iconAnchor: [0, 0],
        });
        L.marker(c, { icon, interactive: false, keyboard: false, zIndexOffset: -20 }).addTo(cityLabelLayer);
      },
    });
    cityLabelLayer.addTo(map);

    map.on("zoomend moveend", debounce(() => {
      renderOrigins(false, "zoom");
    }, 120));
    map.on("click", () => selectProduct(null));
  }

  function debounce(fn, ms) {
    let t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, ms);
    };
  }

  /* ---------------- 可见性计算 ---------------- */
  function matchesFilters(p) {
    const t = p.terroir;
    for (const g of FILTER_GROUPS) {
      const sel = state.filters[g.key];
      if (!sel || sel.size === 0) continue;
      let val = null;
      if (g.key === "category") val = [p.basic.category];
      else val = multi(t[g.key]);
      if (!val.some((v) => sel.has(v))) return false;
    }
    return true;
  }

  function visibleProducts() {
    const m = state.month;
    return state.products.filter((p) => {
      if (!matchesFilters(p)) return false;
      if (m === 0) return state.showAll ? hasAnyCoreMonth(p) : state.yearRoundIds.has(p.id);   // 全年视图：开「显示所有物产」= 全年核心动作
      if (state.showAll) return hasAnyCoreMonth(p);
      if (state.yearRoundIds.has(p.id)) return false;   // 单月视图剔除「全年都有」物产
      const row = monthRow(p, m);
      if (!row) return false;
      const a = num(row.seasonal_activity) || 0;
      if (!isCoreStatus(String(row.phenology_status || ""), productKind(p)) || a < ACTIVE_MIN) return false;
      const hl = state.highlightMonths && state.highlightMonths.get(p.id);
      if (hl && !hl.has(m)) return false;               // 季节性高光：非事件月不上地图
      return true;
    });
  }

  /* 全年任意月份发生过核心风土动作（显示所有物产用） */
  function hasAnyCoreMonth(p) {
    for (let mm = 1; mm <= 12; mm++) {
      const row = p._pheno[mm];
      if (row && isCoreStatus(String(row.phenology_status || ""), productKind(p)) && (num(row.seasonal_activity) || 0) >= ACTIVE_MIN) return true;
    }
    return false;
  }

  /* ---------------- 原点构建 ---------------- */
  function ensureDot(p) {
    if (dots.has(p.id)) return dots.get(p.id);
    const lat = num(p.basic.latitude);
    const lng = num(p.basic.longitude);
    const ll = L.latLng(lat, lng);

    const dot = L.circleMarker(ll, {
      radius: 5,
      color: STAGE.dormant.color,
      fillColor: STAGE.dormant.color,
      fillOpacity: 0.95,
      weight: 1,
      opacity: 0.9,
      className: "origin-dot",
      interactive: true,
      keyboard: false,
    });
    const halo = L.circle(ll, {
      radius: 22,
      color: "transparent",
      fillColor: STAGE.dormant.color,
      fillOpacity: 0.13,
      weight: 0,
      className: "origin-halo",
      interactive: false,
    });
    const label = L.marker(ll, {
      icon: L.divIcon({
        className: "product-label",
        html: `<span class="pl">${escapeHtml(p.name)}</span>`,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      }),
      interactive: false,
      keyboard: false,
      zIndexOffset: -5,
    });

    dot.on("mouseover", (e) => onDotHover(p, e, true));
    dot.on("mouseout", () => onDotHover(p, null, false));
    dot.on("click", (e) => {
      L.DomEvent.stopPropagation(e);
      selectProduct(p.id);
    });

    const entry = { pid: p.id, dot, halo, label };
    entry.imgMarker = null;
    entry.imgEl = null;
    entry.imgState = "dot";
    dots.set(p.id, entry);
    dotStates.set(p.id, { opacity: 0, r: 5, color: STAGE.dormant.color, haloR: 22, haloOpacity: 0, labelOn: false });
    return entry;
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* 全年模式下取该物产最活跃的核心动作月（休眠/生长等后台状态不参与上色） */
  function primaryCoreRow(p) {
    let best = null, bestA = 0;
    for (let mm = 1; mm <= 12; mm++) {
      const row = p._pheno[mm];
      if (!row || !stageOfStatus(String(row.phenology_status || ""), "generic")) continue;
      const a = num(row.seasonal_activity) || 0;
      if (a >= bestA) { bestA = a; best = row; }
    }
    return best;
  }

  /* 每月主角：当月=该物产全年 activity 峰值 且 ≥门槛，同品类≤2，取前5（峰值月轮换叙事） */
  const HERO_MIN = 50, HERO_MAX = 5, HERO_SCALE = 1.9;
  function computeHeroes(m) {
    const out = new Set();
    if (m <= 0) return out;
    const catCount = {}, heroes = [];
    for (const p of state.products) {
      let bestA = 0, bestM = 0;
      for (let mm = 1; mm <= 12; mm++) {
        const row = p._pheno && p._pheno[mm];
        const a = row ? num(row.seasonal_activity) || 0 : 0;
        if (a > bestA) { bestA = a; bestM = mm; }
      }
      if (bestM !== m || bestA < HERO_MIN) continue;
      const cat = (p.basic && p.basic.category) || "";
      catCount[cat] = (catCount[cat] || 0) + 1;
      if (catCount[cat] > 2) continue;
      heroes.push({ p, a: bestA });
    }
    heroes.sort((x, y) => y.a - x.a);
    heroes.slice(0, HERO_MAX).forEach((h) => out.add(h.p.id));
    return out;
  }

  function targetStyle(p) {
    const row = state.month === 0
      ? primaryCoreRow(p)
      : (state.showAll ? (primaryCoreRow(p) || monthRow(p, state.month)) : monthRow(p, state.month));
    const a = num(row && row.seasonal_activity) || 0;
    const st = stageFor(row, productKind(p));
    const sz = sizeFor(a);
    const active = state.showAll || a >= ACTIVE_MIN;
    const isHero = !!state.heroes && state.heroes.has(p.id);
    return {
      visible: active,
      r: active ? sz.r * (isHero ? HERO_SCALE : 1) : 4,
      color: mapColor(st),
      haloR: active ? sz.halo * (isHero ? 1.7 : 1) : 18,
      opacity: active ? (state.activePid && state.activePid !== p.id ? 0.6 : 1) : 0.16,
      haloOpacity: active ? (isHero ? 0.26 : (state.activePid && state.activePid !== p.id ? 0.07 : 0.13)) : 0,
      labelOn: active,
      stage: st,
    };
  }

  /* ---------------- 渲染 ---------------- */
  function renderOrigins(animate, trigger) {
    if (!state.loaded) return;
    if (state.splashActive) return; // 开屏期间只显示干净地图
    const clustered = map.getZoom() < CLUSTER_ZOOM;
    const visible = visibleProducts();
    const visibleIds = new Set(visible.map((p) => p.id));
    state.visiblePids = visibleIds;
    if (state.activePid && !visibleIds.has(state.activePid)) selectProduct(null);

    const doPop = !REDUCED_MOTION && window.gsap && POP_CONFIG.triggerOn.includes(trigger) && !state.guidePendingReveal;
    const popQueue = [];

    if (!clustered) {
      clusterLayer.clearLayers();
      map.removeLayer(clusterLayer);

      for (const p of state.products) {
        const entry = ensureDot(p);
        const target = targetStyle(p);
        const inView = visibleIds.has(p.id);

        if (inView) {
          const fresh = !originLayer.hasLayer(entry.dot);
          originLayer.addLayer(entry.dot);
          haloLayer.addLayer(entry.halo);
          if (doPop && fresh) {
            applyStyle(entry, target);
            popQueue.push({ entry, target });
          } else if (animate) {
            tweenDot(p, entry, target);
          } else {
            applyStyle(entry, target);
          }
        } else {
          if (animate && originLayer.hasLayer(entry.dot)) {
            fadeOutAndRemove(entry);
          } else {
            originLayer.removeLayer(entry.dot);
            haloLayer.removeLayer(entry.halo);
          }
        }
      }
      renderLabels(visible);
    } else {
      // 聚合模式
      for (const entry of dots.values()) {
        originLayer.removeLayer(entry.dot);
        haloLayer.removeLayer(entry.halo);
        labelLayer.removeLayer(entry.label);
      }
      ringLayer.clearLayers();
      renderClusters(visible, trigger);
    }

    renderStatus(visible.length);
    syncIllustrations();

    if (doPop && popQueue.length) {
      const step = POP_CONFIG.staggerMs / 1000;
      popQueue.forEach((q, i) => playDotPop(q.entry, q.target, i * step));
      if (trigger !== "zoom") scheduleBurst(visible, (popQueue.length - 1) * step);
    }
  }

  /* 缩放驱动的圆点 ⇄ 插画过渡：屏幕空间足够且与邻居不重叠时，圆点自动平滑切换为插画 */
  function ensureImageEl(p, entry) {
    if (entry.imgEl) return true;
    if (state.imgAvailable && !state.imgAvailable.has(p.id.toLowerCase())) return false; // 尚无对应抠图
    const icon = L.divIcon({
      className: "product-img",
      html: "",
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });
    const marker = L.marker(L.latLng(num(p.basic.latitude), num(p.basic.longitude)), {
      icon,
      interactive: false,
      keyboard: false,
      zIndexOffset: -6,
    });
    const img = document.createElement("img");
    img.src = `assets/illustrations/splash/cutout/${p.id.toLowerCase()}.webp`;
    img.alt = "";
    img.style.cssText = "position:absolute;left:0;top:0;width:80px;height:80px;object-fit:contain;pointer-events:auto;cursor:pointer;transform:translate(-50%,-50%) scale(0.45);opacity:0;will-change:transform,opacity;";
    img.addEventListener("click", (e) => {
      L.DomEvent.stopPropagation(e);
      selectProduct(p.id);
    });
    img.addEventListener("mouseover", (e) => onDotHover(p, e, true));
    img.addEventListener("mouseout", () => onDotHover(p, null, false));
    img.onerror = () => {
      entry.imgUnavailable = true;
      if (entry.imgState === "image") hideImage(entry);
    };
    marker.addTo(imgLayer);
    const wrap = marker.getElement();
    if (wrap) wrap.appendChild(img);
    entry.imgMarker = marker;
    entry.imgEl = img;
    return true;
  }

  function imageSizeAt(zoom) {
    return Math.max(48, Math.min(260, 48 + (zoom - IMG_ZOOM) * 32));
  }

  function showImage(p, entry, sizeOverride) {
    if (!ensureImageEl(p, entry)) return;
    if (entry.imgMarker && !imgLayer.hasLayer(entry.imgMarker)) {
      imgLayer.addLayer(entry.imgMarker);
      const wrap = entry.imgMarker.getElement();
      if (wrap && !wrap.contains(entry.imgEl)) wrap.appendChild(entry.imgEl);
    }
    if (entry.imgEl) entry.imgEl.style.pointerEvents = "auto";
    const size = sizeOverride || imageSizeAt(map.getZoom());
    entry.imgEl.style.width = size + "px";
    entry.imgEl.style.height = size + "px";
    entry.imgEl.dataset.size = String(size);
    entry.imgState = "image";
    gsap.to(entry.imgEl, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
    const el = entry.dot.getElement();
    if (el) gsap.to(el, { opacity: 0, duration: 0.4, ease: "power2.in" });
  }

  function resizeImage(entry, size) {
    const el = entry.imgEl;
    if (!el || entry.imgState !== "image" || el.dataset.size === String(size)) return;
    el.dataset.size = String(size);
    el.style.width = size + "px";
    el.style.height = size + "px";
  }

  function hideImage(entry) {
    if (entry.imgState !== "image") return;
    entry.imgState = "dot";
    if (entry.imgEl) {
      entry.imgEl.style.pointerEvents = "none";
      gsap.to(entry.imgEl, { opacity: 0, scale: 0.45, duration: 0.4, ease: "power2.in" });
    }
    const el = entry.dot.getElement();
    if (el) gsap.to(el, { opacity: 1, duration: 0.4, ease: "power2.out" });
  }

  function syncIllustrations() {
    if (state.splashActive) return;
    const zoom = map.getZoom();
    const clustered = zoom < CLUSTER_ZOOM;
    const visible = visibleProducts();
    const pts = new Map();
    for (const p of visible) {
      const entry = dots.get(p.id);
      if (!entry) continue;
      pts.set(p.id, map.latLngToContainerPoint(L.latLng(num(p.basic.latitude), num(p.basic.longitude))));
    }
    /* 只要圆心间距 ≥22px（圆点互不重叠）就切换为插画；
       尺寸按“实际间距 − 6px”自适应，放大后随间距增长，最大不超过 imageSizeAt */
    const SHOW_MIN_GAP = 22;
    const showSizes = new Map();
    if (!clustered && zoom >= IMG_ZOOM && zoom > (state.defaultZoom || 0)) {
      const maxSize = imageSizeAt(zoom);
      for (const [id, pt] of pts) {
        let minDist = Infinity;
        for (const [id2, pt2] of pts) {
          if (id === id2) continue;
          const d = pt.distanceTo(pt2);
          if (d < minDist) minDist = d;
        }
        if (minDist < SHOW_MIN_GAP) continue;   // 过挤保持圆点
        const size = minDist === Infinity ? maxSize : Math.max(22, Math.min(maxSize, minDist - 6));
        showSizes.set(id, size);
      }
    }
    for (const [id, entry] of dots) {
      if (entry.imgUnavailable) {
        if (entry.imgState === "image") hideImage(entry);
        continue;
      }
      const wantImage = showSizes.has(id);
      if (wantImage && entry.imgState !== "image") showImage(state.byId.get(id), entry, showSizes.get(id));
      else if (wantImage) resizeImage(entry, showSizes.get(id));
      else if (!wantImage && entry.imgState === "image") hideImage(entry);
    }
  }

  function applyStyle(entry, target) {
    entry.dot.setStyle({
      radius: target.r,
      color: target.color,
      fillColor: target.color,
      fillOpacity: 0.95,
      opacity: target.opacity,
    });
    entry.halo.setStyle({ radius: target.haloR, fillColor: target.color, fillOpacity: target.haloOpacity });
    const el = entry.dot.getElement();
    if (el) {
      el.style.pointerEvents = target.opacity > 0.3 ? "auto" : "none";
      el.setAttribute("data-pid", entry.pid);
    }
    if (COARSE && target.opacity > 0.3) {
      entry.dot.setStyle({ weight: 12, color: "rgba(0,0,0,0)" });
      if (el) el.style.pointerEvents = "all";
    }
    if (target.labelOn) labelLayer.addLayer(entry.label);
    else labelLayer.removeLayer(entry.label);
    dotStates.set(entry.pid, Object.assign({}, target, { color: target.color }));
  }

  function tweenDot(p, entry, target) {
    const from = dotStates.get(entry.pid) || { opacity: 0, r: 5, color: STAGE.dormant.color, haloR: 22, haloOpacity: 0 };
    const t0 = performance.now();
    const el0 = entry.dot.getElement();
    if (el0) el0.setAttribute("data-pid", entry.pid);
    if (target.labelOn) labelLayer.addLayer(entry.label);
    else labelLayer.removeLayer(entry.label);

    function frame(now) {
      const t = Math.min(1, (now - t0) / ANIM_MS);
      const e = easeInOut(t);
      const color = lerpColor(from.color, target.color, e);
      const opacity = lerp(from.opacity, target.opacity, e);
      entry.dot.setStyle({
        radius: lerp(from.r, target.r, e),
        color,
        fillColor: color,
        fillOpacity: 0.95,
        opacity,
      });
      entry.halo.setStyle({
        radius: lerp(from.haloR, target.haloR, e),
        fillColor: color,
        fillOpacity: lerp(from.haloOpacity, target.haloOpacity, e),
      });
      const el = entry.dot.getElement();
      if (el) el.style.pointerEvents = opacity > 0.3 ? "auto" : "none";
      if (t < 1) requestAnimationFrame(frame);
      else dotStates.set(entry.pid, Object.assign({}, target, { color: target.color }));
    }
    requestAnimationFrame(frame);
  }

  function fadeOutAndRemove(entry) {
    const t0 = performance.now();
    const from = dotStates.get(entry.pid) || { opacity: 1, r: 5, color: "#a7b09c", haloR: 22, haloOpacity: 0.13 };
    function frame(now) {
      const t = Math.min(1, (now - t0) / (ANIM_MS * 0.8));
      const e = easeInOut(t);
      entry.dot.setStyle({ opacity: lerp(from.opacity, 0, e) });
      entry.halo.setStyle({ fillOpacity: lerp(from.haloOpacity, 0, e) });
      if (t < 1) requestAnimationFrame(frame);
      else {
        originLayer.removeLayer(entry.dot);
        haloLayer.removeLayer(entry.halo);
        labelLayer.removeLayer(entry.label);
      }
    }
    requestAnimationFrame(frame);
  }

  /* ---------------- 标签避让 ---------------- */
  function renderLabels(visible) {
    // 清空旧标签方向，仅保留在本月可见集合内的标签
    for (const entry of dots.values()) {
      if (!state.visiblePids.has(entry.pid)) labelLayer.removeLayer(entry.label);
      else labelLayer.addLayer(entry.label);
    }
    layoutTimer && clearTimeout(layoutTimer);
    layoutTimer = setTimeout(() => layoutLabels(visible), 30);
  }

  function layoutLabels(visible) {
    const rects = [];
    const placed = visible
      .map((p) => {
        const row = monthRow(p, state.month);
        const a = num(row && row.seasonal_activity) || 0;
        const ll = L.latLng(num(p.basic.latitude), num(p.basic.longitude));
        const pt = map.latLngToContainerPoint(ll);
        return { pid: p.id, p, pt, a, w: textWidth(p.name), h: 14 };
      })
      .sort((x, y) => y.a - x.a);

    for (const item of placed) {
      const pad = 4;
      const candidates = [
        { dir: "below", x: item.pt.x - item.w / 2, y: item.pt.y + 12 },
        { dir: "above", x: item.pt.x - item.w / 2, y: item.pt.y - 26 },
        { dir: "left",  x: item.pt.x - item.w - 8, y: item.pt.y - 7 },
        { dir: "right", x: item.pt.x + 8,          y: item.pt.y - 7 },
      ];
      let chosen = candidates[0];
      for (const c of candidates) {
        const r = { x: c.x - pad, y: c.y - pad, w: item.w + pad * 2, h: item.h + pad * 2 };
        if (!rects.some((o) => overlap(r, o))) { chosen = c; break; }
      }
      rects.push({ x: chosen.x - pad, y: chosen.y - pad, w: item.w + pad * 2, h: item.h + pad * 2 });
      const entry = dots.get(item.pid);
      if (entry) {
        const el = entry.label.getElement();
        if (el) el.setAttribute("data-dir", chosen.dir);
        if (state.activePid === item.pid) {
          const span = el && el.querySelector(".pl");
          if (span) span.classList.add("strong");
        }
      }
    }
  }

  function overlap(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  /* ---------------- 聚合 ---------------- */
  function addGeography() {
    // 注：Esri Hillshade 在部分网络环境不可达（arcgisonline.com），故不使用；
    // 山的表达改用「山形符号串 + 山名」（见下方山脉段落），零外部依赖。

    // 经纬网（极淡，仅保留技术感）
    const gridStyle = { color: "#b9b2a1", weight: 0.6, opacity: 0.2, dashArray: "1 5", interactive: false };
    for (let lon = 116; lon <= 120; lon++) {
      L.polyline([[GRID_BOUNDS.latMin, lon], [GRID_BOUNDS.latMax, lon]], gridStyle).addTo(geogLayer);
    }
    for (let lat = 24; lat <= 28; lat++) {
      L.polyline([[lat, GRID_BOUNDS.lonMin], [lat, GRID_BOUNDS.lonMax]], gridStyle).addTo(geogLayer);
    }
    for (let lon = 116; lon <= 120; lon++) addGeoLabel([23.62, lon], lon + "°E", "grid");
    for (let lat = 24; lat <= 28; lat++) addGeoLabel([lat, 115.88], lat + "°N", "grid");

    // 山脉：不画符号不画线，仅以山名文字标注（配合淡色底图的自然地形肌理）
    for (const m of MOUNTAINS) {
      addGeoLabel(m.labelAt, m.name, "mountain");
    }

    // 水系：OpenStreetMap 实测轨迹，按主干/支流分级
    const rivers = state.riversGeo && state.riversGeo.features ? state.riversGeo.features : [];
    const labeled = new Set();
    for (const f of rivers) {
      const name = f.properties && f.properties.name;
      const tier = f.properties && f.properties.tier;
      const coords = f.geometry && f.geometry.coordinates;
      if (!name || !coords || coords.length < 2) continue;
      const style = tier === 1
        ? { color: "#6f8fb0", weight: 2.6, opacity: 0.5, lineCap: "round", lineJoin: "round" }
        : tier === 2
          ? { color: "#7d9cb8", weight: 1.7, opacity: 0.38, lineCap: "round", lineJoin: "round" }
          : { color: "#8fa9c2", weight: 0.9, opacity: 0.28, lineCap: "round", lineJoin: "round" };
      style.interactive = false;
      L.polyline(coords, style).addTo(geogLayer);
      if (RIVER_T1.has(name) && !labeled.has(name) && coords.length >= 3) {
        labeled.add(name);
        const at = coords[Math.floor(coords.length * 0.4)];
        addGeoLabel([at[1], at[0]], name, "river");
      }
    }
  }

  function addGeoLabel(ll, text, variant) {
    const icon = L.divIcon({
      className: "geo-label " + variant,
      html: `<span class="gl">${escapeHtml(text)}</span>`,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });
    L.marker(ll, { icon, interactive: false, keyboard: false, zIndexOffset: -30 }).addTo(geogLayer);
  }

  function renderClusters(visible, trigger) {
    clusterLayer.clearLayers();
    if (!visible.length) return;
    const doPop = !REDUCED_MOTION && window.gsap && POP_CONFIG.triggerOn.includes(trigger) && trigger !== "zoom";
    const step = POP_CONFIG.staggerMs / 1000;
    const cell = 64;
    const buckets = new Map();
    for (const p of visible) {
      const ll = L.latLng(num(p.basic.latitude), num(p.basic.longitude));
      const pt = map.latLngToContainerPoint(ll);
      const key = Math.floor(pt.x / cell) + "_" + Math.floor(pt.y / cell);
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push({ p, ll });
    }
    let idx = 0;
    for (const group of buckets.values()) {
      if (group.length === 1) {
        renderSingleInCluster(group[0], doPop, idx * step);
      } else {
        renderClusterNode(group, doPop, idx * step);
      }
      idx++;
    }
    clusterLayer.addTo(map);
  }

  function renderSingleInCluster(item, doPop, delay) {
    const row = monthRow(item.p, state.month);
    const st = stageFor(row, productKind(item.p));
    const sz = sizeFor(num(row && row.seasonal_activity) || 0);
    const dot = L.circleMarker(item.ll, {
      radius: Math.min(sz.r, 7),
      color: COARSE ? "rgba(0,0,0,0)" : mapColor(st),
      fillColor: mapColor(st),
      fillOpacity: 0.95,
      weight: COARSE ? 12 : 1,
      opacity: 1,
      className: "origin-dot",
    });
    const halo = L.circle(item.ll, {
      radius: Math.min(sz.halo, 30),
      color: "transparent",
      fillColor: mapColor(st),
      fillOpacity: 0.13,
      weight: 0,
      className: "origin-halo",
      interactive: false,
    });
    dot.on("mouseover", (e) => onDotHover(item.p, e, true));
    dot.on("mouseout", () => onDotHover(item.p, null, false));
    dot.on("click", (e) => { L.DomEvent.stopPropagation(e); selectProduct(item.p.id); });
    dot.addTo(clusterLayer);
    halo.addTo(clusterLayer);
    if (COARSE) {
      const el = dot.getElement();
      if (el) el.style.pointerEvents = "all";
    }
    if (doPop) playClusterPop([dot.getElement(), halo.getElement()], item.ll, mapColor(st), { r: Math.min(sz.r, 7) + 4, delay });
  }

  function renderClusterNode(group, doPop, delay) {
    const pts = group.map((g) => g.ll);
    const c = pts.reduce((acc, ll) => ({ lat: acc.lat + ll.lat, lng: acc.lng + ll.lng }), { lat: 0, lng: 0 });
    const center = L.latLng(c.lat / pts.length, c.lng / pts.length);
    const n = pts.length;

    // 统计成员物候色，取最多 5 种主导色堆叠展示
    const colorCount = new Map();
    for (const g of group) {
      const st = stageFor(monthRow(g.p, state.month), productKind(g.p));
      colorCount.set(st, (colorCount.get(st) || 0) + 1);
    }
    const topStages = [...colorCount.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map((e) => e[0]);
    const OFFSETS = [[0, 0], [-5, -4], [5, 4], [-7, 5], [7, -5]];
    const cpt = map.latLngToContainerPoint(center);

    // 共享呼吸光晕
    const halo = L.circle(center, {
      radius: 26,
      color: "transparent",
      fillColor: "#5f6d5f",
      fillOpacity: 0.12,
      weight: 0,
      className: "origin-halo pulse",
      interactive: false,
    });

    // 成员色点交错堆叠
    const dots = topStages.map((st, i) => {
      const off = OFFSETS[i] || [0, 0];
      const ll = map.containerPointToLatLng(cpt.add(L.point(off[0], off[1])));
      return L.circleMarker(ll, {
        radius: 8,
        color: COARSE ? "rgba(0,0,0,0)" : mapColor(st),
        fillColor: mapColor(st),
        fillOpacity: 0.95,
        weight: COARSE ? 12 : 1,
        opacity: 0.95,
        className: "origin-dot",
      });
    });

    const names = group.slice(0, 3).map((g) => g.p.name).join("、");
    const tail = n > 3 ? "等" + n + "种" : "";
    for (const dot of dots) {
      dot.on("mouseover", (e) => {
        showTooltip(e, n + " 种物产在此附近", names + tail + " · 点击放大查看");
        dot.setStyle({ radius: 9 });
      });
      dot.on("mouseout", () => {
        hideTooltip();
        dot.setStyle({ radius: 8 });
      });
      dot.on("click", (e) => {
        L.DomEvent.stopPropagation(e);
        const target = Math.min(Math.max(map.getZoom() + 2, 9), 13);
        map.flyTo(center, target, { duration: 0.5 });
      });
    }

    const label = L.marker(center, {
      icon: L.divIcon({
        className: "cluster-label",
        html: `<span>${n}种</span>`,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
      }),
      interactive: true,
      keyboard: false,
      zIndexOffset: -4,
    });
    label.on("click", (e) => {
      L.DomEvent.stopPropagation(e);
      map.flyTo(center, Math.min(Math.max(map.getZoom() + 2, 9), 13), { duration: 0.5 });
    });
    halo.addTo(clusterLayer);
    for (const dot of dots) {
      dot.addTo(clusterLayer);
      if (COARSE) {
        const el = dot.getElement();
        if (el) el.style.pointerEvents = "all";
      }
    }
    label.addTo(clusterLayer);
    if (doPop) {
      playClusterPop(
        [halo.getElement()].concat(dots.map((d) => d.getElement())),
        center,
        mapColor(topStages[0]),
        { r: 30, delay }
      );
    }
  }

  /* 聚合簇出现动画：成员点错峰生长 + 撞色环涌现 → 外环淡出 */
  function playClusterPop(els, latlng, color, opts) {
    if (REDUCED_MOTION) return;
    const canScale = SUPPORTS_FILLBOX;
    const delay = opts.delay || 0;
    const ringColor = ringColorFor("", color);
    let ring = null, ringEl = null;
    if (ringColor) {
      ring = L.circleMarker(latlng, {
        radius: opts.r || 24,
        color: ringColor,
        weight: 0.8,
        fill: false,
        opacity: 1,
        interactive: false,
        className: "origin-pop-ring",
      });
      popLayer.addLayer(ring);
      ringEl = ring.getElement();
      if (ringEl) prepPath(ringEl);
    }
    els.forEach((el, i) => {
      if (!el) return;
      prepPath(el);
      const d = i * 0.035;
      if (canScale) animatePop(el, "anim-pop", delay + d);
      else animateFade(el, delay + d, "anim-fade");
    });
    if (ringEl) {
      if (canScale) animatePop(ringEl, "anim-ring", delay, () => { if (ring) popLayer.removeLayer(ring); });
      else animateFade(ringEl, delay + 0.45, "anim-fade-out", () => { if (ring) popLayer.removeLayer(ring); });
    }
  }

  /* ---------------- 悬停 / 点击 ---------------- */
  function onDotHover(p, e, over) {
    const entry = dots.get(p.id);
    if (!entry || !originLayer.hasLayer(entry.dot)) {
      // 聚合模式下的单个原点（clusterLayer 内的 dot）
      if (over) {
        showTooltip(e, p.name, statusLine(p));
      } else {
        hideTooltip();
      }
      return;
    }
    const row = monthRow(p, state.month);
    const a = num(row && row.seasonal_activity) || 0;
    const sz = sizeFor(a);
    if (over) {
      const st = stageFor(row, productKind(p));
      entry.dot.setStyle({ radius: sz.r * 1.18 });
      entry.halo.setStyle({ radius: sz.halo * 1.25, fillOpacity: 0.18 });
      showTooltip(e, p.name, statusLine(p), mapColor(st));
      const el = entry.label.getElement();
      if (el) {
        const span = el.querySelector(".pl");
        if (span) span.classList.add("strong");
      }
    } else {
      const target = targetStyle(p);
      entry.dot.setStyle({ radius: target.r });
      entry.halo.setStyle({ radius: target.haloR, fillOpacity: target.haloOpacity });
      hideTooltip();
      const el = entry.label.getElement();
      if (el) {
        const span = el.querySelector(".pl");
        if (span) span.classList.remove("strong");
      }
    }
  }

  function statusLine(p) {
    const row = state.month === 0 ? primaryCoreRow(p) : monthRow(p, state.month);
    const sts = statusLabelFor(row && row.phenology_status, p) || "无明确物候";
    const a = num(row && row.seasonal_activity) || 0;
    return `${state.month === 0 ? "全年" : state.month + "月"} · ${sts} · 活跃度${a}`;
  }

  function showTooltip(e, name, line, color) {
    const el = $("#mapTooltip");
    el.hidden = false;
    const dot = `<span class="tt-dot" style="background:${color || "#a7b09c"}"></span>`;
    el.innerHTML = `<div class="tt-name">${dot}${escapeHtml(name)}</div><div class="tt-line">${escapeHtml(line)}</div>`;
    const wrap = document.querySelector(".map-wrap");
    const rect = wrap.getBoundingClientRect();
    const x = (e.originalEvent ? e.originalEvent.clientX : e.clientX) - rect.left + 14;
    const y = (e.originalEvent ? e.originalEvent.clientY : e.clientY) - rect.top + 12;
    el.style.left = Math.min(x, rect.width - 170) + "px";
    el.style.top = Math.min(y, rect.height - 60) + "px";
  }
  function hideTooltip() {
    $("#mapTooltip").hidden = true;
  }

  function selectProduct(pid) {
    state.activePid = pid;
    ringLayer.clearLayers();
    const dim = pid != null;
    for (const entry of dots.values()) {
      const target = targetStyle(entry && state.byId.get(entry.pid));
      if (!target) continue;
      if (dim && entry.pid !== pid) {
        entry.dot.setStyle({ opacity: 0.6 });
        entry.halo.setStyle({ fillOpacity: 0.06 });
      } else if (dim && entry.pid === pid) {
        entry.dot.setStyle({ opacity: 1 });
        entry.halo.setStyle({ fillOpacity: 0.16 });
      } else {
        entry.dot.setStyle({ opacity: target.opacity });
        entry.halo.setStyle({ fillOpacity: target.haloOpacity });
      }
    }
    if (pid) {
      const p = state.byId.get(pid);
      if (p) {
        const ll = L.latLng(num(p.basic.latitude), num(p.basic.longitude));
        const ring = L.circleMarker(ll, {
          radius: 14,
          color: "#3c4038",
          weight: 1,
          fill: false,
          opacity: 0.55,
          dashArray: "2 3",
          className: "origin-ring",
        });
        ring.addTo(ringLayer);
        renderDetail(p);
        if ($("#detailBody")) $("#detailBody").scrollTop = 0;   // 每次打开都从顶部开始
        $("#detailCard").classList.add("open");
        $("#detailCard").setAttribute("aria-hidden", "false");
        layoutLabels(visibleProducts());
      }
    } else {
      $("#detailCard").classList.remove("open");
      $("#detailCard").setAttribute("aria-hidden", "true");
    }
  }

  /* ---------------- 状态栏 ---------------- */
  function renderStatus(n) {
    const el = $("#mapStatus");
    const filterOn = Object.values(state.filters).some((s) => s && s.size > 0);
    const label = state.showAll ? "（显示所有物产）" : "";
    const when = state.month === 0 ? "全年" : state.month + "月";
    if (state.month === 0) {
      el.textContent = n === 0
        ? "全年 · 暂无符合条件的物产"
        : state.showAll
          ? `全年 · ${n} 种物产（显示所有物产）${filterOn ? " · 已筛选" : ""}`
          : `全年 · ${n} 种物产持续发生${filterOn ? " · 已筛选" : ""}`;
    } else if (n === 0) {
      el.textContent = `${when} · 本月暂无核心风土动作`;
    } else {
      el.textContent = `${when} · ${n} 种物产正在发生核心风土动作 ${label}${filterOn ? " · 已筛选" : ""}`;
    }
  }

  /* ---------------- 月份导语浮块 ---------------- */
  function monthImagePool(m) {
    const avail = state.imgAvailable;
    if (!avail) return [];
    // 只保留当月主角的插画（主角随月轮换 → 导语插画每月不同）
    const heroes = computeHeroes(m);
    const heroPool = [];
    for (const p of state.products) {
      if (!heroes.has(p.id) || !avail.has(p.id.toLowerCase())) continue;
      heroPool.push({
        url: `assets/illustrations/splash/cutout/${p.id.toLowerCase()}.webp`,
        name: p.name,
        id: p.id,
        category: (p.basic && p.basic.category) || "",
      });
    }
    if (heroPool.length) {
      for (let i = heroPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const t = heroPool[i]; heroPool[i] = heroPool[j]; heroPool[j] = t;
      }
      return heroPool;
    }
    // 兜底：主角均无插画时，退回当月核心动作物产
    const core = [], any = [];
    for (const p of state.products) {
      if (state.yearRoundIds.has(p.id)) continue;
      const row = p._pheno && p._pheno[m];
      if (!row || !avail.has(p.id.toLowerCase())) continue;
      const hl = state.highlightMonths && state.highlightMonths.get(p.id);
      if (hl && !hl.has(m)) continue;
      if (isCoreStatus(String(row.phenology_status || ""), productKind(p))) core.push(p);
      else any.push(p);
    }
    const list = core.length ? core : any;
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = list[i]; list[i] = list[j]; list[j] = t;
    }
    return list.map((p) => ({
      url: `assets/illustrations/splash/cutout/${p.id.toLowerCase()}.webp`,
      name: p.name,
      id: p.id,
      category: (p.basic && p.basic.category) || "",
    }));
  }

  function stopGuideCarousel() {
    if (state.guideTimer) { clearInterval(state.guideTimer); state.guideTimer = null; }
  }

  function openMonthGuide(m) {
    const overlay = $("#monthGuide");
    const g = state.monthGuides && state.monthGuides.find((x) => Number(x.month) === m);
    if (!overlay || !g) return;
    $("#mgMonth").textContent = m + "月";
    const themeParts = String(g.theme || "").split(/[：:]/);
    $("#mgThemeWord").textContent = themeParts[0] || "";
    // 右侧竖排：金句整句一列（加粗，在右），主题补充句整句一列（在左）
    const q = String(g.quote || "").trim();
    const tail = String(themeParts[1] || "").trim();
    $("#mgQuoteCol").innerHTML =
      (q ? `<span class="mg-quote-main">${escapeHtml(q)}</span>` : "") +
      (tail ? `<span class="mg-quote-sub">${escapeHtml(tail)}</span>` : "");
    $("#mgBody").textContent = g.body || "";

    stopGuideCarousel();
    const pool = monthImagePool(m);
    const media = $("#mgMedia");
    const imgs = [$("#mgImgA"), $("#mgImgB")];
    if (!pool.length) {
      media.style.display = "none";
      $("#mgCaption").textContent = "";
    } else {
      media.style.display = "flex";
      pool.forEach((it) => { const im = new Image(); im.src = it.url; });   // 预载
      imgs[0].src = pool[0].url;
      imgs[1].src = (pool.length > 1 ? pool[1] : pool[0]).url;
      imgs[0].style.opacity = "1";
      imgs[1].style.opacity = "0";
      state.guideIdx = 0;
      if (!REDUCED_MOTION) {
        state.guideTimer = setInterval(() => {
          const next = (state.guideIdx + 1) % pool.length;
          const cur = imgs[state.guideIdx % 2];
          const nxt = imgs[(state.guideIdx + 1) % 2];
          nxt.src = pool[next].url;
          nxt.style.opacity = "1";
          cur.style.opacity = "0";
          state.guideIdx = next;
        }, 500);
      }
    }
    overlay.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => requestAnimationFrame(() => overlay.classList.add("show")));
  }

  /* 关闭导语后补播原点出现动画（撞色环 → 错峰生长 → 整体扩散） */
  function revealGuidedDots() {
    state.guidePendingReveal = false;
    if (REDUCED_MOTION || !window.gsap) return;
    const visible = visibleProducts();
    const queue = [];
    for (const p of visible) {
      const entry = dots.get(p.id);
      if (!entry || !originLayer.hasLayer(entry.dot)) continue;
      queue.push({ entry, target: targetStyle(p) });
    }
    if (!queue.length) return;
    const step = POP_CONFIG.staggerMs / 1000;
    queue.forEach((q, i) => playDotPop(q.entry, q.target, i * step));
    scheduleBurst(visible, (queue.length - 1) * step);
  }

  function closeMonthGuide() {
    stopGuideCarousel();
    const overlay = $("#monthGuide");
    if (!overlay || !overlay.classList.contains("show")) return;
    overlay.classList.remove("show");
    overlay.setAttribute("aria-hidden", "true");
    if (state.guidePendingReveal) revealGuidedDots();
  }

  /* ---------------- 月份时间轴 ---------------- */
  function buildMonthTimeline() {
    const tl = $("#monthTimeline");
    tl.innerHTML = "";
    MONTHS.forEach((name, i) => {
      const m = i + 1;
      const item = document.createElement("button");
      item.className = "month-item" + (m === state.month ? " active" : "");
      item.dataset.month = m;
      item.type = "button";
      item.title = `${m}月 ${name}`;
      item.innerHTML = `<span class="mi-dot"></span><span class="mi-num">${m}月</span>`;
      item.addEventListener("click", () => setMonth(m, true));
      tl.appendChild(item);
    });
    // 「全年都有」时间按钮（第 13 个节点）
    const yr = document.createElement("button");
    yr.className = "month-item year-round" + (state.month === 0 ? " active" : "");
    yr.dataset.month = 0;
    yr.type = "button";
    yr.title = "全年都有";
    yr.innerHTML = `<span class="mi-dot"></span><span class="mi-num">全年都有</span>`;
    yr.addEventListener("click", () => setMonth(0));
    tl.appendChild(yr);
    // 滑动切换月份（左右滑动时间轴）
    let sx = null;
    tl.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
    tl.addEventListener("touchend", (e) => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 30) setMonth(state.month + (dx < 0 ? 1 : -1), true);
      sx = null;
    }, { passive: true });
  }

  function syncTimeline() {
    document.querySelectorAll(".month-item").forEach((b) => b.classList.toggle("active", Number(b.dataset.month) === state.month));
    const el = document.querySelector(`.month-item[data-month="${state.month}"]`);
    if (el) el.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }

  function setMonth(m, showGuide) {
    if (m < 0) m = 12;
    if (m > 12) m = 1;
    if (m === state.month) return;
    state.month = m;
    state.heroes = computeHeroes(m);   // 主角随月轮换
    try { history.replaceState(null, "", "?month=" + m); } catch (e) { /* noop */ }
    syncTimeline();
    if (state.activePid) selectProduct(null);
    if (showGuide) state.guidePendingReveal = true;   // 导语打开期间不播原点动画，关闭后再补播
    renderOrigins(true, "month");
    if (showGuide) openMonthGuide(m);
  }

  function scrollActiveMonth() {
    const el = document.querySelector(`.month-item[data-month="${state.month}"]`);
    if (el) el.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }

  function openFilters() {
    $("#sidebar").classList.add("open");
    const b = $("#drawerBackdrop");
    b.hidden = false;
    requestAnimationFrame(() => b.classList.add("show"));
  }
  function closeFilters() {
    $("#sidebar").classList.remove("open");
    const b = $("#drawerBackdrop");
    b.classList.remove("show");
    setTimeout(() => { b.hidden = true; }, 260);
  }

  /* ---------------- 筛选 ---------------- */
  function buildFilters() {
    const box = $("#filterGroups");
    box.innerHTML = "";
    FILTER_GROUPS.forEach((g, gi) => {
      const wrap = document.createElement("div");
      wrap.className = "filter-group" + (gi === 0 ? " open" : "");
      const title = document.createElement("button");
      title.className = "filter-group-title";
      title.type = "button";
      title.innerHTML = `<span>${escapeHtml(g.label)}</span><span class="chev">▶</span>`;
      const chips = document.createElement("div");
      chips.className = "chips" + (gi === 0 ? "" : " collapsed");
      g.values.forEach((v) => {
        const chip = document.createElement("button");
        chip.className = "chip";
        chip.textContent = v;
        chip.addEventListener("click", () => {
          if (!state.filters[g.key]) state.filters[g.key] = new Set();
          const s = state.filters[g.key];
          if (s.has(v)) s.delete(v); else s.add(v);
          if (s.size === 0) delete state.filters[g.key];
          chip.classList.toggle("on", s.has(v));
          renderOrigins(false, "filter");
        });
        chips.appendChild(chip);
      });
      title.addEventListener("click", () => {
        wrap.classList.toggle("open");
        chips.classList.toggle("collapsed");
      });
      wrap.appendChild(title);
      wrap.appendChild(chips);
      box.appendChild(wrap);
    });
    $("#btnClearFilters").addEventListener("click", () => {
      state.filters = {};
      document.querySelectorAll(".chip").forEach((c) => c.classList.remove("on"));
      renderOrigins(false, "filter");
    });
  }

  /* ---------------- 详情卡 ---------------- */
  function renderDetail(p) {
    const b = p.basic, t = p.terroir;
    const cc = (state.cardContent && state.cardContent[p.id]) || {};
    // 深度内容懒加载：首次打开详情时拉取 card_content.json，返回后若详情仍打开则重绘
    if (!cc.place_intro && !cardContentLoaded) {
      ensureCardContent().then(() => { if (state.activePid === p.id) renderDetail(p); });
    }
    const el = $("#detailBody");

    const hasImg = !!(state.imgAvailable && state.imgAvailable.has(p.id.toLowerCase()));
    const illustrationHtml = hasImg
      ? `<img class="dc-illustration-img" src="assets/illustrations/${p.id.toLowerCase()}.webp" alt="${escapeHtml(b.product_name)} 物产插画">`
      : `<div class="dc-illustration-placeholder"><span>${escapeHtml(b.category || "物产")} · 插画待补充</span></div>`;

    const subParts = [b.category, b.subcategory, b.product_type, `${b.city || ""}${b.county ? " " + b.county : ""}`].filter(Boolean);
    const placeText = cc.place_intro || `${(b.county || "").replace("|", "、")}是${b.product_name}的主要产区。`;
    const whyObj = cc.why_here;
    const whyText = (typeof whyObj === "string" ? whyObj : (whyObj && whyObj.content) || "") || t.terroir_summary || "";
    const kws = (cc.keywords && cc.keywords.length) ? cc.keywords : multi(t.terroir_tags).slice(0, 5);
    const annualTitle = cc.annual_title || (b.product_name + "的一年");
    const annualText = cc.annual_cycle || b.seasonality_summary || "";

    const wrow = (label, val) => (val ? `<tr><td>${escapeHtml(label)}</td><td>${escapeHtml(val)}</td></tr>` : "");
    const climateCell = [t.temperature_class, t.precipitation_class, t.moisture_class].filter(Boolean).join(" · ");
    const soilCell = [t.soil_class, t.soil_type].filter(Boolean).join(" · ");
    const terroirRows = [
      wrow("地形", t.terrain), wrow("地貌", t.landform), wrow("海拔", t.elevation_class),
      wrow("气候", climateCell), wrow("水文", t.water_type), wrow("土壤", soilCell),
      wrow("生态", t.ecosystem), wrow("生产方式", t.wild_cultivated),
    ].join("");

    const phenoHtml = MONTHS.map((name, i) => {
      const m = i + 1;
      const row = monthRow(p, m);
      const st = stageFor(row, productKind(p));
      const sts = cardStageLabel(p, st);
      const cls = "pheno-cell" + (m === state.month ? " now" : "");
      return `<div class="${cls}" data-m="${m}" title="${m}月 · ${escapeHtml(sts)}">
        <div class="p-dot" style="background:${STAGE[st].color}"></div>
        <div class="p-m">${m}</div>
        <span class="p-s">${escapeHtml(sts)}</span>
      </div>`;
    }).join("");

    const curRow = monthRow(p, state.month);
    const curStatus = statusLabelFor(curRow && curRow.phenology_status, p) || "无明确物候";
    const curAct = (curRow && (curRow.human_activity || curRow.natural_change)) || "";
    const curLine = `${state.month}月 · ${curStatus}${curAct ? "：" + escapeHtml(curAct) : ""}`;

    const dims = [["production_craft", "生产与技艺"], ["labor", "劳作"], ["food", "饮食"], ["culture", "文化"], ["industry", "产业"]];
    const living = cc.living || {};
    const hasLiving = Object.keys(living).length > 0;
    const livingDims = hasLiving ? dims.filter(([k]) => living[k] && living[k].content) : dims;
    let livingHtml;
    if (!livingDims.length) {
      livingHtml = `<p class="dc-muted">本物产暂无可展示的可靠内容。</p>`;
    } else {
      const firstLabel = livingDims[0][1];
      livingHtml = `<p class="dc-muted living-hint">默认展开「${escapeHtml(firstLabel)}」，点击其他标签切换维度，再点当前标签收起。</p>
        <div class="living-tabs">${livingDims.map(([k, label], i) => {
          const cls = "living-tab" + (i === 0 ? " active" : " guide");
          return `<button class="${cls}" data-dim="${k}">${escapeHtml(label)}</button>`;
        }).join("")}</div>
        <div class="living-panels">${livingDims.map(([k, label], i) => {
          const item = living[k];
          const content = item && item.content
            ? `<p class="dc-text">${escapeHtml(item.content)}</p>`
            : `<p class="dc-muted living-pending">内容撰写中，待外部 Agent 交付后填充（无可靠资料的维度将不显示）。</p>`;
          return `<div class="living-panel${i === 0 ? " open" : ""}" data-panel="${k}">${content}</div>`;
        }).join("")}</div>`;
    }

    const giHtml = multi(b.geographical_indication).map((g) => `<span class="dc-gi">${escapeHtml(g)}</span>`).join("");

    el.innerHTML = `
      <div class="dc-illustration">${illustrationHtml}</div>

      <div class="dc-name">${escapeHtml(b.product_name)}</div>
      <p class="dc-sub">${escapeHtml(subParts.join(" · "))}</p>

      <div class="dc-section">
        <h3>${escapeHtml(annualTitle)}</h3>
        ${annualText ? `<p class="dc-text">${escapeHtml(annualText)}</p>` : ""}
        <div class="pheno-strip">${phenoHtml}</div>
        <p class="dc-muted dc-monthline">${curLine}</p>
        <p class="dc-muted dc-tip">点击月份可切换地图时间；当前月份高亮。</p>
      </div>

      <div class="dc-section">
        <h3>产地</h3>
        <p class="dc-text">${escapeHtml(placeText)}</p>
        ${b.production_area ? `<p class="dc-muted dc-area">生产区域：${escapeHtml(b.production_area)}</p>` : ""}
        ${giHtml ? `<div style="margin-top:6px">${giHtml}</div>` : ""}
      </div>

      ${whyText ? `<div class="dc-section"><h3>为什么是这里？</h3><p class="dc-text">${escapeHtml(whyText)}</p></div>` : ""}

      ${terroirRows ? `<div class="dc-section"><h3>风土</h3><table class="dc-terroir">${terroirRows}</table></div>` : ""}

      ${kws.length ? `<div class="dc-section"><h3>风土关键词</h3><div class="dc-chips">${kws.map((k) => `<span class="dc-chip">${escapeHtml(k)}</span>`).join("")}</div></div>` : ""}

      <div class="dc-section">
        <h3>物产与地方生活</h3>
        ${livingHtml}
      </div>

      ${b.notes ? `<div class="dc-section"><h3>备注</h3><p class="dc-muted">${escapeHtml(b.notes)}</p></div>` : ""}
    `;

    el.querySelectorAll(".pheno-cell").forEach((cell) => {
      cell.addEventListener("click", () => setMonth(Number(cell.dataset.m)));
    });
    el.querySelectorAll(".living-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const k = tab.dataset.dim;
        const wasOpen = tab.classList.contains("active");
        el.querySelectorAll(".living-tab").forEach((x) => x.classList.remove("active"));
        el.querySelectorAll(".living-panel").forEach((x) => x.classList.remove("open"));
        if (!wasOpen) {
          tab.classList.add("active");
          tab.classList.remove("guide");
          const panel = el.querySelector(`.living-panel[data-panel="${k}"]`);
          if (panel) panel.classList.add("open");
        } else {
          tab.classList.add("guide");
        }
      });
    });
  }

  /* ---------------- 事件绑定 ---------------- */
  function bindEvents() {
    $("#btnFilters").addEventListener("click", openFilters);
    $("#sidebarClose").addEventListener("click", closeFilters);
    $("#drawerBackdrop").addEventListener("click", closeFilters);
    $("#shareBtn").addEventListener("click", async () => {
      const url = location.origin + location.pathname + "?month=" + state.month;
      try { await navigator.clipboard.writeText(url); } catch (e) { /* 降级忽略 */ }
      const btn = $("#shareBtn");
      const old = btn.textContent;
      btn.textContent = "已复制";
      setTimeout(() => { btn.textContent = old; }, 1500);
    });
    $("#showAllToggle").addEventListener("change", (e) => {
      state.showAll = e.target.checked;
      // 打开「显示所有物产」→ 月份轴不选中任何时间（包括「全年都有」也不高亮）；
      // 关闭 → 恢复当前自然月
      if (state.showAll) {
        if (state.month !== 0) {
          state.month = 0;
          try { history.replaceState(null, "", "?month=0"); } catch (err) { /* noop */ }
        }
        document.querySelectorAll(".month-item").forEach((b) => b.classList.remove("active"));
      } else {
        if (state.month === 0) {
          const cur = new Date().getMonth() + 1;
          state.month = cur;
          try { history.replaceState(null, "", "?month=" + cur); } catch (err) { /* noop */ }
        }
        syncTimeline();
      }
      if (state.activePid) selectProduct(null);
      state.heroes = computeHeroes(state.month);   // 月份可能变化，重算主角
      renderOrigins(false, "filter");
    });
    $("#btnCurrentMonth").addEventListener("click", () => {
      const m = new Date().getMonth() + 1;
      state.month = m;
      state.heroes = computeHeroes(m);
      syncTimeline();
      if (state.activePid) selectProduct(null);
      renderOrigins(true, "month");
      try { history.replaceState(null, "", "?month=" + m); } catch (e) { /* noop */ }
    });
    $("#detailClose").addEventListener("click", () => selectProduct(null));
    $("#mgClose").addEventListener("click", closeMonthGuide);
    $("#mgDismiss").addEventListener("click", closeMonthGuide);
    $("#monthGuide").addEventListener("click", (e) => { if (e.target === $("#monthGuide")) closeMonthGuide(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeMonthGuide(); selectProduct(null); }
    });
    window.addEventListener("resize", debounce(() => layoutLabels(visibleProducts()), 150));
  }

  function init() {
    // 封面已在页面打开时立即启动（startSplash 提前到 loadData 之前），此处不再重复
    const qm = parseInt(new URLSearchParams(location.search).get("month"), 10);
    if (qm >= 0 && qm <= 12) state.month = qm;   // 0 = 「全年都有」视图
    state.heroes = computeHeroes(state.month);   // 初始主角（含 URL 直达月份）
    initMap();
    buildMonthTimeline();
    buildFilters();
    bindEvents();
    scrollActiveMonth();
    renderOrigins(false);
  }

  /* 开屏：物产插画“粒子喷泉”流（直线 outToIn，参考 Originkit Image Gallery）
   * 生命周期：appear 2s（外圈大图缩小聚向中心）→ hold 2s（定格）→ disappear 1s（继续缩小、反向飞出并淡出）
   * 26 方向扇区随机进场；出生半径 45% 画布半径；按密度连续生成；z-index 递增，新图永远在上层 */
  function startSplash() {
    const overlay = $("#splash");
    if (!overlay || !window.gsap) return;
    const container = $("#splashTiles");
    // 开屏用透明抠图（以 manifest 清单为准，缺图自动跳过）
    const pool = [];
    if (state.imgAvailable && state.imgAvailable.size) {
      for (const id of state.imgAvailable) pool.push(`assets/illustrations/splash/cutout/${id}.webp`);
    } else {
      for (let i = 1; i <= 119; i++) {
        if (i === 9 || i === 118 || i === 120) continue;
        pool.push(`assets/illustrations/splash/cutout/fj${String(i).padStart(3, "0")}.webp`);
      }
    }
    if (!pool.length) return;
    // 预热图池：开屏前先把首屏会用到的图加载/解码好
    pool.forEach((src) => { const im = new Image(); im.src = src; });

    const ZONES = [
      { cx: 18, cy: 18 }, { cx: 82, cy: 18 }, { cx: 18, cy: 82 }, { cx: 82, cy: 82 },
      { cx: 32, cy: 14 }, { cx: 50, cy: 12 }, { cx: 68, cy: 14 },
      { cx: 32, cy: 86 }, { cx: 50, cy: 88 }, { cx: 68, cy: 86 },
      { cx: 14, cy: 35 }, { cx: 14, cy: 55 }, { cx: 14, cy: 72 },
      { cx: 86, cy: 35 }, { cx: 86, cy: 55 }, { cx: 86, cy: 72 },
      { cx: 28, cy: 28 }, { cx: 72, cy: 28 }, { cx: 28, cy: 72 }, { cx: 72, cy: 72 },
      { cx: 42, cy: 16 }, { cx: 58, cy: 16 }, { cx: 42, cy: 84 }, { cx: 58, cy: 84 },
      { cx: 16, cy: 45 }, { cx: 84, cy: 45 },
    ];
    const ASPECT = [
      { w: 200, h: 200 }, { w: 240, h: 240 }, { w: 280, h: 280 },
      { w: 160, h: 250 }, { w: 180, h: 280 }, { w: 280, h: 165 },
      { w: 340, h: 195 }, { w: 220, h: 150 },
    ];
    const recent = [];
    let zoneIdx = 0;
    let zIdx = 1;
    let ended = false;
    let spawnTimer = null;

    const pickImg = () => {
      let avail = pool.filter((u) => !recent.includes(u));
      if (!avail.length) { recent.length = 0; avail = pool.slice(); }
      const url = avail[Math.floor(Math.random() * avail.length)];
      recent.push(url);
      if (recent.length > Math.max(3, pool.length - 1)) recent.shift();
      return url;
    };
    const rand = (a, b) => a + Math.random() * (b - a);

    function spawnTile(quick) {
      if (ended || !document.body.contains(overlay)) return;
      const W = container.clientWidth || window.innerWidth;
      const H = container.clientHeight || window.innerHeight;
      const cx = W / 2, cy = H / 2;
      const Rmax = Math.hypot(W / 2, H / 2);
      const spawnR = 0.45 * Rmax;                 // blankArea=45%
      const userScale = 0.125 + ((2 - 1) / 19) * 4.875; // imageScale=2 → 0.382
      const shape = ASPECT[Math.floor(Math.random() * ASPECT.length)];
      const scale = Math.min(userScale, W / shape.w, H / shape.h);
      const tileW = Math.round(shape.w * scale);
      const tileH = Math.round(shape.h * scale);

      const zone = ZONES[zoneIdx % ZONES.length];
      zoneIdx++;
      const zoneAngle = Math.atan2(zone.cy - 50, zone.cx - 50);
      const angle = zoneAngle + rand(-0.45, 0.45);
      const dirX = Math.cos(angle), dirY = Math.sin(angle);

      const entryD = rand(80, 140);
      const exitD = rand(160, 260);
      const s2 = rand(0.7, 1.1);
      const s3 = rand(3.0, 4.5);

      const startX = dirX * (spawnR + entryD * 2.5);
      const startY = dirY * (spawnR + entryD * 2.5);
      const midX = dirX * spawnR;
      const midY = dirY * spawnR;
      const exitX = midX - dirX * exitD;
      const exitY = midY - dirY * exitD;

      const el = document.createElement("div");
      el.className = "splash-tile";
      const img = document.createElement("img");
      img.alt = "";
      img.loading = "eager";
      img.decoding = "async";
      img.style.cssText = "width:100%;height:100%;object-fit:contain;display:block;";
      el.appendChild(img);
      el.style.width = tileW + "px";
      el.style.height = tileH + "px";
      el.style.left = cx + "px";
      el.style.top = cy + "px";
      el.style.zIndex = String(zIdx++);
      container.appendChild(el);

      const startAnim = () => {
        if (ended || !document.body.contains(el)) { el.remove(); return; }
        const appearDur = quick ? 1.2 : 2;
        const appearEase = quick ? "power1.out" : "power2.inOut";
        gsap.set(el, { x: startX, y: startY, scale: s3, opacity: quick ? 0.35 : 0, rotation: 0 });
        const tl = gsap.timeline({
          onComplete: () => { el.remove(); },
        });
        tl.to(el, { x: midX, y: midY, scale: s2, opacity: 1, duration: appearDur, ease: appearEase }) // appear
          .to(el, { x: midX + dirX * exitD * 0.15, y: midY + dirY * exitD * 0.15, scale: s2, duration: 2, ease: "none" }) // hold 2s
          .to(el, { x: exitX, y: exitY, scale: 0.08, opacity: 0, duration: 1, ease: "power2.inOut" }); // disappear 1s
      };
      img.src = pickImg();
      if (typeof img.decode === "function") {
        img.decode().then(startAnim).catch(() => el.remove());
      } else {
        img.complete && img.naturalWidth > 0 ? startAnim() : (img.onload = startAnim);
      }
    }

    const density = window.innerWidth < 600 ? 9 : 14;
    const lifetimeMs = 5000;
    const spawnInterval = Math.max(120, lifetimeMs / density);
    // 开场先密集铺满一批（70ms 间隔），避免首屏空白，再转匀速流
    for (let i = 0; i < density; i++) setTimeout(() => spawnTile(true), i * 70);
    spawnTimer = setInterval(() => spawnTile(false), spawnInterval);

    const title = overlay.querySelector(".splash-main");
    if (title) {
      gsap.fromTo(title, { scale: 0.99, opacity: 0.92 }, { scale: 1, opacity: 1, duration: 2.6, yoyo: true, repeat: -1, ease: "sine.inOut" });
    }

    /* 复古秒表式月份切换器 */
    const swNum = $("#swNumber");
    const swUnder = overlay.querySelector(".sw-underline");
    const enterBtn = $("#enterBtn");
    // URL ?month=N 指定初始月时：封面数字定格为该月，进入后不再被秒表循环覆盖
    const _urlMonth = parseInt(new URLSearchParams(location.search).get("month"), 10);
    const _hasUrlMonth = _urlMonth >= 1 && _urlMonth <= 12;
    let shownMonth = _hasUrlMonth ? _urlMonth : new Date().getMonth() + 1;
    let jumping = false;
    let pendingCommit = false;

    function crossfadeMonth(m, dur) {
      return new Promise((resolve) => {
        const tl = gsap.timeline({ onComplete: resolve });
        tl.to(swNum, { opacity: 0, y: -16, duration: dur * 0.4, ease: "power1.in" })
          .add(() => { swNum.textContent = m; gsap.set(swNum, { y: 16 }); })
          .to(swNum, { opacity: 1, y: 0, duration: dur * 0.6, ease: "power1.out" });
      });
    }

    function renderMonth(m) {
      swNum.textContent = m;
    }

    // 1-12 顺序循环跳动，永不停下（URL 指定月份时定格不循环）
    function startCycle() {
      renderMonth(shownMonth);
      if (_hasUrlMonth) return;
      const step = () => {
        if (ended || !document.body.contains(overlay)) return;
        const next = (shownMonth % 12) + 1;
        crossfadeMonth(next, 0.42).then(() => {
          shownMonth = next;
          setTimeout(step, 180);
        });
      };
      setTimeout(step, 400);
    }

    function commit() {
      if (ended) return;
      // 数据未就绪：不关闭封面，显示准备进度（②），就绪后自动进入
      if (!state.loaded) {
        const sp = $("#splashProgress");
        if (sp) { sp.style.display = "block"; sp.textContent = "山与海正在准备中，请稍候…"; }
        state.pendingEnter = true;
        return;
      }
      if (jumping) { pendingCommit = true; return; }
      ended = true;
      if (spawnTimer) clearInterval(spawnTimer);
      container.querySelectorAll(".splash-tile").forEach((el) => gsap.killTweensOf(el));
      gsap.to(container.querySelectorAll(".splash-tile"), {
        opacity: 0, scale: 1.14, duration: 0.5, stagger: 0.03, ease: "power2.in",
      });
      const targetMonth = _hasUrlMonth ? _urlMonth : (Number(swNum.textContent) || shownMonth);
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          overlay.remove();
          document.body.classList.add("revealed");
          state.splashActive = false;
          if (targetMonth !== state.month && state.month !== 0) setMonth(targetMonth);
          renderOrigins(true, "initial");
        },
      });
    }

    startCycle();
    // 数据就绪后：若用户等待中已点击进入，自动完成进入
    window.addEventListener("fjt:loaded", () => {
      const sp = $("#splashProgress");
      if (sp) sp.style.display = "none";
      if (state.pendingEnter) { state.pendingEnter = false; commit(); }
    });
    enterBtn.addEventListener("click", (e) => { e.stopPropagation(); commit(); });
    overlay.addEventListener("click", commit);
  }

  /* ① 封面提前：页面打开立即播放开屏动画（插画池用兜底，不依赖数据）；
     loadData 后台并行加载，进入时若未就绪由 commit() 显示进度 */
  startSplash();
  loadData();
})();
