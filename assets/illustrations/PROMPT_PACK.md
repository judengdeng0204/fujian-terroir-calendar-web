# 福建物产插画 · 完整生成指令包（共 120 张）

> 用途：交给任意 AI 图像工具（通义万相 / 即梦 / Midjourney / DALL·E 等）批量生成 120 张物产插画。

# 福建物产插画 · 风格规范（交给图像工具前请先读）

## 一张风格样张
先给工具看样张：`assets/illustrations/fj005.png`（武夷岩茶），并说明“保持与此图完全一致的风格”。

## 统一风格（每张提示词都包含以下要素）
1. 纸本线稿 + 淡彩科普插画：米白纸底（约 #f8f4ea），带轻微纸纹。
2. 描边：深墨绿/深棕的细线稿，干净利落；叶片、果实用 2–3 笔概括，不写实堆砌。
3. 上色：只用一种主题色的淡彩水色晕染（每物产按其自然色系选一色），其余留白。
4. 构图：主体居中、单主体优先；可配 1–2 个辅助元素（器具/枝叶/场景剪影），不抢主体。
5. 落款：左下角小字「物产名 编号 · 类别」（如「武夷岩茶 FJ005 · 茶」），中文楷体感。
6. 气质：安静、克制、纸感、手绘；不要照片感、不要重阴影、不要发光、不要水印、不要英文说明文字。
7. 比例：1:1 正方形，输出 PNG/JPG，建议 1024×1024 以上。

## 主题色建议（每类别）
- 茶：墨绿/茶褐   水果：橙/红/黄按果色  蔬菜笋：绿/棕  粮食：谷黄
- 菌类：菌褐/米白  花卉：各花色淡染   药食同源：草绿/土褐  水产海产：蓝灰
- 畜禽：赭褐   蜂产品：蜜黄   竹木：竹青/棕   香料：桂黄/香棕   传统加工物：赭金/酱褐   其他：按材质

## 执行建议
- 每张图生成 3–4 个变体再挑选，避免一次性定稿。
- 若工具无法可靠渲染中文文字：落款文字可不生成，留空，交付后由我们统一后期加字。
- 建议按 16 个类别分批生成（每批 6–10 张），保持同一风格提示词前缀不变。


---

## 中文提示词模板（适用于通义万相、即梦等中文工具）

```text
纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：{主体}，辅助元素：{辅助}，左下角小字落款『{物产名} {编号} · {类别}』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
```

## 英文提示词模板（适用于 Midjourney / DALL·E）

```text
Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: {subject}. Auxiliary: {aux}. Small Chinese label bottom-left: '{name} {id} · {category}'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.
```

> 提示：下文每张图的 English 提示词中「Subject」保留了中文主体（便于核对物产特征）。若使用对中文不友好的英文工具，请把主体翻译成英文后填入；落款文字若无法渲染可省略，后期统一补字。

---

## 交付约定

1. 每张图按 `fj{编号小写}.png` 命名（如武夷岩茶为 `fj005.png`），统一放到 `assets/illustrations/` 目录。
2. 建议 1:1、1024×1024 以上、无文字或含落款均可（无文字版我们后期统一加落款）。
3. 生成完成后告诉我，我会把它们逐个接入详情卡（当前已接入：FJ005 武夷岩茶）。

> 垫图提醒：高风险物产（建盏、河田鸡、槟榔芋、金线莲等 23 个）务必先用实拍图垫图，清单见同目录 `REFERENCE_LIST.md`。

## 批次：茶（16 张）

