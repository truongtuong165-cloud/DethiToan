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
          // Thêm đề mới ở đây ↓
        ]
      },
      {
        chapter: "12.2 — Vectơ trong không gian",
        exams: [
          { label: "Đề luyện tập Bài 1 (Mã 0201)", file: "de_0201.js" },
        ]
      },
      {
        chapter: "12.3 — Số đo độ phân tán",
        exams: [
          { label: "Đề luyện tập Bài 1 (Mã 0301)", file: "de_0301.js" },
        ]
      },
      {
        chapter: "12.4 — Nguyên hàm và tích phân",
        exams: [
          { label: "Đề luyện tập Bài 1 (Mã 0401)", file: "de_0401.js" },
        ]
      },
      {
        chapter: "12.5 — Hình học Oxyz",
        exams: [
          { label: "Đề luyện tập Bài 1 (Mã 0501)", file: "de_0501.js" },
        ]
      },
      {
        chapter: "12.6 — Xác suất có điều kiện",
        exams: [
          { label: "Đề luyện tập Bài 1 (Mã 0601)", file: "de_0601.js" },
        ]
      },
      // Thêm chương mới ở đây ↓
    ]
  },
  {
    class: "2_Class_11",
    chapters: [
      {
        chapter: "11.1 — Hàm số lượng giác",
        exams: [
          { label: "Đề khảo sát lượng giác", file: "toan11_chuong1.html" },
        ]
      },
      // Thêm chương mới ở đây ↓
    ]
  },
  // Thêm lớp mới ở đây ↓
];
