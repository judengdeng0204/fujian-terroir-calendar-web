# -*- coding: utf-8 -*-
import json, sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from monthly_data import MONTHS

CN = {1:"一月",2:"二月",3:"三月",4:"四月",5:"五月",6:"六月",7:"七月",8:"八月",9:"九月",10:"十月",11:"十一月",12:"十二月"}
SEASONS = {1:"冬",2:"春",3:"春",4:"春",5:"夏",6:"夏",7:"夏",8:"秋",9:"秋",10:"秋",11:"冬",12:"冬"}

errors = []
for m in MONTHS:
    mn = m["month"]
    c = m["content"]
    gl = m["golden_line"]
    kw = m["keywords"]
    rc = m["region_changes"]
    ph = m["phenology"]
    la = m["life_activities"]
    if not (80 <= len(c) <= 150): errors.append(f"{mn}月 正文字数 {len(c)} 超出 80-150")
    if not (10 <= len(gl) <= 20): errors.append(f"{mn}月 金句字数 {len(gl)} 超出 10-20")
    if not (3 <= len(kw) <= 5): errors.append(f"{mn}月 关键词 {len(kw)} 个")
    if not (2 <= len(rc) <= 4): errors.append(f"{mn}月 区域变化 {len(rc)} 条")
    if not (2 <= len(ph) <= 6): errors.append(f"{mn}月 物候 {len(ph)} 条")
    if not (2 <= len(la) <= 6): errors.append(f"{mn}月 生活活动 {len(la)} 条")

print("=== 校验 ===")
if errors:
    for e in errors: print(" -", e)
else:
    print("全部通过：12 个月正文字数/金句/关键词/区域/物候/生活活动均合规")
for m in MONTHS:
    print(f"{m['month']:2d}月 正文 {len(m['content'])} 字 | 金句 {len(m['golden_line'])} 字 | 关键词 {len(m['keywords'])} | 区域 {len(m['region_changes'])}")

# 重复句式检查：首句
print("\n=== 每月首句（句式多样性检查） ===")
for m in MONTHS:
    print(f"{m['month']:2d}月: {m['content'][:18]}…")

# 生成 JSON
out_json = "/Users/judengdeng/Documents/Codex/2026-08-21/files-pasted-by-the-user-100/outputs/Fujian_Terroir_Calendar_Web/assets/cards/monthly/monthly_terroir.json"
with open(out_json, "w") as f:
    json.dump(MONTHS, f, ensure_ascii=False, indent=1)
print("\nJSON written:", out_json, os.path.getsize(out_json), "bytes")

# 生成 Markdown
lines = []
lines.append("# 福建月度风土叙事 · 十二个月风土年历")
lines.append("")
lines.append("> 沿着一年的时间轴阅读福建：山、海与人的季节节奏。每个月都不是孤立的气候切片，而是前后相接的一段风土进程——从深冬的蓄藏，到开春的萌发，再到盛夏的丰熟、金秋的归仓，最终落回岁末的年味。")
lines.append("")
lines.append("| 月份 | 月度主题 | 风土金句 |")
lines.append("| --- | --- | --- |")
for m in MONTHS:
    lines.append(f"| {CN[m['month']]} | {m['theme']} | {m['golden_line']} |")
lines.append("")

for m in MONTHS:
    mn = m["month"]
    lines.append(f"---")
    lines.append("")
    lines.append(f"## {CN[mn]}（{SEASONS[mn]}）")
    lines.append("")
    lines.append(f"**月度主题：** {m['theme']}")
    lines.append("")
    lines.append(f"**风土金句：** {m['golden_line']}")
    lines.append("")
    lines.append(f"**正文：**")
    lines.append("")
    lines.append(m["content"])
    lines.append("")
    lines.append(f"**风土关键词：** " + " · ".join(m["keywords"]))
    lines.append("")
    lines.append("**主要区域变化：**")
    for r in m["region_changes"]:
        lines.append(f"- {r}")
    lines.append("")
    lines.append("**主要物候：**")
    for p in m["phenology"]:
        lines.append(f"- {p}")
    lines.append("")
    lines.append("**主要生活活动：**")
    for a in m["life_activities"]:
        lines.append(f"- {a}")
    lines.append("")

lines.append("---")
lines.append("")
lines.append("## 年历节奏总览")
lines.append("")
lines.append("把十二个月连起来看，福建的风土呈现出一条清晰的往复：")
lines.append("")
lines.append("1. **冬（11月–次年1月）**：山藏、海晒、风干——冬笋与香菇、紫菜与板鸭、地瓜干与水仙，一切都在为年节蓄藏。")
lines.append("2. **春（2月–4月）**：从云霄枇杷的\u201c开春第一果\u201d到谷雨前的茶山连轴，春笋、海带、海参与春茶在同一场大春收里接力。")
lines.append("3. **夏（5月–7月）**：梅雨抢晴与盛夏果熟并行，杨梅、海带、鳗鲡、水蜜桃、荔枝与茉莉窨花轮番登场。")
lines.append("4. **秋（8月–10月）**：立秋转场、晒秋归仓，龙眼与桂圆焙干、秋茶飘香、蜜柚压枝、再生稻两度转金。")
lines.append("")
lines.append("山与海的节奏在四季里互相错开又彼此接续：当闽北的茶树休眠，闽南的枇杷已先一步转黄；当闽中的稻浪归仓，闽东的紫菜正赶在霜风里上岸。福建的风土，从来不是一张平均的气候面孔，而是山、海、丘陵各自呼吸，又在同一本日历上相遇。")

out_md = "/Users/judengdeng/Documents/Codex/2026-08-21/files-pasted-by-the-user-100/outputs/Fujian_Terroir_Calendar_Web/assets/cards/monthly/monthly_terroir.md"
with open(out_md, "w") as f:
    f.write("\n".join(lines))
print("MD written:", out_md, os.path.getsize(out_md), "bytes")
