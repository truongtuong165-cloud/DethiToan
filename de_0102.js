// ==========================================
// FILE CẤU HÌNH VÀ DỮ LIỆU ĐỀ THI (MÃ ĐỀ: 0101)
// ==========================================

const EXAM_DATA = {
  meta: {
    title: "Sở GD&ĐT Phú Thọ — Cụm các trường THPT Chuyên",
    subTitle: "Kỳ khảo sát chất lượng học sinh lớp 12 THPT · Năm học 2025–2026 · Môn: Toán · Ngày 14/5/2026",
    note: "<strong>Thang điểm:</strong> Phần I (12 câu × 0,25đ = 3đ) · Phần II (4 câu, mỗi câu: đúng 1 ý = 0,1đ, 2 ý = 0,25đ, 3 ý = 0,5đ, 4 ý = 1đ — tổng 4đ) · Phần III (6 câu × 0,5đ = 3đ)",
    subject: "Toán",
    code: "0101",
    duration: "90 phút",
    totalQuestions: "22 câu",
    date: "14/5/2026",
    totalSeconds: 5400 // 90 phút = 5400 giây
  },

  // Hệ thống lưu trữ hình ảnh dạng Base64 dùng trong đề
  images: {
    "img_bbt": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAEHAQMAAAD...", // Giữ nguyên chuỗi mã ảnh gốc của bạn ở đây
    "img_dothi_fprime": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAD...", 
    "img_chop_sabcd": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAE..." 
  },

  // Danh sách câu hỏi chia làm 3 phần
  questions: {
    part1: [
      { id: "p1_q1", number: 1, text: "Cho hàm số \\(y = f(x)\\) có bảng biến thiên như sau:<br><br><center><img src='img_bbt' style='max-width:100%;height:auto;margin:10px 0;border:1px solid #ede7d9;border-radius:4px;padding:5px;'></center><br>Hàm số đã cho đồng biến trên khoảng nào dưới đây?", options: ["\\((0; 2)\\)", "\\((2; +\\infty)\\)", "\\((-\\infty; 1)\\)", "\\((1; 3)\\)"], correct: 2 },
      { id: "p1_q2", number: 2, text: "Cho hàm số \\(y=f(x)\\) có đồ thị là đường cong trong hình bên. Hàm số đã cho đạt cực đại tại điểm nào?", options: ["\\(x=-1\\)", "\\(x=1\\)", "\\(x=2\\)", "\\(x=-2\\)"], correct: 0 },
      { id: "p1_q3", number: 3, text: "Cho hàm số bậc ba \\(y=f(x)\\) có đồ thị là đường cong trong hình bên. Số nghiệm thực của phương trình \\(f(x) = 1\\) là:", options: ["1", "3", "0", "2"], correct: 1 },
      { id: "p1_q4", number: 4, text: "Đường tiệm cận đứng của đồ thị hàm số \\(y = \\frac{2x-1}{x+2}\\) là đường thẳng:", options: ["\\(x=2\\)", "\\(x=-2\\)", "\\(x=1\\)", "\\(x=-1\\)"], correct: 1 },
      { id: "p1_q5", number: 5, text: "Đồ thị của hàm số nào dưới đây có dạng như đường cong trong hình bên?", options: ["\\(y = -x^4 + 2x^2 + 1\\)", "\\(y = x^4 - 2x^2 + 1\\)", "\\(y = x^3 - 3x + 1\\)", "\\(y = -x^3 + 3x + 1\\)"], correct: 0 },
      { id: "p1_q6", number: 6, text: "Cho khối chóp \\(S.ABCD\\) có đáy là hình vuông cạnh \\(a\\), \\(SA\\) vuông góc với mặt phẳng đáy và \\(SA = 3a\\). Thể tích của khối chóp đã cho bằng:", options: ["\\(3a^3\\)", "\\(a^3\\)", "\\(9a^3\\)", "\\(\\frac{1}{3}a^3\\)"], correct: 1 },
      { id: "p1_q7", number: 7, text: "Cho khối lăng trụ đứng \\(ABC.A'B'C'\\) có đáy là tam giác đều cạnh \\(a\\), cạnh bên \\(AA' = 2a\\). Thể tích của khối lăng trụ đã cho bằng:", options: ["\\(\\frac{a^3\\sqrt{3}}{6}\\)", "\\(\\frac{a^3\\sqrt{3}}{2}\\)", "\\(\\frac{a^3\\sqrt{3}}{3}\\)", "\\(a^3\\sqrt{3}\\)"], correct: 1 },
      { id: "p1_q8", number: 8, text: "Cho hình nón có bán kính đáy \\(r = 3\\) và độ dài đường sinh \\(l = 5\\). Diện tích xung quanh của hình nón đã cho bằng:", options: ["\\(15\\pi\\)", "\\(30\\pi\\)", "\\(20\\pi\\)", "\\(12\\pi\\)"], correct: 0 },
      { id: "p1_q9", number: 9, text: "Cho hình trụ có bán kính đáy \\(r = 2\\) và chiều cao \\(h = 4\\). Diện tích toàn phần của hình trụ đã cho bằng:", options: ["\\(16\\pi\\)", "\\(24\\pi\\)", "\\(8\\pi\\)", "\\(12\\pi\\)"], correct: 1 },
      { id: "p1_q10", number: 10, text: "Cho mặt cầu có bán kính \\(R = 3\\). Diện tích của mặt cầu đã cho bằng:", options: ["\\(36\\pi\\)", "\\(9\\pi\\)", "\\(12\\pi\\)", "\\(27\\pi\\)"], correct: 0 },
      { id: "p1_q11", number: 11, text: "Trong không gian \\(Oxyz\\), cho hai điểm \\(A(1; 2; -3)\\) và \\(B(3; -2; 1)\\). Tọa độ trung điểm \\(I\\) của đoạn thẳng \\(AB\\) là:", options: ["\\((2; 0; -1)\\)", "\\((4; 0; -2)\\)", "\\((1; -2; 2)\\)", "\\((2; -2; -1)\\)"], correct: 0 },
      { id: "p1_q12", number: 12, text: "Trong không gian \\(Oxyz\\), vectơ nào dưới đây là một vectơ pháp tuyến của mặt phẳng \\((P): 2x - y + 3z - 4 = 0\\)?", options: ["\\(\\vec{n}_1 = (2; 1; 3)\\)", "\\(\\vec{n}_2 = (2; -1; 3)\\)", "\\(\\vec{n}_3 = (2; -1; -4)\\)", "\\(\\vec{n}_4 = (2; 1; -4)\\)"], correct: 1 }
    ],
    part2: [
      {
        id: "p2_q1", number: 1,
        context: "Cho hàm số bậc ba \\(y = f(x) = ax^3 + bx^2 + cx + d\\) \\((a \\neq 0)\\) có đồ thị đạo hàm \\(y = f'(x)\\) như hình vẽ bên dưới:<br><br><center><img src='img_dothi_fprime' style='max-width:100%;height:auto;margin:10px 0;border:1px solid #ede7d9;border-radius:4px;padding:5px;'></center>",
        items: [
          { text: "a) Hàm số \\(y = f(x)\\) đồng biến trên khoảng \\((0; 2)\\).", correct: true },
          { text: "b) Hàm số \\(y = f(x)\\) đạt cực đại tại \\(x = 0\\).", correct: false },
          { text: "c) Đồ thị hàm số \\(y = f(x)\\) có điểm cực tiểu nằm bên phải trục tung.", correct: true },
          { text: "d) Nếu \\(f(0) = 1\\) thì phương trình \\(f(x) = 1\\) có đúng 2 nghiệm thực phân biệt.", correct: true }
        ]
      },
      {
        id: "p2_q2", number: 2,
        context: "Cho khối chóp tứ giác đều \\(S.ABCD\\) có tất cả các cạnh đều bằng \\(a\\). Gọi \\(O\\) là giao điểm của \\(AC\\) và \\(BD\\).",
        items: [
          { text: "a) Đường thẳng \\(SO\\) vuông góc với mặt phẳng \\((ABCD)\\).", correct: true },
          { text: "b) Chiều cao \\(SO\\) của khối chóp bằng \\(\\frac{a\\sqrt{3}}{2}\\).", correct: false },
          { text: "c) Thể tích khối chóp \\(S.ABCD\\) bằng \\(\\frac{a^3\\sqrt{2}}{6}\\).", correct: true },
          { text: "d) Góc giữa cạnh bên \\(SA\\) và mặt phẳng đáy \\((ABCD)\\) bằng \\(45^\\circ\\).", correct: true }
        ]
      },
      {
        id: "p2_q3", number: 3,
        context: "Trong không gian \\(Oxyz\\), cho điểm \\(A(1; 2; 3)\\) và mặt phẳng \\((P): x + 2y - 2z + 5 = 0\\).",
        items: [
          { text: "a) Điểm \\(A\\) nằm thuộc mặt phẳng \\((P)\\).", correct: false },
          { text: "b) Khoảng cách từ điểm \\(A\\) đến mặt phẳng \\((P)\\) bằng 2.", correct: false },
          { text: "c) Mặt cầu tâm \\(A\\) tiếp xúc với mặt phẳng \\((P)\\) có phương trình \\((x-1)^2 + (y-2)^2 + (z-3)^2 = 16\\).", correct: false },
          { text: "d) Hình chiếu vuông góc của điểm \\(A\\) trên mặt phẳng \\((P)\\) có tọa độ là \\((0; 0; 5)\\).", correct: false }
        ]
      },
      {
        id: "p2_q4", number: 4,
        context: "Một hộp chứa 5 quả cầu màu đỏ và 7 quả cầu màu xanh có kích thước giống nhau. Lấy ngẫu nhiên đồng thời 3 quả cầu từ hộp.",
        items: [
          { text: "a) Số phần tử của không gian mẫu là \\(C_{12}^3 = 220\\).", correct: true },
          { text: "b) Xác suất để lấy được 3 quả cầu cùng màu đỏ là \\(\\frac{1}{22}\\).", correct: true },
          { text: "c) Xác suất để lấy được ít nhất 1 quả cầu màu đỏ là \\(\\frac{37}{44}\\).", correct: true },
          { text: "d) Xác suất để lấy được nhiều nhất 2 quả cầu màu xanh là \\(\\frac{7}{44}\\).", correct: false }
        ]
      }
    ],
    part3: [
      { id: "p3_q1", number: 1, text: "Cho hàm số \\(y = f(x)\\) liên tục trên \\(\\mathbb{R}\\) và có đồ thị như hình vẽ. Tìm số giá trị nguyên của tham số \\(m\\) để phương trình \\(f(f(x) - 1) = m\\) có đúng 4 nghiệm thực phân biệt.", correct: "3" },
      { id: "p3_q2", number: 2, text: "Cho khối chóp \\(S.ABCD\\) có đáy \\(ABCD\\) là hình chữ nhật, \\(AB = a\\), \\(AD = a\\sqrt{3}\\). Tam giác \\(SAB\\) cân tại \\(S\\) và nằm trong mặt phẳng vuông góc với đáy. Biết góc giữa đường thẳng \\(SD\\) và mặt phẳng đáy bằng \\(60^\\circ\\). Tính thể tích \\(V\\) của khối chóp \\(S.ABCD\\) theo \\(a\\) (kết quả làm tròn đến hàng phần mười sau khi chia \\(a^3\\)).<br><br><center><img src='img_chop_sabcd' style='max-width:100%;height:auto;margin:10px 0;border:1px solid #ede7d9;border-radius:4px;padding:5px;'></center>", correct: "1.2" },
      { id: "p3_q3", number: 3, text: "Một doanh nghiệp dự định sản xuất một loại thùng hình trụ không nắp có thể tích \\(V = 2000\\text{ cm}^3\\). Để tiết kiệm chi phí mua vật liệu làm vỏ thùng, doanh nghiệp cần thiết kế bán kính đáy \\(r\\) (đơn vị: cm) của hình trụ bằng bao nhiêu sao cho diện tích toàn phần (gồm diện tích đáy và diện tích xung quanh) nhỏ nhất? (Kết quả làm tròn đến hàng phần mười).", correct: "8.6" },
      { id: "p3_q4", number: 4, text: "Trong không gian \\(Oxyz\\), cho hai điểm \\(A(1; 0; -2)\\), \\(B(3; 2; 4)\\) và mặt phẳng \\((P): x - y + z - 2 = 0\\). Tìm tọa độ điểm \\(M\\) thuộc mặt phẳng \\((P)\\) sao cho \\(MA^2 + MB^2\\) đạt giá trị nhỏ nhất. Tính tổng hoành độ, tung độ và cao độ của điểm \\(M\\).", correct: "2" },
      { id: "p3_q5", number: 5, text: "Một người gửi 100 triệu đồng vào một ngân hàng với lãi suất 6.5%/năm theo hình thức lãi kép (tiền lãi của năm trước được cộng vào vốn để tính lãi cho năm tiếp theo). Hỏi sau ít nhất bao nhiêu năm người đó nhận được số tiền cả gốc lẫn lãi nhiều hơn 200 triệu đồng?", correct: "12" },
      { id: "p3_q6", number: 6, text: "Cho hàm số bậc bốn \\(y = f(x)\\) có đồ thị hàm số đạo hàm \\(y = f'(x)\\) như hình vẽ. Số điểm cực trị của hàm số \\(g(x) = f(x^2 - 2x)\\) là bao nhiêu?", correct: "7" }
    ]
  }
};