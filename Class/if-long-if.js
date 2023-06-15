function gender() {
  let age = +prompt("NHẬP VÀO TUỔI");
  let gender = prompt("NHẬP VÀO GIỚI TÍNH CỦA YOU");

  if (age > 18) {
    if (gender == "nam") {
      alert("Bạn là người đàn ông lãng mạn");
    } else if (gender == "nu") {
      alert("Bạn là người phụ nữ quyến rũ");
    } else if (gender == "bede") {
      alert("Bạn là người có giới tính thứ ba");
    } else {
      alert("Chúng tôi vô cùng thương tiếc báo tin không biết");
    }
  } else {
    if (gender == "nam") {
      alert("Bạn là bé trai");
    } else if (gender == "nu") {
      alert("Bạn là bé gái");
    } else if (gender == "bede") {
      alert("Bạn là trẻ em có giới tính thứ ba");
    } else {
      alert("Chúng tôi vô cùng thương tiếc báo tin không biết");
    }
  }
}

// kiểm tra
function oddEven() {
  let number = +prompt("Nhập vào số muốn Check");
  if (number % 2 == 0) {
    if (number % 2 == 0) {
      alert(number + " là số chẵn chia hết cho 2");
    }
  } else {
    alert(number + " là số lẻ");
  }
}
//   if (number % 5 == 0) {
//     alert(number + " là số chẵn chia hết cho 5");
//   } else {
//     alert(number + " là số chẵn ko chia hết cho 5");
//   }
// } else {
//   alert(number + " là số lẻ");
// }
