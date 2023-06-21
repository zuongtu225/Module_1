function ex1() {
  let text = document.querySelector("#text");
  let content = "";
  for (let i = 0; i < 10; i++) {
    content += " 5 x " + i + " = " + 5 * i + "<br/>";
  }
  text.innerHTML = content;
}
function ex2() {
  const text = document.querySelector("#text2");
  let content = "";
  for (let row = 1; row <= 9; row++) {
    content += "<tr>";
    for (let col = 1; col <= 9; col++) {
      content += `<td> ${col} x ${row} = ${row * col} </td> `;
    }
    content += "</tr>";
  }
  text.innerHTML = content;
}
function ex3() {
  const num = Number(prompt("Nhập số mu"));
  const text = document.querySelector("#text3");
  let count = 0;
  let result = "";
  while (count < num) {
    result += "<hr width=" + count + "%>";
    count++;
  }
  text.innerHTML = result;
}
