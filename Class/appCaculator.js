var a = document.querySelector("#a").value;
var b = document.querySelector("#b").value;
let text = document.querySelector("#text");
function Addition() {
  let result = a + b;
  text.textContent = result;
}
function Subtraction() {
  let result = a - b;
  text.textContent = result;
}
function Multiplication() {
  let result = a * b;
  text.textContent = result;
}
function Division() {
  let result = a / b;
  text.textContent = result;
}
