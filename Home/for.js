function run() {
  let k;
  for (k = 0; k < 100; k++) {
    if (k % 2 == 0) {
      console.log(k + " la so chan");
    } else {
      console.log(k + " la so le");
    }
  }
}

function run1() {
  let num = +prompt("Nhap di em");
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
function run2() {
  let count = 0; //Số lượng các số chia hết cho 7 đã tìm thấy
  let sum = 0; // Tổng các số chia hết cho 7
  let number = 0;
  for (let count = 0; count < 30; ) {
    if (number % 7 == 0) {
      count++;
      sum += number;
    }
    number++;
  }
  console.log(sum);
}
function run3() {
  let k;
  for (k = 1; k <= 100; k++) {
    let result;
    if (k % 3 == 0) {
      console.log("Fizz");
      result += "Fizz";
    }
    if (k % 5 == 0) {
      result += "Buzz";
      console.log("Buzz");
    } else {
      console.log(result ? result : k);
    }
  }
}
