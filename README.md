# 福建，一年的风土｜物产日历（前端 v1）

按照「地图原点视觉系统规范」实现的第一版前端：用**固定地理位置上的小核心点 + 同色系柔和光晕 + 物产名称**表达福建物产的季节变化。

## 运行方式

```bash
cd outputs/Fujian_Terroir_Calendar_Web
python3 -m http.server 8000
```

然后打开 <http://localhost:8000>（也可以用 `npx serve` 或任意静态服务器；请勿直接双击 index.html，浏览器会因本地文件限制拦截数据请求）。

也可以一键启动（macOS）：

```bash
./start.sh
```

## 视觉系统如何映射数据

| 视觉元素 | 数据来源 | 规则 |
| --- | --- | --- |
| 核心点位置 | `basic.latitude / longitude` | 固定不动，不随月份变化 |
| 核心点大小 | `phenology.seasonal_activity` | S 5px（≤20）· M 6px（21–50）· L 8px（51–80）· XL 10px（≥81） |
| 核心点颜色 | `phenology.phenology_status` | 休眠灰绿 → 开花嫩绿 → 生长青绿 → 旺盛深青绿 → 成熟暖黄 → 采收/加工赭金 |
| 光晕 | 纯视觉 | 同色系低透明度径向扩散，不承担数据含义 |
| 物产名称 | `product_name` | 默认位于原点下方，4 方向自动避让，不重叠 |
| 聚合 | 缩放级别 | 缩小到阈值以下自动聚合；聚合点以成员物候色小圆点交错堆叠 + 呼吸光晕呈现，放大后拆分 |
| 非当季物产 | `seasonal_activity < 31` | 默认隐藏，可用「显示全年物产」开关以低存在感显示 |

## 交互

- 顶部月份时间轴：切换月份，地图原点以 300–500ms 平滑过渡颜色、大小与光晕
- 悬停原点：微放大 + Tooltip（名称 / 月份 · 物候 / 行政区）
- 点击原点：细外圈选中态，其他物产降至 60% 存在感，右侧滑出详情卡（地图不消失）
- 详情卡：产地 → 为什么是这里？ → 风土 → 风土关键词 → 物产的一年（12 个月时间轴，可点击切月）→ 物产与地方生活（五维折叠）→ 备注
- 左侧风土筛选：分类 / 地形 / 海拔 / 温度 / 降水 / 湿润度 / 水域 / 土壤 / 生态，同类取或、跨类取与
- 支持 URL 参数分享月份：`/?month=12`
- 地图背景：1° 经纬网（含经纬度标注）、Esri 真实地形阴影底图、OpenStreetMap 实测水系轨迹（闽江/九龙江/晋江/汀江/木兰溪/交溪等主干与支流分级绘制）、沿真实山链走向的山脉概略线，均低对比叠加、不干扰物产原点（山脉走向与经纬网标注「示意」，水系为实测轨迹）

## 数据刷新

应用读取 `data/Fujian_Terroir_Calendar.json`（由数据阶段 `finalize.py` 生成）。数据更新后，把新的
`outputs/Fujian_Terroir_Calendar/Fujian_Terroir_Calendar.json` 复制到本目录 `data/` 覆盖即可，无需改代码。

```bash
cp ../Fujian_Terroir_Calendar/Fujian_Terroir_Calendar.json data/
```

## 目录结构

```text
index.html                页面结构
css/style.css             视觉样式（纸感低对比、克制原点）
js/app.js                 地图原点系统与交互逻辑
vendor/leaflet/           本地 Leaflet 1.9.4（离线可用）
assets/fujian.geojson     福建 9 设区市边界
data/Fujian_Terroir_Calendar.json  物产数据库快照
```

## 已知说明

- 底图瓦片来自 OpenStreetMap，已做低对比灰度处理；离线或瓦片不可用时自动降级为纯边界底图，不影响原点系统。
- 数据中 120 种物产中 119 种已验证、1 种待验证（福建老酒）；待验证物产仍在地图中显示，来源证据以 D 级为主，详见数据 README 的 Pending Review。
- 产区面（地理范围多边形）在数据中尚未具备，本版未绘制；数据补齐 `geo_scope` 后可在同一图层体系上扩展。
