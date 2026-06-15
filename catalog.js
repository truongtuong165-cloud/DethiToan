// ============================================================
// CATALOG.JS — Danh sách toàn bộ đề thi
// ============================================================
// Mỗi lần thêm đề mới, CHỈ CẦN THÊM 1 DÒNG vào mảng "exams"
// của chương tương ứng, rồi commit & push lên GitHub.
//
// CẤU TRÚC: Lớp > Chương > Đề thi
// ============================================================

const CATALOG = [
  {
    class: "1_Class_12",
    chapters: [
      {
        chapter: "12.1 — Hàm số và đồ thị",
        exams: [
          { label: "Đề luyện tập Bài 1 (Mã 0101)", file: "de_0101.js" },
          { label: "Đề luyện tập Bài 2 (Mã 0102)", file: "de_0102.js" },
        ]
      },
      { chapter: "12.2 — Vectơ trong không gian", exams: [] },
      { chapter: "12.3 — Số đo độ phân tán",      exams: [] },
      { chapter: "12.4 — Nguyên hàm và tích phân", exams: [] },
      { chapter: "12.5 — Hình học Oxyz",           exams: [] },
      { chapter: "12.6 — Xác suất có điều kiện",   exams: [] },
    ]
  },
  {
    class: "2_Class_11",
    chapters: [
      { chapter: "11.I — Hàm số lượng giác và phương trình lượng giác", exams: [] },
      { chapter: "11.II — Dãy số. Cấp số cộng và cấp số nhân",          exams: [] },
      { chapter: "11.III — Các số đặc trưng đo xu thể trung tâm của mẫu số liệu ghép nhóm", exams: [] },
      { chapter: "11.IV — Quan hệ song song trong không gian",           exams: [] },
      { chapter: "11.V — Giới hạn. Hàm số liên tục",                    exams: [] },
      { chapter: "11.VI — Hàm số mũ và hàm số lôgarit",                 exams: [] },
      { chapter: "11.VII — Quan hệ vuông góc trong không gian",          exams: [] },
      { chapter: "11.VIII — Các quy tắc tính xác suất",                  exams: [] },
      { chapter: "11.IX — Đạo hàm",                                      exams: [] },
    ]
  },
  {
    class: "3_Class_10",
    chapters: [
      { chapter: "10.I — Mệnh đề và tập hợp",                                      exams: [] },
      { chapter: "10.II — Bất phương trình và hệ bất phương trình bậc nhất hai ẩn", exams: [] },
      { chapter: "10.III — Hệ thức lượng trong tam giác",                           exams: [] },
      { chapter: "10.IV — Vectơ",                                                   exams: [] },
      { chapter: "10.V — Các số đặc trưng của mẫu số liệu không ghép nhóm",         exams: [] },
      { chapter: "10.VI — Hàm số, đồ thị và ứng dụng",                             exams: [] },
      { chapter: "10.VII — Phương pháp tọa độ trong mặt phẳng",                    exams: [] },
      { chapter: "10.VIII — Đại số tổ hợp",                                         exams: [] },
      { chapter: "10.IX — Tính xác suất theo định nghĩa cổ điển",                   exams: [] },
    ]
  },
];