### FJ001 大田美人茶（大田县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：一芽二三叶的茶园嫩梢与琥珀色茶汤，辅助元素：竹筛、远处茶园山丘，左下角小字落款『大田美人茶 FJ001 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 一芽二三叶的茶园嫩梢与琥珀色茶汤. Auxiliary: 竹筛、远处茶园山丘. Small Chinese label bottom-left: '大田美人茶 FJ001 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ002 政和白茶（政和县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：白毫满披的茶芽与圆茶饼，辅助元素：竹匾晾青、浅黄茶汤，左下角小字落款『政和白茶 FJ002 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 白毫满披的茶芽与圆茶饼. Auxiliary: 竹匾晾青、浅黄茶汤. Small Chinese label bottom-left: '政和白茶 FJ002 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ003 松溪绿茶（松溪县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：翠绿卷曲的干茶与玻璃杯绿茶，辅助元素：松树、茶园梯田，左下角小字落款『松溪绿茶 FJ003 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 翠绿卷曲的干茶与玻璃杯绿茶. Auxiliary: 松树、茶园梯田. Small Chinese label bottom-left: '松溪绿茶 FJ003 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ004 正山小种（武夷山市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：乌润条索的红茶与松烟熏焙场景，辅助元素：松柴、红艳茶汤，左下角小字落款『正山小种 FJ004 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 乌润条索的红茶与松烟熏焙场景. Auxiliary: 松柴、红艳茶汤. Small Chinese label bottom-left: '正山小种 FJ004 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ005 武夷岩茶（武夷山市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：岩茶条索与岩壁上的茶树，辅助元素：茶盏、丹霞岩壁与远山，左下角小字落款『武夷岩茶 FJ005 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 岩茶条索与岩壁上的茶树. Auxiliary: 茶盏、丹霞岩壁与远山. Small Chinese label bottom-left: '武夷岩茶 FJ005 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ006 邵武碎铜茶（邵武市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：茶叶与铜钱并置（碎铜传说），辅助元素：茶汤、木桌，左下角小字落款『邵武碎铜茶 FJ006 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 茶叶与铜钱并置（碎铜传说）. Auxiliary: 茶汤、木桌. Small Chinese label bottom-left: '邵武碎铜茶 FJ006 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ007 坦洋工夫（福安市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：细长红条红茶与工夫茶具，辅助元素：茶汤、茶筛，左下角小字落款『坦洋工夫 FJ007 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 细长红条红茶与工夫茶具. Auxiliary: 茶汤、茶筛. Small Chinese label bottom-left: '坦洋工夫 FJ007 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ008 寿宁高山茶（寿宁县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：高山云雾茶园中的芽叶，辅助元素：云雾、采茶竹篓，左下角小字落款『寿宁高山茶 FJ008 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 高山云雾茶园中的芽叶. Auxiliary: 云雾、采茶竹篓. Small Chinese label bottom-left: '寿宁高山茶 FJ008 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ009 福鼎白茶（福鼎市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：白毫银针茶芽与茶饼，辅助元素：竹匾、煮茶壶，左下角小字落款『福鼎白茶 FJ009 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 白毫银针茶芽与茶饼. Auxiliary: 竹匾、煮茶壶. Small Chinese label bottom-left: '福鼎白茶 FJ009 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ010 安溪铁观音（安溪县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：球形铁观音干茶与盖碗，辅助元素：金黄茶汤、兰花，左下角小字落款『安溪铁观音 FJ010 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 球形铁观音干茶与盖碗. Auxiliary: 金黄茶汤、兰花. Small Chinese label bottom-left: '安溪铁观音 FJ010 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ011 永春佛手茶（永春县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：佛手柑形茶条与佛手果实，辅助元素：茶汤、盖碗，左下角小字落款『永春佛手茶 FJ011 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 佛手柑形茶条与佛手果实. Auxiliary: 茶汤、盖碗. Small Chinese label bottom-left: '永春佛手茶 FJ011 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ012 华安铁观音（华安县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：球形乌龙茶与梯田茶园，辅助元素：金黄茶汤，左下角小字落款『华安铁观音 FJ012 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 球形乌龙茶与梯田茶园. Auxiliary: 金黄茶汤. Small Chinese label bottom-left: '华安铁观音 FJ012 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ013 平和白芽奇兰（平和县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：白芽奇兰芽叶与兰花，辅助元素：茶汤、白瓷杯，左下角小字落款『平和白芽奇兰 FJ013 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 白芽奇兰芽叶与兰花. Auxiliary: 茶汤、白瓷杯. Small Chinese label bottom-left: '平和白芽奇兰 FJ013 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ014 诏安八仙茶（诏安县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：八仙茶条索与陶茶壶，辅助元素：橙黄茶汤，左下角小字落款『诏安八仙茶 FJ014 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 八仙茶条索与陶茶壶. Auxiliary: 橙黄茶汤. Small Chinese label bottom-left: '诏安八仙茶 FJ014 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ015 福州茉莉花茶（仓山区|闽侯县|福清市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：茉莉花与茶坯（花茶窨制），辅助元素：竹筛上的花与茶、茶汤，左下角小字落款『福州茉莉花茶 FJ015 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 茉莉花与茶坯（花茶窨制）. Auxiliary: 竹筛上的花与茶、茶汤. Small Chinese label bottom-left: '福州茉莉花茶 FJ015 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ016 漳平水仙茶（漳平市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：方形水仙茶饼与茶壶，辅助元素：茶汤、茶盘，左下角小字落款『漳平水仙茶 FJ016 · 茶』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 方形水仙茶饼与茶壶. Auxiliary: 茶汤、茶盘. Small Chinese label bottom-left: '漳平水仙茶 FJ016 · 茶'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：水果（24 张）

