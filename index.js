function ex1(number) {
  return number * number;
}
var result = ex1(5);
console.log("Bình phương của số 5 là: " + result);
// ---
function ex2(radius) {
  return Math.PI * radius * radius;
}

function ex2(radius) {
  return 2 * Math.PI * radius;
}

// Gọi hàm tính diện tích và chu vi với bán kính là 3
var area = ex2(3);
var perimeter = calculatePerimeter(3);

console.log("Diện tích hình tròn là: " + area);
console.log("Chu vi hình tròn là: " + perimeter);
