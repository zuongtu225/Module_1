function currency() {
  let ndt = document.querySelector("#ndt");
  let vnd = document.querySelector("#vnd");
  let money = document.querySelector("#money").value;
  let content = document.querySelector(".result");
  console.log(ndt);
  if (ndt) {
    result = money * 3296.63;
    console.log(money);
    content.textContent = "Kết quả: " + result;
  } else if (vnd) {
    result = 3296.63 / money;
    console.log(money);
    content.textContent = "Kết quả: " + result;
  }
}