### FJ017 尤溪金柑（尤溪县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：金黄金柑果串，辅助元素：枝叶、竹篮，左下角小字落款『尤溪金柑 FJ017 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 金黄金柑果串. Auxiliary: 枝叶、竹篮. Small Chinese label bottom-left: '尤溪金柑 FJ017 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ018 建阳桔柚（建阳区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：桔柚果实与剖面，辅助元素：枝叶，左下角小字落款『建阳桔柚 FJ018 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 桔柚果实与剖面. Auxiliary: 枝叶. Small Chinese label bottom-left: '建阳桔柚 FJ018 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ019 建阳葡萄（建阳区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：紫黑葡萄串，辅助元素：葡萄藤叶，左下角小字落款『建阳葡萄 FJ019 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 紫黑葡萄串. Auxiliary: 葡萄藤叶. Small Chinese label bottom-left: '建阳葡萄 FJ019 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ020 同安凤梨穗（同安区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：龙眼果穗（凤梨穗），辅助元素：枝叶、剥壳果肉，左下角小字落款『同安凤梨穗 FJ020 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 龙眼果穗（凤梨穗）. Auxiliary: 枝叶、剥壳果肉. Small Chinese label bottom-left: '同安凤梨穗 FJ020 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ021 古田水蜜桃（古田县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：粉白水蜜桃，辅助元素：桃叶、竹篮，左下角小字落款『古田水蜜桃 FJ021 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 粉白水蜜桃. Auxiliary: 桃叶、竹篮. Small Chinese label bottom-left: '古田水蜜桃 FJ021 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ022 古田油柰（古田县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：青黄油柰李，辅助元素：枝叶，左下角小字落款『古田油柰 FJ022 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 青黄油柰李. Auxiliary: 枝叶. Small Chinese label bottom-left: '古田油柰 FJ022 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ023 福安巨峰葡萄（福安市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：深紫巨峰葡萄串，辅助元素：藤叶，左下角小字落款『福安巨峰葡萄 FJ023 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 深紫巨峰葡萄串. Auxiliary: 藤叶. Small Chinese label bottom-left: '福安巨峰葡萄 FJ023 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ024 福鼎四季柚（福鼎市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：大柚果实与剖面果肉，辅助元素：柚枝叶，左下角小字落款『福鼎四季柚 FJ024 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 大柚果实与剖面果肉. Auxiliary: 柚枝叶. Small Chinese label bottom-left: '福鼎四季柚 FJ024 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ025 穆阳水蜜桃（福安市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：白里透红的水蜜桃，辅助元素：桃枝、竹篮，左下角小字落款『穆阳水蜜桃 FJ025 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 白里透红的水蜜桃. Auxiliary: 桃枝、竹篮. Small Chinese label bottom-left: '穆阳水蜜桃 FJ025 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ026 永春芦柑（永春县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：橙红芦柑堆与剥开的果瓣，辅助元素：柑橘枝叶，左下角小字落款『永春芦柑 FJ026 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 橙红芦柑堆与剥开的果瓣. Auxiliary: 柑橘枝叶. Small Chinese label bottom-left: '永春芦柑 FJ026 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ027 泉州龙眼（南安市|惠安县|晋江市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：龙眼果串与剥壳果肉，辅助元素：枝叶，左下角小字落款『泉州龙眼 FJ027 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 龙眼果串与剥壳果肉. Auxiliary: 枝叶. Small Chinese label bottom-left: '泉州龙眼 FJ027 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ028 下河杨桃（云霄县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：黄色杨桃与五角星切面，辅助元素：杨桃枝叶，左下角小字落款『下河杨桃 FJ028 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 黄色杨桃与五角星切面. Auxiliary: 杨桃枝叶. Small Chinese label bottom-left: '下河杨桃 FJ028 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ029 云霄枇杷（云霄县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：金黄枇杷果串，辅助元素：枇杷叶，左下角小字落款『云霄枇杷 FJ029 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 金黄枇杷果串. Auxiliary: 枇杷叶. Small Chinese label bottom-left: '云霄枇杷 FJ029 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ030 天宝香蕉（芗城区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：香蕉串，辅助元素：蕉叶，左下角小字落款『天宝香蕉 FJ030 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 香蕉串. Auxiliary: 蕉叶. Small Chinese label bottom-left: '天宝香蕉 FJ030 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ031 平和琯溪蜜柚（平和县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：大蜜柚与红白果肉剖面，辅助元素：蜜柚枝叶，左下角小字落款『平和琯溪蜜柚 FJ031 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 大蜜柚与红白果肉剖面. Auxiliary: 蜜柚枝叶. Small Chinese label bottom-left: '平和琯溪蜜柚 FJ031 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ032 浮宫杨梅（龙海区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：红紫杨梅，辅助元素：杨梅叶、竹篮，左下角小字落款『浮宫杨梅 FJ032 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 红紫杨梅. Auxiliary: 杨梅叶、竹篮. Small Chinese label bottom-left: '浮宫杨梅 FJ032 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ033 长泰芦柑（长泰区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：芦柑与切瓣，辅助元素：枝叶，左下角小字落款『长泰芦柑 FJ033 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 芦柑与切瓣. Auxiliary: 枝叶. Small Chinese label bottom-left: '长泰芦柑 FJ033 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ034 永泰芙蓉李（永泰县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：紫红李果与李干，辅助元素：芙蓉李枝叶，左下角小字落款『永泰芙蓉李 FJ034 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 紫红李果与李干. Auxiliary: 芙蓉李枝叶. Small Chinese label bottom-left: '永泰芙蓉李 FJ034 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ035 福州橄榄（闽侯县|闽清县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：青橄榄，辅助元素：橄榄枝叶、竹篮，左下角小字落款『福州橄榄 FJ035 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 青橄榄. Auxiliary: 橄榄枝叶、竹篮. Small Chinese label bottom-left: '福州橄榄 FJ035 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ036 福橘（闽侯县|长乐区|仓山区|马尾区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：红橘，辅助元素：福橘枝叶、竹篮，左下角小字落款『福橘 FJ036 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 红橘. Auxiliary: 福橘枝叶、竹篮. Small Chinese label bottom-left: '福橘 FJ036 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ037 度尾文旦柚（仙游县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：梨形文旦柚，辅助元素：枝叶，左下角小字落款『度尾文旦柚 FJ037 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 梨形文旦柚. Auxiliary: 枝叶. Small Chinese label bottom-left: '度尾文旦柚 FJ037 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ038 莆田枇杷（涵江区|城厢区|荔城区|仙游县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：枇杷果串，辅助元素：枇杷叶，左下角小字落款『莆田枇杷 FJ038 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 枇杷果串. Auxiliary: 枇杷叶. Small Chinese label bottom-left: '莆田枇杷 FJ038 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ039 莆田荔枝（荔城区|涵江区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：红荔枝果串，辅助元素：荔枝枝叶，左下角小字落款『莆田荔枝 FJ039 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 红荔枝果串. Auxiliary: 荔枝枝叶. Small Chinese label bottom-left: '莆田荔枝 FJ039 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ040 永定红柿（永定区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：红柿与晒柿饼场景，辅助元素：竹匾、柿叶，左下角小字落款『永定红柿 FJ040 · 水果』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 红柿与晒柿饼场景. Auxiliary: 竹匾、柿叶. Small Chinese label bottom-left: '永定红柿 FJ040 · 水果'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：蔬菜（3 张）

