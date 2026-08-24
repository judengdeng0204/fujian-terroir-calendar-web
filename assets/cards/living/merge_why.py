# -*- coding: utf-8 -*-
import json, sys, os
sys.path.insert(0, "/Users/judengdeng/Documents/Codex/2026-08-21/files-pasted-by-the-user-100/outputs/Fujian_Terroir_Calendar_Web/assets/cards/living")
from why_part_tea import WHY_TEA
from why_part_fruit import WHY_FRUIT
from why_part_veg import WHY_VEG
from why_part_flower import WHY_FLOWER
from why_part_aqua import WHY_AQUA
from why_part_livestock import WHY_LIVESTOCK
from why_part_food import WHY_FOOD

allp = WHY_TEA + WHY_FRUIT + WHY_VEG + WHY_FLOWER + WHY_AQUA + WHY_LIVESTOCK + WHY_FOOD
print("total:", len(allp))
ids = [p["product_id"] for p in allp]
expected = [f"FJ{i:03d}" for i in range(1, 121)]
print("missing:", [e for e in expected if e not in ids])
print("dups:", [i for i in set(ids) if ids.count(i) > 1])

errors = []
n_content = 0
n_null = 0
reasons = {}
lens = []
for p in allp:
    w = p.get("why_here")
    if not w:
        errors.append(f"{p['product_id']} missing why_here")
        continue
    c = w.get("content")
    conf = w.get("confidence")
    src = w.get("sources", [])
    reason = w.get("reason")
    if c is None:
        n_null += 1
        reasons[reason] = reasons.get(reason, 0) + 1
        if conf is not None: errors.append(f"{p['product_id']} null content but conf={conf}")
        if src: errors.append(f"{p['product_id']} null content but sources")
        if reason not in ("no_reliable_source", "weak_evidence"): errors.append(f"{p['product_id']} bad reason {reason}")
    else:
        n_content += 1
        ln = len(c)
        lens.append(ln)
        if not (80 <= ln <= 150):
            errors.append(f"{p['product_id']} len {ln} (expect 80-150)")
        if conf not in ("high", "medium", "low"): errors.append(f"{p['product_id']} bad conf {conf}")
        if not src: errors.append(f"{p['product_id']} no sources")
        if len(src) > 3: errors.append(f"{p['product_id']} >3 sources")
        if reason is not None: errors.append(f"{p['product_id']} reason not null")
        for s in src:
            if not s.get("source_name"): errors.append(f"{p['product_id']} source no name")
            if s.get("evidence_level") not in ("A","B","C","D"): errors.append(f"{p['product_id']} bad evidence {s.get('evidence_level')}")
            if len((s.get("quote") or "")) > 80: errors.append(f"{p['product_id']} quote too long")

print("content:", n_content, "| null:", n_null, "| reasons:", reasons)
if lens: print("len range:", min(lens), "-", max(lens))
print("ERRORS:", len(errors))
for e in errors[:40]: print(" -", e)

out = "/Users/judengdeng/Documents/Codex/2026-08-21/files-pasted-by-the-user-100/outputs/Fujian_Terroir_Calendar_Web/assets/cards/why_here_all.jsonl"
with open(out, "w") as f:
    for p in allp:
        f.write(json.dumps(p, ensure_ascii=False) + "\n")
print("written:", out, os.path.getsize(out), "bytes,", sum(1 for _ in open(out)), "lines")
