function handleDegree() {
  let C = Number(prompt("Nhập độ"));
  let text = document.querySelector("#text");
  if (C) {
    F = (9 * C) / 5 + 32;
    console.log(F);
    text.textContent = "Kết quả độ F là: " + F;
  } else {
    alert("Wrong");
  }
}
function On() {
  document.querySelector("#image").src = "./img/2.png";
}
function Off() {
  document.querySelector("#image").src = "./img/1.png";
}
function printWord() {
  var count = 0;
  var output = "";

  while (count < 1000) {
    output += "word<br>";
    count++;
  }

  document.getElementById("word").innerHTML = output;
}
