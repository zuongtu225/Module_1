function average() {
  let Math = Number(prompt("Nhập điểm Toán"));
  let Physic = Number(prompt("Nhập điểm Toán"));
  let Chemistry = Number(prompt("Nhập điểm Toán"));
  let result = document.querySelector("#result");
  let Average;
  Average = (Math + Physic + Chemistry) / 3;
  result.textContent = "Kết quả là:  " + Average + "  ✨";
}
function currency() {
  let vnd = 23000;
  let dollar = Number(prompt("Nhập tiền đô"));
  let result = dollar * vnd;
  let curren = document.querySelector("#curren");
  curren.textContent = result + "💸";
}
function largest() {
  let A = Number(prompt("Nhập một số"));
  let B = Number(prompt("Nhập một số"));
  let C = Number(prompt("Nhập một số"));
  let printMax = document.querySelector("#printMax");
  if (A > B && A > C) {
    printMax.textContent = A + "  là số lớn nhất ✨ ";
  } else if (A < B && B < C) {
    printMax.textContent = C + "  là số lớn nhất ✨ ";
  } else if (A < B && B > C) {
    printMax.textContent = B + "  là số lớn nhất  ✨";
  } else {
    printMax.textContent = " Nhập lại    ";
  }
}
// --------------------
function convertCurrency() {
  const amount = document.getElementById("amount").value;
  console.log("Kiểm tra amount", amount);

  const currency = document.getElementById("currency");

  console.log("Kiểm tra from currency", currency.value);

  const result = document.getElementById("result");

  if (currency.value == "USD") {
    // toLocaleString('en-GB) --> method format String
    result.value = (amount * 23000).toLocaleString("en-GB");
  } else {
    result.value = (amount / 23000).toFixed(2);
  }
}

function onChange() {
  const currency = document.getElementById("currency");

  const toCurrency = document.getElementById("to-currency");

  if (currency.value == "USD") {
    toCurrency.value = "VNĐ";
  } else {
    toCurrency.value = "USD";
  }
}
// -------------
function nLagest() {
  let number = Number(prompt("Nhập 1 số"));
}
