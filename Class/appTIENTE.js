function handleConvert() {
  let money = document.querySelector("#money").value;
  let select1 = document.querySelector("#select1").value;
  let select2 = document.querySelector("#select2").value;
  if (select1 == select2) {
    alert("Vui lòng chọn loại tiền tệ");
  }
  if (select1 == "a" && select2 == "b") {
    alert(money / 24000);
  }
}
