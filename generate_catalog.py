#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
generate_catalog.py
-------------------
Chạy bởi GitHub Actions mỗi khi có file .js thay đổi trong thư mục exams/.
Quét toàn bộ exams/classXX/chuongY/*.js và sinh ra catalog.js tự động.

Quy tắc đặt tên file đề thi (gọn, theo yêu cầu):
  exams/class12/chuong1/12_1_de_01.js
                         ^^ ^ ^^^^^^
                         lớp chương  số thứ tự đề

  Phần "lớp_chương" ở đầu tên file chỉ để bạn dễ nhận diện khi nhìn
  trong thư mục — script chỉ thực sự lấy SỐ THỨ TỰ ĐỀ ở cuối tên
  (sau "de_") để hiển thị, vì lớp/chương đã thể hiện qua đường dẫn
  thư mục class12/chuong1/ rồi.

Ví dụ:
  12_1_de_01.js  ->  "Đề 01"
  12_1_de_02.js  ->  "Đề 02"
  11_3_de_05.js  ->  "Đề 05"
"""

import os
import re
import json
from pathlib import Path

# ── Cấu hình tên chương cho từng lớp ────────────────────────────────────────
META = {
    "class12": {
        "label": "1_Class_12",
        "chapters": {
            "chuong1": "12.I — Hàm số và đồ thị",
            "chuong2": "12.II — Vectơ trong không gian",
            "chuong3": "12.III — Số đo độ phân tán",
            "chuong4": "12.IV — Nguyên hàm và tích phân",
            "chuong5": "12.V — Hình học Oxyz",
            "chuong6": "12.VI — Xác suất có điều kiện",
        }
    },
    "class11": {
        "label": "2_Class_11",
        "chapters": {
            "chuong1": "11.I — Hàm số lượng giác và phương trình lượng giác",
            "chuong2": "11.II — Dãy số. Cấp số cộng và cấp số nhân",
            "chuong3": "11.III — Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
            "chuong4": "11.IV — Quan hệ song song trong không gian",
            "chuong5": "11.V — Giới hạn. Hàm số liên tục",
            "chuong6": "11.VI — Hàm số mũ và hàm số lôgarit",
            "chuong7": "11.VII — Quan hệ vuông góc trong không gian",
            "chuong8": "11.VIII — Các quy tắc tính xác suất",
            "chuong9": "11.IX — Đạo hàm",
        }
    },
    "class10": {
        "label": "3_Class_10",
        "chapters": {
            "chuong1": "10.I — Mệnh đề và tập hợp",
            "chuong2": "10.II — Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
            "chuong3": "10.III — Hệ thức lượng trong tam giác",
            "chuong4": "10.IV — Vectơ",
            "chuong5": "10.V — Các số đặc trưng của mẫu số liệu không ghép nhóm",
            "chuong6": "10.VI — Hàm số, đồ thị và ứng dụng",
            "chuong7": "10.VII — Phương pháp tọa độ trong mặt phẳng",
            "chuong8": "10.VIII — Đại số tổ hợp",
            "chuong9": "10.IX — Tính xác suất theo định nghĩa cổ điển",
        }
    },
}

EXAMS_DIR = Path("exams")


def file_to_label(filename: str) -> str:
    """
    12_1_de_01.js  ->  "Đề 01"
    12_1_de_10.js  ->  "Đề 10"

    Nếu tên file không khớp quy tắc (không có "de_<số>" ở cuối),
    trả về nguyên tên file (không phần mở rộng) để vẫn hiển thị được,
    tránh vỡ catalog vì 1 file đặt tên sai.
    """
    stem = Path(filename).stem  # bỏ đuôi .js
    m = re.search(r'de_?(\d+)$', stem)
    if m:
        num = m.group(1)
        return f"Đề {num}"
    return stem


def build_catalog():
    catalog = []

    # Thứ tự hiển thị: lớp 12 trước, rồi 11, rồi 10
    for class_key in sorted(META.keys(), reverse=True):
        class_info = META[class_key]
        class_dir = EXAMS_DIR / class_key
        if not class_dir.exists():
            continue

        chapters_list = []
        for chap_key in sorted(
            class_info["chapters"].keys(),
            key=lambda k: int(re.sub(r'\D', '', k) or 0)
        ):
            chap_name = class_info["chapters"][chap_key]
            chap_dir = class_dir / chap_key
            exams = []

            if chap_dir.exists():
                js_files = sorted(
                    f for f in os.listdir(chap_dir) if f.endswith(".js")
                )
                for fname in js_files:
                    rel_path = f"exams/{class_key}/{chap_key}/{fname}"
                    exams.append({
                        "label": file_to_label(fname),
                        "file": rel_path
                    })

            chapters_list.append({
                "chapter": chap_name,
                "exams": exams
            })

        catalog.append({
            "class": class_info["label"],
            "chapters": chapters_list
        })

    return catalog


def write_catalog(catalog):
    lines = [
        "// ============================================================",
        "// catalog.js — TỰ ĐỘNG SINH BỞI generate_catalog.py",
        "// KHÔNG SỬA FILE NÀY THỦ CÔNG — sẽ bị ghi đè khi push",
        "// ============================================================",
        "",
        "const CATALOG = " + json.dumps(catalog, ensure_ascii=False, indent=2) + ";",
        "",
    ]
    Path("catalog.js").write_text("\n".join(lines), encoding="utf-8")
    print("✅ catalog.js đã được sinh thành công!")

    for cls in catalog:
        total = sum(len(ch["exams"]) for ch in cls["chapters"])
        print(f"   {cls['class']}: {len(cls['chapters'])} chương, {total} đề")


if __name__ == "__main__":
    if not EXAMS_DIR.exists():
        print("⚠️  Thư mục 'exams/' chưa tồn tại — tạo catalog rỗng.")
    catalog = build_catalog()
    write_catalog(catalog)
