function divide() {
  let a = Number(prompt("Nhap a"));
  let b = Number(prompt("Nhap b"));
  let text = document.querySelector("#text1");
  if (a % b == 0) {
    text.textContent = "A chia het cho B";
  } else {
    text.textContent = "A khong chia het cho b";
  }
}
function numberLagest() {
  let text = document.querySelector("#text2");
  let a = Number(prompt("Nhap a"));
  let b = Number(prompt("Nhap b"));
  let c = Number(prompt("Nhap c"));
  if (a > b && a > c) {
    text.textContent = "A la so lon nhat";
  } else if (b > c) {
    text.textContent = "B la so lon nhat";
  } else {
    text.textContent = "C la so lon nhat";
  }
}

function sales() {
  let text = document.querySelector("#text3");
  let sale = Number(prompt("Nhập doanh thu của bạn"));
  if (sale > 20000000 && sale < 50000000) {
    let result = sale * 0.05; //5% tức là 5 / 100
    text.textContent = result;
  } else if (sale > 50000000 && sale < 100000000) {
    let result = sale * 0.07; //5% tức là 5 / 100
    text.textContent = result;
  } else if (sale > 100000000) {
    let result = sale * 0.15; //5% tức là 5 / 100
    text.textContent = result;
  }
}