### FJ041 古宅大蒜（翔安区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：蒜头与蒜瓣，辅助元素：蒜苗，左下角小字落款『古宅大蒜 FJ041 · 蔬菜』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 蒜头与蒜瓣. Auxiliary: 蒜苗. Small Chinese label bottom-left: '古宅大蒜 FJ041 · 蔬菜'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ042 福鼎槟榔芋（福鼎市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：大槟榔芋与紫纹剖面，辅助元素：芋叶，左下角小字落款『福鼎槟榔芋 FJ042 · 蔬菜』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 大槟榔芋与紫纹剖面. Auxiliary: 芋叶. Small Chinese label bottom-left: '福鼎槟榔芋 FJ042 · 蔬菜'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ043 东山芦笋（东山县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：白芦笋束，辅助元素：芦笋田垄，左下角小字落款『东山芦笋 FJ043 · 蔬菜』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 白芦笋束. Auxiliary: 芦笋田垄. Small Chinese label bottom-left: '东山芦笋 FJ043 · 蔬菜'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：笋类（3 张）

### FJ044 尤溪绿竹笋（尤溪县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：绿竹笋带壳与剥壳笋，辅助元素：绿竹枝叶，左下角小字落款『尤溪绿竹笋 FJ044 · 笋类』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 绿竹笋带壳与剥壳笋. Auxiliary: 绿竹枝叶. Small Chinese label bottom-left: '尤溪绿竹笋 FJ044 · 笋类'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ045 永安闽笋干（永安市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：笋干条与鲜笋，辅助元素：竹篓，左下角小字落款『永安闽笋干 FJ045 · 笋类』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 笋干条与鲜笋. Auxiliary: 竹篓. Small Chinese label bottom-left: '永安闽笋干 FJ045 · 笋类'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ046 建瓯冬笋（建瓯市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：冬笋与笋壳，辅助元素：竹鞭，左下角小字落款『建瓯冬笋 FJ046 · 笋类』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 冬笋与笋壳. Auxiliary: 竹鞭. Small Chinese label bottom-left: '建瓯冬笋 FJ046 · 笋类'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：粮食（2 张）

### FJ047 宁化薏米（宁化县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：薏米穗与薏米粒，辅助元素：米袋，左下角小字落款『宁化薏米 FJ047 · 粮食』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 薏米穗与薏米粒. Auxiliary: 米袋. Small Chinese label bottom-left: '宁化薏米 FJ047 · 粮食'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ048 浦城大米（浦城县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：稻穗与米粒，辅助元素：稻田，左下角小字落款『浦城大米 FJ048 · 粮食』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 稻穗与米粒. Auxiliary: 稻田. Small Chinese label bottom-left: '浦城大米 FJ048 · 粮食'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：菌类（7 张）

### FJ049 武夷山红菇（武夷山市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：红菇菌盖与菌褶，辅助元素：松针落叶，左下角小字落款『武夷山红菇 FJ049 · 菌类』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 红菇菌盖与菌褶. Auxiliary: 松针落叶. Small Chinese label bottom-left: '武夷山红菇 FJ049 · 菌类'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ050 顺昌海鲜菇（顺昌县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：海鲜菇簇，辅助元素：菌袋，左下角小字落款『顺昌海鲜菇 FJ050 · 菌类』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 海鲜菇簇. Auxiliary: 菌袋. Small Chinese label bottom-left: '顺昌海鲜菇 FJ050 · 菌类'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ051 顺昌竹荪（顺昌县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：竹荪菌裙网，辅助元素：竹林，左下角小字落款『顺昌竹荪 FJ051 · 菌类』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 竹荪菌裙网. Auxiliary: 竹林. Small Chinese label bottom-left: '顺昌竹荪 FJ051 · 菌类'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ052 古田银耳（古田县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：白色银耳朵，辅助元素：菌瓶，左下角小字落款『古田银耳 FJ052 · 菌类』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 白色银耳朵. Auxiliary: 菌瓶. Small Chinese label bottom-left: '古田银耳 FJ052 · 菌类'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ053 古田香菇（古田县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：香菇伞与菌褶，辅助元素：菌棒，左下角小字落款『古田香菇 FJ053 · 菌类』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 香菇伞与菌褶. Auxiliary: 菌棒. Small Chinese label bottom-left: '古田香菇 FJ053 · 菌类'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ054 漳州双孢蘑菇（龙海区|南靖县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：白色双孢蘑菇，辅助元素：蘑菇箱，左下角小字落款『漳州双孢蘑菇 FJ054 · 菌类』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 白色双孢蘑菇. Auxiliary: 蘑菇箱. Small Chinese label bottom-left: '漳州双孢蘑菇 FJ054 · 菌类'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ055 罗源秀珍菇（罗源县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：秀珍菇簇，辅助元素：菌袋，左下角小字落款『罗源秀珍菇 FJ055 · 菌类』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 秀珍菇簇. Auxiliary: 菌袋. Small Chinese label bottom-left: '罗源秀珍菇 FJ055 · 菌类'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：花卉（6 张）

