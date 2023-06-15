let string1 = parseInt(prompt("chuỗi thành số"));
let string2 = parseInt(prompt("chuỗi thành số"));
//prompt vốn là string
console.log(string1 + string2);

// --------------+prompt---chuyển thành NUMBER---------------
let physic = +prompt("so");
let math = +prompt("thành số");
let result = physic + math;
alert("retlus111 " + result);
// -----a++ -----++a
//++a [ trả về ngay kết quả]
//a++ [ gọi lần tiếp theo mới trả về kết quả]
let a = 10;
let b = 10;
b++;
console.log(b); //-> 11
console.log("a++", a++); //-> 10
console.log(++a); //-> 11

// ----------KIỂU BOOLEAN-------------
//truthy và falsy
/* những giá trị falsy
- 0
- ""
- null
- undefined
-NaN
- false
- -0
- 0n
- document.all
*/
const isZuongTu = true;
console.log("Tú có đẹp trai không", isZuongTu);
const isHacTai = false;
console.log("Tài có đẹp trai không", isHacTai);
// ----------{variable1, varibale2}----xem nhiều-----------
console.log("Kiểu dữ liệu là gì ", typeof isZuongTu, typeof isHacTai);
