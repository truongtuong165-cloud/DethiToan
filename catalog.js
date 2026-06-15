// ============================================================
// CATALOG.JS — Danh sách toàn bộ đề thi
// ============================================================
// Mỗi lần thêm đề mới, CHỈ CẦN THÊM 1 DÒNG vào mảng "exams"
// của bài học tương ứng, rồi commit & push lên GitHub.
//
// CẤU TRÚC: Lớp > Chương > Bài > Đề thi
// Mỗi đề thi gồm: { label: "Tên hiển thị", file: "de_xxxx.js" }
// ============================================================

const CATALOG = [
  {
    class: "1_Class_12",
    chapters: [
      {
        chapter: "Chương 1: Ứng dụng đạo hàm",
        lessons: [
          {
            lesson: "12.1__ham_so_do_thi",
            exams: [
              { label: "Đề luyện tập Bài 1 (Mã 0101)", file: "de_0101.js" },
              { label: "Đề luyện tập Bài 2 (Mã 0102)", file: "de_0102.js" },
              { label: "Đề luyện tập Bài 2 (Mã 0102)", file: "de_0103.js" },
              // Thêm đề mới ở đây ↓
            ]
          },
          {
            lesson: "12.2__vetor_trong_khong_gian",
            exams: [
              { label: "Đề luyện tập Bài 1 (Mã 0201)", file: "de_0201.js" },
            ]
          },
          {
            lesson: "12.3__so_do_do_phan_tan",
            exams: [
              { label: "Đề luyện tập Bài 1 (Mã 0301)", file: "de_0301.js" },
            ]
          },
          {
            lesson: "12.4__nguyen_ham_va_tich_phan",
            exams: [
              { label: "Đề luyện tập Bài 1 (Mã 0401)", file: "de_0401.js" },
            ]
          },
          {
            lesson: "12.5__hinh_hoc_oxyz",
            exams: [
              { label: "Đề luyện tập Bài 1 (Mã 0501)", file: "de_0501.js" },
            ]
          },
          {
            lesson: "12.6__xac_suat_co_dieu_kien",
            exams: [
              { label: "Đề luyện tập Bài 1 (Mã 0601)", file: "de_0601.js" },
            ]
          },
        ]
      },
      // Thêm chương mới ở đây ↓
    ]
  },
  {
    class: "2_Class_11",
    chapters: [
      {
        chapter: "Chương 1: Hàm số lượng giác",
        lessons: [
          {
            lesson: "11.1__ham_so_luong_giac",
            exams: [
              { label: "Đề khảo sát lượng giác", file: "toan11_chuong1.html" },
            ]
          },
        ]
      },
    ]
  },
  // Thêm lớp mới ở đây ↓
];