### FJ056 延平百合（延平区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：百合花与鳞茎，辅助元素：百合鳞片，左下角小字落款『延平百合 FJ056 · 花卉』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 百合花与鳞茎. Auxiliary: 百合鳞片. Small Chinese label bottom-left: '延平百合 FJ056 · 花卉'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ057 南靖兰花（南靖县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：兰花植株与花朵，辅助元素：陶盆，左下角小字落款『南靖兰花 FJ057 · 花卉』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 兰花植株与花朵. Auxiliary: 陶盆. Small Chinese label bottom-left: '南靖兰花 FJ057 · 花卉'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ058 漳州水仙花（龙海区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：水仙花球与花朵，辅助元素：水仙盆，左下角小字落款『漳州水仙花 FJ058 · 花卉』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 水仙花球与花朵. Auxiliary: 水仙盆. Small Chinese label bottom-left: '漳州水仙花 FJ058 · 花卉'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ059 平潭水仙花（平潭县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：水仙花，辅助元素：水仙盆，左下角小字落款『平潭水仙花 FJ059 · 花卉』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 水仙花. Auxiliary: 水仙盆. Small Chinese label bottom-left: '平潭水仙花 FJ059 · 花卉'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ060 武平富贵籽（武平县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：富贵籽红果串，辅助元素：盆栽、绿叶，左下角小字落款『武平富贵籽 FJ060 · 花卉』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 富贵籽红果串. Auxiliary: 盆栽、绿叶. Small Chinese label bottom-left: '武平富贵籽 FJ060 · 花卉'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ061 漳平永福杜鹃（漳平市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：杜鹃花枝，辅助元素：花盆，左下角小字落款『漳平永福杜鹃 FJ061 · 花卉』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 杜鹃花枝. Auxiliary: 花盆. Small Chinese label bottom-left: '漳平永福杜鹃 FJ061 · 花卉'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：药食同源（7 张）

### FJ062 建宁通心白莲（建宁县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：莲蓬莲子与去芯莲子，辅助元素：荷花、莲叶，左下角小字落款『建宁通心白莲 FJ062 · 药食同源』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 莲蓬莲子与去芯莲子. Auxiliary: 荷花、莲叶. Small Chinese label bottom-left: '建宁通心白莲 FJ062 · 药食同源'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ063 永安淮山（永安市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：淮山山药段，辅助元素：山药藤叶，左下角小字落款『永安淮山 FJ063 · 药食同源』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 淮山山药段. Auxiliary: 山药藤叶. Small Chinese label bottom-left: '永安淮山 FJ063 · 药食同源'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ064 泰宁铁皮石斛（泰宁县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：铁皮石斛鲜条与花，辅助元素：岩石，左下角小字落款『泰宁铁皮石斛 FJ064 · 药食同源』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 铁皮石斛鲜条与花. Auxiliary: 岩石. Small Chinese label bottom-left: '泰宁铁皮石斛 FJ064 · 药食同源'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ065 建瓯泽泻（建瓯市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：泽泻植株与块茎，辅助元素：水田，左下角小字落款『建瓯泽泻 FJ065 · 药食同源』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 泽泻植株与块茎. Auxiliary: 水田. Small Chinese label bottom-left: '建瓯泽泻 FJ065 · 药食同源'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ066 柘荣太子参（柘荣县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：太子参根条，辅助元素：植株叶片，左下角小字落款『柘荣太子参 FJ066 · 药食同源』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 太子参根条. Auxiliary: 植株叶片. Small Chinese label bottom-left: '柘荣太子参 FJ066 · 药食同源'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ067 福鼎黄栀子（福鼎市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：黄栀子果与白花，辅助元素：栀子枝叶，左下角小字落款『福鼎黄栀子 FJ067 · 药食同源』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 黄栀子果与白花. Auxiliary: 栀子枝叶. Small Chinese label bottom-left: '福鼎黄栀子 FJ067 · 药食同源'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ068 武平金线莲（武平县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：叶脉呈金色网纹的金线莲，辅助元素：林下苔土，左下角小字落款『武平金线莲 FJ068 · 药食同源』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 叶脉呈金色网纹的金线莲. Auxiliary: 林下苔土. Small Chinese label bottom-left: '武平金线莲 FJ068 · 药食同源'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：水产（4 张）

### FJ069 吴屯稻花鱼（武夷山市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：稻田游鱼与稻穗，辅助元素：水花，左下角小字落款『吴屯稻花鱼 FJ069 · 水产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 稻田游鱼与稻穗. Auxiliary: 水花. Small Chinese label bottom-left: '吴屯稻花鱼 FJ069 · 水产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ070 宁德大黄鱼（蕉城区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：大黄鱼，辅助元素：渔网、海波纹，左下角小字落款『宁德大黄鱼 FJ070 · 水产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 大黄鱼. Auxiliary: 渔网、海波纹. Small Chinese label bottom-left: '宁德大黄鱼 FJ070 · 水产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ071 桐江鲈鱼（福鼎市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：鲈鱼，辅助元素：江水波纹，左下角小字落款『桐江鲈鱼 FJ071 · 水产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 鲈鱼. Auxiliary: 江水波纹. Small Chinese label bottom-left: '桐江鲈鱼 FJ071 · 水产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ072 福清鳗鲡（福清市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：鳗鲡，辅助元素：水波纹，左下角小字落款『福清鳗鲡 FJ072 · 水产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 鳗鲡. Auxiliary: 水波纹. Small Chinese label bottom-left: '福清鳗鲡 FJ072 · 水产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：海产（11 张）

