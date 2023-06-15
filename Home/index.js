// Cú pháp: function + function_name + () +{ khối lệnh thực thi}
function bai_01() {
  const firstName = "Academy";
  const lastName = "Rikkei";
  const fullName = lastName + "" + firstName;
  console.error("cảnh báo: ", fullName);
}

function bai_03() {
  const chemistryMark = Number(prompt("Nhập vào điểm Hóa"));
  const physicsMark = Number(prompt("Nhập vào điểm Lý"));
  const biologyMark = Number(prompt("Nhập vào điểm Sinh"));
  const totalgeMark = chemistryMark + physicsMark + biologyMark;
  const averageMark = (totalgeMark / 3).toFixed(1);

  //Truy vấn tới element
  const resultElement = document.querySelector("#text");
  resultElement.innerHTML =
    " Tổng điểm của 3 môn là " +
    totalgeMark +
    " và điểm trung bình là " +
    averageMark;
}
function bai_04() {
  const resultElement = document.querySelector("#text2");

  let c = +prompt("Nhap do C");
  let f;
  f = c * 1.8 + 32;
  resultElement.innerHTML = "Độ F là :  " + f;
}
function bai_05() {
  const chieuDai = Number(prompt("nhap chieu dai"));
  const chieuRong = Number(prompt("nhap chieu rong"));
  const chuVi = 2 * (chieuDai + chieuRong);
  const dienTich = chieuDai * chieuRong;

  const resultElement = document.querySelector("#text3");
  console.log("element", resultElement);
  resultElement.innerHTML =
    "Chu vi hinh chu nhat la " +
    chuVi +
    " va dien tich hinh chu nhat la " +
    dienTich;
}

function bai_06() {
  const duongKinh = Number(prompt("nhap duong kinh hinh tron"));
  const soPi = 3.14;
  const chuVi = duongKinh * 3.14;
  const dienTich = soPi * (duongKinh / 2) * 2;

  const resultElement = document.querySelector("#result-06");
  console.log("element", resultElement);
  resultElement.innerHTML =
    "Chu vi hinh tron la " + chuVi + " va dien tich hinh tron la " + dienTich;
}
function bai_08() {
  const resultElement = document.querySelector("#text8");
  let a = 10;
  resultElement.innerHTML = ++a + a + a++ + a + a;
  // 11 + 11 + 11 + 12 + 12
}
function bai_09() {
  console.log(0 || NaN || "Rikkei Academy" || null);
  console.log(null || NaN || false || null);
  console.log(undefined || 1 || 5 || null);
  console.log("" || null || 5 || NaN);
  console.log(1 || null || 12 || NaN);
}
function bai_10() {
  console.log(0 || NaN || "Rikkei Academy" || null);
  console.log(null || NaN || false || null);
  console.log(undefined || 1 || 5 || null);
  console.log("" || null || 5 || NaN);
  console.log(1 || null || 12 || NaN);
}
function color() {
  const color = prompt("Nhap mau ban muon hien thi");
  const content = prompt("Nhap noi dung ban muon hien thi");
  console.log(`%c ${content}`, `color: ${color}; font-size:30px`);
}
