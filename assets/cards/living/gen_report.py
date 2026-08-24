# -*- coding: utf-8 -*-
import json, collections, datetime

records = [json.loads(l) for l in open("/Users/judengdeng/Documents/Codex/2026-08-21/files-pasted-by-the-user-100/outputs/Fujian_Terroir_Calendar_Web/assets/cards/living_all.jsonl")]
DIMS = ["production_craft", "labor", "food", "culture", "industry"]
DIM_CN = {"production_craft": "生产与技艺", "labor": "劳作", "food": "饮食", "culture": "文化", "industry": "产业"}

lines = []
lines.append("# 「物产与地方生活」五维内容 · 全量交付报告")
lines.append("")
lines.append(f"- 生成时间：{datetime.date.today()}（系统时间）")
lines.append("- 物产总数：**120 种**（FJ001–FJ120，覆盖数据包全部物产）")
lines.append("- 交付文件：`living_all.jsonl`（120 行，每行一种物产的完整五维 JSON）")
lines.append("")
lines.append("## 一、完成概况")
lines.append("")
lines.append("| 维度 | 完成数 | 置信度分布 | 空维数 | 空维原因 |")
lines.append("| --- | --- | --- | --- | --- |")
dim_stat = collections.Counter()
null_stat = collections.Counter()
conf_stat = collections.Counter()
for p in records:
    for d in DIMS:
        c = p["living"][d]
        if c["content"] is not None:
            dim_stat[d] += 1
            conf_stat[(d, c["confidence"])] += 1
        else:
            null_stat[(d, c["reason"])] += 1
for d in DIMS:
    confs = ", ".join(f"{k[1]} {v}" for k, v in sorted(conf_stat.items()) if k[0] == d)
    nulls = ", ".join(f"{r} {n}" for (dd, r), n in sorted(null_stat.items()) if dd == d) or "—"
    lines.append(f"| {DIM_CN[d]} | {dim_stat[d]}/120 | {confs} | {120-dim_stat[d]} | {nulls} |")
lines.append("")
total_content = sum(dim_stat.values())
lines.append(f"- **合计**：有内容维度 **{total_content}** 个，留空维度 **{600-total_content}** 个（全部有明确原因）。")
lines.append(f"- 全部五维均完整的物产：**{sum(1 for p in records if all(p['living'][d]['content'] is not None for d in DIMS))}** 种。")
lines.append("")
lines.append("## 二、留空维度说明")
lines.append("")
lines.append("- **文化维度大量留空（73 个 weak_evidence）是符合预期的**：多数物产没有可查证的节俗、礼俗、传说或地方身份证据，按铁律「没有可靠证据的维度就不显示」处理。")
lines.append("- 30 个饮食维度 `no_reliable_source`：数据包与本次检索均未找到这些物产具体、可引用的食用方式/地方菜/保存方式资料（如多数菌菇、部分水果只有种植信息）。")
lines.append("- 10 个饮食维度 `not_applicable`：花卉（延平百合、南靖兰花、漳州水仙、平潭水仙、武平富贵籽、永福杜鹃）、工艺品（宁化玉扣纸、永春漆篮、永春篾香、建盏）等非食用物产。")
lines.append("")
lines.append("## 三、写作要点执行情况")
lines.append("")
lines.append("- **生产与技艺 vs 劳作已严格区分**：前者写「怎么做/技术/工艺链」，后者写「谁做、何时做、如何组织生活/季节节奏」。")
lines.append("- **饮食维度追问了保存方式与季节饮食**：如建瓯冬笋→笋干、永定红柿→柿饼、同安凤梨穗→龙眼干、福鼎四季柚→留树保鲜至次年立春等。")
lines.append("- **产业维度留意了空间痕迹**：菇棚（古田、顺昌）、渔排（霞浦、连江）、晒场（霞浦海带）、龙眼洋（泉州）、纸寮（宁化）、窑口（建阳）等。")
lines.append("- **文化维度有据才写**：正山小种红茶鼻祖与英式下午茶、福鼎白茶太姥娘娘传说与白茶始祖文化节、安溪铁观音「观音托梦/乾隆赐名」与喊山开茶、福州茉莉花茶世遗与民谣、福橘年俗吉庆果、河田鸡客家年俗、建盏宋代点茶等均有来源支撑。")
lines.append("- **来源全部真实**：优先复用数据包 A/B 级来源（URL 为前期核验），新检索来源（正山小种、福鼎白茶、安溪铁观音、福州茉莉花茶等）为本次搜索确认的 URL；无法确认 URL 的来源（如《世界红茶的始祖武夷正山小种》一书）保留名称+出版信息并标低置信。")
lines.append("")
lines.append("## 四、建议人工复核的 5 个物产")
lines.append("")
for pid, name, why in [
    ("FJ063", "永安淮山", "全部可用来源为 D 级商业网站或低置信环评资料，生产/劳作/产业置信度 low–medium，地标「安砂淮山」细节待官方公告复核。"),
    ("FJ049", "武夷山红菇", "野生菌无产量与价格官方数据，饮食维度仅 D 级媒体线索，产业为定性描述，学名标注「待核」。"),
    ("FJ119", "建瓯锥栗", "产业与饮食维度多依赖 C 级媒体/平台来源，产量数据未获官方核实。"),
    ("FJ111", "福建老酒", "无独立地理标志（福州青红酒才有），产业与饮食来源以政府网综述+百科为主，品牌具体信息待核实。"),
    ("FJ054", "漳州双孢蘑菇", "未检索到「漳州双孢蘑菇」地理标志登记，产业数据（中国菇都、出口量第一）来自 C 级行业/台湾网来源，宜以漳州市农业农村局答复为准。"),
]:
    lines.append(f"- **{pid} {name}**：{why}")
lines.append("")
lines.append("## 五、其他说明")
lines.append("")
lines.append("- 部分物产存在来源间的数据差异（如正山小种海拔、古田水蜜桃成熟期、诏安八仙茶产量等），已在对应维度正文或数据包 notes 中保留主要说法并注明。")
lines.append("- 福州福橘与「福州福桔」同物，交付沿用清单名「福橘」；古田油柰别名「油奈」。")
lines.append("- 生成脚本与分批内容文件保留在 `living/` 目录（part_*.py 与 refs/），便于后续局部修订后重跑合并。")

report = "\n".join(lines)
path = "/Users/judengdeng/Documents/Codex/2026-08-21/files-pasted-by-the-user-100/outputs/Fujian_Terroir_Calendar_Web/assets/cards/living/交付汇总报告.md"
with open(path, "w") as f:
    f.write(report)
print("report written:", path)
print(report[:1500])