### FJ073 霞浦海参（霞浦县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：海参，辅助元素：礁石海藻，左下角小字落款『霞浦海参 FJ073 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 海参. Auxiliary: 礁石海藻. Small Chinese label bottom-left: '霞浦海参 FJ073 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ074 霞浦海带（霞浦县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：海带叶片与晾晒竹竿，辅助元素：海面，左下角小字落款『霞浦海带 FJ074 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 海带叶片与晾晒竹竿. Auxiliary: 海面. Small Chinese label bottom-left: '霞浦海带 FJ074 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ075 霞浦紫菜（霞浦县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：紫菜叶片与晾晒竹帘，辅助元素：滩涂，左下角小字落款『霞浦紫菜 FJ075 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 紫菜叶片与晾晒竹帘. Auxiliary: 滩涂. Small Chinese label bottom-left: '霞浦紫菜 FJ075 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ076 东山鲍鱼（东山县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：鲍鱼壳与鲍鱼肉，辅助元素：礁石，左下角小字落款『东山鲍鱼 FJ076 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 鲍鱼壳与鲍鱼肉. Auxiliary: 礁石. Small Chinese label bottom-left: '东山鲍鱼 FJ076 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ077 沙西红蟳（古雷港经济开发区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：红蟳青蟹，辅助元素：蟹笼，左下角小字落款『沙西红蟳 FJ077 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 红蟳青蟹. Auxiliary: 蟹笼. Small Chinese label bottom-left: '沙西红蟳 FJ077 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ078 诏安牡蛎（诏安县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：牡蛎壳与蚝肉，辅助元素：礁石，左下角小字落款『诏安牡蛎 FJ078 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 牡蛎壳与蚝肉. Auxiliary: 礁石. Small Chinese label bottom-left: '诏安牡蛎 FJ078 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ079 平潭坛紫菜（平潭县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：坛紫菜叶片与晒帘，辅助元素：海边礁石，左下角小字落款『平潭坛紫菜 FJ079 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 坛紫菜叶片与晒帘. Auxiliary: 海边礁石. Small Chinese label bottom-left: '平潭坛紫菜 FJ079 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ080 漳港海蚌（长乐区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：海蚌（西施舌）双壳，辅助元素：沙纹，左下角小字落款『漳港海蚌 FJ080 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 海蚌（西施舌）双壳. Auxiliary: 沙纹. Small Chinese label bottom-left: '漳港海蚌 FJ080 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ081 连江鲍鱼（连江县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：鲍鱼与养殖笼，辅助元素：海水，左下角小字落款『连江鲍鱼 FJ081 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 鲍鱼与养殖笼. Auxiliary: 海水. Small Chinese label bottom-left: '连江鲍鱼 FJ081 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ082 南日鲍（秀屿区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：鲍鱼壳，辅助元素：海岛礁石，左下角小字落款『南日鲍 FJ082 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 鲍鱼壳. Auxiliary: 海岛礁石. Small Chinese label bottom-left: '南日鲍 FJ082 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ083 莆田花蛤（秀屿区|城厢区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：花蛤贝壳，辅助元素：沙滩，左下角小字落款『莆田花蛤 FJ083 · 海产』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 花蛤贝壳. Auxiliary: 沙滩. Small Chinese label bottom-left: '莆田花蛤 FJ083 · 海产'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：畜禽（6 张）

### FJ084 德化黑鸡（德化县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：黑羽黑冠的德化黑鸡，辅助元素：竹林山坡，左下角小字落款『德化黑鸡 FJ084 · 畜禽』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 黑羽黑冠的德化黑鸡. Auxiliary: 竹林山坡. Small Chinese label bottom-left: '德化黑鸡 FJ084 · 畜禽'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ085 永春白番鸭（永春县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：白番鸭，辅助元素：池塘，左下角小字落款『永春白番鸭 FJ085 · 畜禽』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 白番鸭. Auxiliary: 池塘. Small Chinese label bottom-left: '永春白番鸭 FJ085 · 畜禽'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ086 龙海金定鸭（龙海区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：麻鸭与鸭蛋，辅助元素：池塘芦苇，左下角小字落款『龙海金定鸭 FJ086 · 畜禽』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 麻鸭与鸭蛋. Auxiliary: 池塘芦苇. Small Chinese label bottom-left: '龙海金定鸭 FJ086 · 畜禽'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ087 福清高山羊（福清市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：山羊，辅助元素：山坡草场，左下角小字落款『福清高山羊 FJ087 · 畜禽』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 山羊. Auxiliary: 山坡草场. Small Chinese label bottom-left: '福清高山羊 FJ087 · 畜禽'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ088 河田鸡（长汀县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：三黄三黑三叉冠的河田鸡，辅助元素：山坡树林，左下角小字落款『河田鸡 FJ088 · 畜禽』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 三黄三黑三叉冠的河田鸡. Auxiliary: 山坡树林. Small Chinese label bottom-left: '河田鸡 FJ088 · 畜禽'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ089 连城白鸭（连城县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：白鸭，辅助元素：水田，左下角小字落款『连城白鸭 FJ089 · 畜禽』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 白鸭. Auxiliary: 水田. Small Chinese label bottom-left: '连城白鸭 FJ089 · 畜禽'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：蜂产品（2 张）

