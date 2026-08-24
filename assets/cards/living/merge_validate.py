# -*- coding: utf-8 -*-
import json, sys, os, re

sys.path.insert(0, "/Users/judengdeng/Documents/Codex/2026-08-21/files-pasted-by-the-user-100/outputs/Fujian_Terroir_Calendar_Web/assets/cards/living")

from part_tea import TEA_PRODUCTS
from part_fruit1 import FRUIT_PRODUCTS_1
from part_fruit2 import FRUIT_PRODUCTS_2
from part_veg import VEG_PRODUCTS
from part_flower import FLOWER_PRODUCTS
from part_aqua import AQUA_PRODUCTS
from part_livestock import LIVESTOCK_PRODUCTS
from part_food import FOOD_PRODUCTS

all_products = (TEA_PRODUCTS + FRUIT_PRODUCTS_1 + FRUIT_PRODUCTS_2 + VEG_PRODUCTS +
                FLOWER_PRODUCTS + AQUA_PRODUCTS + LIVESTOCK_PRODUCTS + FOOD_PRODUCTS)

print("total products:", len(all_products))

# 校验 product_id 唯一且为 FJ001-FJ120
ids = [p["product_id"] for p in all_products]
expected = [f"FJ{i:03d}" for i in range(1, 121)]
missing = [e for e in expected if e not in ids]
dups = [i for i in set(ids) if ids.count(i) > 1]
print("missing ids:", missing)
print("duplicate ids:", dups)

DIMS = ["production_craft", "labor", "food", "culture", "industry"]
errors = []
total_content = 0
total_null = 0
null_reasons = {}
char_counts = []
per_product_chars = []

for p in all_products:
    living = p.get("living", {})
    for dim in DIMS:
        d = living.get(dim)
        if not d:
            errors.append(f"{p['product_id']} missing dim {dim}")
            continue
        content = d.get("content")
        conf = d.get("confidence")
        sources = d.get("sources", [])
        reason = d.get("reason")
        if content is None:
            total_null += 1
            null_reasons[reason] = null_reasons.get(reason, 0) + 1
            if conf is not None:
                errors.append(f"{p['product_id']}.{dim}: content null but confidence={conf}")
            if sources:
                errors.append(f"{p['product_id']}.{dim}: content null but sources non-empty")
            if reason not in ("no_reliable_source", "weak_evidence", "not_applicable"):
                errors.append(f"{p['product_id']}.{dim}: invalid reason {reason}")
        else:
            total_content += 1
            n = len(content)
            char_counts.append(n)
            if n < 60 or n > 120:
                errors.append(f"{p['product_id']}.{dim}: char count {n} out of range 60-120")
            if conf not in ("high", "medium", "low"):
                errors.append(f"{p['product_id']}.{dim}: invalid confidence {conf}")
            if not sources:
                errors.append(f"{p['product_id']}.{dim}: content but no sources")
            if reason is not None:
                errors.append(f"{p['product_id']}.{dim}: reason should be null when content present")
            if len(sources) > 3:
                errors.append(f"{p['product_id']}.{dim}: more than 3 sources")
            for s in sources:
                if not s.get("source_name"):
                    errors.append(f"{p['product_id']}.{dim}: source missing name")
                if s.get("evidence_level") not in ("A","B","C","D"):
                    errors.append(f"{p['product_id']}.{dim}: bad evidence level {s.get('evidence_level')}")
                if s.get("source_type") not in ("政府","科研机构","高校","地方志","行业协会","专业媒体","专业数据库","商业网站","自媒体","国家标准","行业标准","博物馆/文化机构"):
                    errors.append(f"{p['product_id']}.{dim}: bad source_type {s.get('source_type')}")
    # 每物产五维总字数
    total = sum(len(living[d]["content"]) for d in DIMS if living.get(d) and living[d].get("content"))
    per_product_chars.append((p["product_id"], total))
    if total > 600:
        errors.append(f"{p['product_id']}: total chars {total} > 600")

print("content dims:", total_content, "| null dims:", total_null)
print("null reasons:", null_reasons)
print("char count range: min", min(char_counts), "max", max(char_counts))
over600 = [x for x in per_product_chars if x[1] > 600]
print("products over 600 total:", over600)
print()
print("ERRORS:", len(errors))
for e in errors[:60]:
    print(" -", e)

# 输出合并文件
out_path = "/Users/judengdeng/Documents/Codex/2026-08-21/files-pasted-by-the-user-100/outputs/Fujian_Terroir_Calendar_Web/assets/cards/living_all.jsonl"
with open(out_path, "w") as f:
    for p in all_products:
        f.write(json.dumps(p, ensure_ascii=False) + "\n")
print("\nwritten:", out_path, os.path.getsize(out_path), "bytes,", sum(1 for _ in open(out_path)), "lines")
