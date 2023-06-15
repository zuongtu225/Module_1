function luckyNumber() {
  let number = +prompt("Nhập vào xem có trúng 1 triệu đô hay không");
  let text = document.querySelector("#text");
  switch (number) {
    case 1:
      text.textContent = "Chúc bạn may mắn lần sau";
      break;
    case 2:
      text.textContent = "Chúc bạn may mắn lần sau";
      break;
    case 3:
      text.textContent = "Chúc bạn may mắn lần sau";
      break;
    case 4:
      text.textContent = "Chúc bạn may mắn lần sau";
      break;
    case 5:
      text.textContent = "Chúc bạn may mắn lần sau";
      break;
    case 6:
      text.textContent = "CHÚC MỪNG BẠN ĐÃ TRÚNG SỐ ĐỘC ĐẮC 🧨✨";
    default:
      "Nhập lại";
  }
}