### FJ090 南安蜂蜜（南安市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：蜂蜜罐与蜂巢，辅助元素：蜜蜂、龙眼花，左下角小字落款『南安蜂蜜 FJ090 · 蜂产品』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 蜂蜜罐与蜂巢. Auxiliary: 蜜蜂、龙眼花. Small Chinese label bottom-left: '南安蜂蜜 FJ090 · 蜂产品'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ091 武平蜂蜜（武平县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：蜂蜜与蜂巢，辅助元素：山花，左下角小字落款『武平蜂蜜 FJ091 · 蜂产品』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 蜂蜜与蜂巢. Auxiliary: 山花. Small Chinese label bottom-left: '武平蜂蜜 FJ091 · 蜂产品'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：竹木（3 张）

### FJ092 宁化玉扣纸（宁化县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：竹纸卷与抄纸竹帘，辅助元素：竹山、纸寮，左下角小字落款『宁化玉扣纸 FJ092 · 竹木』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 竹纸卷与抄纸竹帘. Auxiliary: 竹山、纸寮. Small Chinese label bottom-left: '宁化玉扣纸 FJ092 · 竹木'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ093 建瓯毛竹（建瓯市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：毛竹竿与竹叶，辅助元素：竹山，左下角小字落款『建瓯毛竹 FJ093 · 竹木』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 毛竹竿与竹叶. Auxiliary: 竹山. Small Chinese label bottom-left: '建瓯毛竹 FJ093 · 竹木'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ094 永春漆篮（永春县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：髹漆竹编漆篮，辅助元素：竹篾、漆色，左下角小字落款『永春漆篮 FJ094 · 竹木』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 髹漆竹编漆篮. Auxiliary: 竹篾、漆色. Small Chinese label bottom-left: '永春漆篮 FJ094 · 竹木'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：香料（2 张）

### FJ095 浦城桂花（浦城县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：金桂枝条与桂花瓣，辅助元素：桂花树，左下角小字落款『浦城桂花 FJ095 · 香料』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 金桂枝条与桂花瓣. Auxiliary: 桂花树. Small Chinese label bottom-left: '浦城桂花 FJ095 · 香料'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ103 永春篾香（永春县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：篾香束与香灰，辅助元素：竹签、红土，左下角小字落款『永春篾香 FJ103 · 香料』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 篾香束与香灰. Auxiliary: 竹签、红土. Small Chinese label bottom-left: '永春篾香 FJ103 · 香料'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：传统加工物（22 张）

### FJ096 明溪肉脯干（明溪县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：肉脯干片，辅助元素：竹筛、炭火，左下角小字落款『明溪肉脯干 FJ096 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 肉脯干片. Auxiliary: 竹筛、炭火. Small Chinese label bottom-left: '明溪肉脯干 FJ096 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ097 沙县郑湖板鸭（沙县区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：竹片撑开的板鸭，辅助元素：竹架风干，左下角小字落款『沙县郑湖板鸭 FJ097 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 竹片撑开的板鸭. Auxiliary: 竹架风干. Small Chinese label bottom-left: '沙县郑湖板鸭 FJ097 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ098 清流豆腐皮（清流县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：晾在竹杆上的豆腐皮，辅助元素：黄豆，左下角小字落款『清流豆腐皮 FJ098 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 晾在竹杆上的豆腐皮. Auxiliary: 黄豆. Small Chinese label bottom-left: '清流豆腐皮 FJ098 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ099 岚谷熏鹅（武夷山市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：熏鹅，辅助元素：松木烟、竹架，左下角小字落款『岚谷熏鹅 FJ099 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 熏鹅. Auxiliary: 松木烟、竹架. Small Chinese label bottom-left: '岚谷熏鹅 FJ099 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ100 建瓯板鸭（建瓯市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：龟甲状板鸭，辅助元素：竹片、霜风晾架，左下角小字落款『建瓯板鸭 FJ100 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 龟甲状板鸭. Auxiliary: 竹片、霜风晾架. Small Chinese label bottom-left: '建瓯板鸭 FJ100 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ101 厦门馅饼（厦门市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：馅饼与绿豆馅剖面，辅助元素：饼模，左下角小字落款『厦门馅饼 FJ101 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 馅饼与绿豆馅剖面. Auxiliary: 饼模. Small Chinese label bottom-left: '厦门馅饼 FJ101 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ102 崇武鱼卷（惠安县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：鱼卷与切片，辅助元素：鱼肉、竹帘，左下角小字落款『崇武鱼卷 FJ102 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 鱼卷与切片. Auxiliary: 鱼肉、竹帘. Small Chinese label bottom-left: '崇武鱼卷 FJ102 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ104 永春老醋（永春县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：醋坛与棕黑醋液，辅助元素：糯米、红曲，左下角小字落款『永春老醋 FJ104 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 醋坛与棕黑醋液. Auxiliary: 糯米、红曲. Small Chinese label bottom-left: '永春老醋 FJ104 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ105 深沪水丸（晋江市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：鱼丸与汤碗，辅助元素：鱼肉，左下角小字落款『深沪水丸 FJ105 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 鱼丸与汤碗. Auxiliary: 鱼肉. Small Chinese label bottom-left: '深沪水丸 FJ105 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ106 湖头米粉（安溪县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：米粉束，辅助元素：竹匾，左下角小字落款『湖头米粉 FJ106 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 米粉束. Auxiliary: 竹匾. Small Chinese label bottom-left: '湖头米粉 FJ106 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ107 永泰李干（永泰县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：李干与鲜李，辅助元素：竹匾晾晒，左下角小字落款『永泰李干 FJ107 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 李干与鲜李. Auxiliary: 竹匾晾晒. Small Chinese label bottom-left: '永泰李干 FJ107 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ108 福州线面（闽侯县|福州市区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：手工拉制中的线面与晾晒架，辅助元素：线面束，左下角小字落款『福州线面 FJ108 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 手工拉制中的线面与晾晒架. Auxiliary: 线面束. Small Chinese label bottom-left: '福州线面 FJ108 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ109 福州肉燕（鼓楼区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：肉燕皮与包好的肉燕，辅助元素：擀皮木槌，左下角小字落款『福州肉燕 FJ109 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 肉燕皮与包好的肉燕. Auxiliary: 擀皮木槌. Small Chinese label bottom-left: '福州肉燕 FJ109 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ110 福州鱼丸（福州市区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：带馅鱼丸剖面与汤碗，辅助元素：葱花，左下角小字落款『福州鱼丸 FJ110 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 带馅鱼丸剖面与汤碗. Auxiliary: 葱花. Small Chinese label bottom-left: '福州鱼丸 FJ110 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ111 福建老酒（福州市区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：酒坛与黄酒，辅助元素：糯米、红曲，左下角小字落款『福建老酒 FJ111 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 酒坛与黄酒. Auxiliary: 糯米、红曲. Small Chinese label bottom-left: '福建老酒 FJ111 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ112 兴化桂圆（涵江区|城厢区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：桂圆干与鲜龙眼，辅助元素：果木烘焙，左下角小字落款『兴化桂圆 FJ112 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 桂圆干与鲜龙眼. Auxiliary: 果木烘焙. Small Chinese label bottom-left: '兴化桂圆 FJ112 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ113 兴化米粉（涵江区|城厢区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：细丝米粉与竹匾，辅助元素：米浆，左下角小字落款『兴化米粉 FJ113 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 细丝米粉与竹匾. Auxiliary: 米浆. Small Chinese label bottom-left: '兴化米粉 FJ113 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ114 上杭萝卜干（上杭县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：萝卜干条，辅助元素：萝卜、竹匾，左下角小字落款『上杭萝卜干 FJ114 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 萝卜干条. Auxiliary: 萝卜、竹匾. Small Chinese label bottom-left: '上杭萝卜干 FJ114 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ115 武平猪胆干（武平县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：猪胆干与切片，辅助元素：竹架晾挂，左下角小字落款『武平猪胆干 FJ115 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 猪胆干与切片. Auxiliary: 竹架晾挂. Small Chinese label bottom-left: '武平猪胆干 FJ115 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ116 连城红心地瓜干（连城县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：桔红色地瓜干条，辅助元素：地瓜、蒸笼，左下角小字落款『连城红心地瓜干 FJ116 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 桔红色地瓜干条. Auxiliary: 地瓜、蒸笼. Small Chinese label bottom-left: '连城红心地瓜干 FJ116 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ117 长汀豆腐干（长汀县）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：豆腐干块，辅助元素：黄豆、卤锅，左下角小字落款『长汀豆腐干 FJ117 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 豆腐干块. Auxiliary: 黄豆、卤锅. Small Chinese label bottom-left: '长汀豆腐干 FJ117 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ118 龙岩咸酥花生（新罗区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：咸酥花生壳与花生粒，辅助元素：布袋，左下角小字落款『龙岩咸酥花生 FJ118 · 传统加工物』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 咸酥花生壳与花生粒. Auxiliary: 布袋. Small Chinese label bottom-left: '龙岩咸酥花生 FJ118 · 传统加工物'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.


## 批次：其他（2 张）

### FJ119 建瓯锥栗（建瓯市）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：锥栗刺球与栗仁，辅助元素：枝叶，左下角小字落款『建瓯锥栗 FJ119 · 其他』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 锥栗刺球与栗仁. Auxiliary: 枝叶. Small Chinese label bottom-left: '建瓯锥栗 FJ119 · 其他'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.

### FJ120 建盏（建阳区）
中文：纸本线稿+淡彩科普插画，米白纸底（#f8f4ea），深墨绿/深棕细线描边，单色淡彩水色晕染，居中构图，主体：黑釉兔毫建盏，辅助元素：龙窑、茶汤，左下角小字落款『建盏 FJ120 · 其他』，风格安静克制、纸感、手绘，无照片感，无重阴影，无水印，1:1 正方形。
English: Chinese botanical illustration on paper texture (#f8f4ea), fine ink linework in muted dark green and brown, soft single-color watercolor washes, centered composition. Subject: 黑釉兔毫建盏. Auxiliary: 龙窑、茶汤. Small Chinese label bottom-left: '建盏 FJ120 · 其他'. Quiet, restrained, hand-drawn paper feel, no photorealism, no heavy shadows, no watermark, 1:1 square.
