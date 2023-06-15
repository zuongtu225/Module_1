function bmi() {
  let weight = +prompt("Nhập cân nặng "); //statistics
  let height = +prompt("Nhập chiều cao "); //statistics
  let text = document.querySelector("#text");
  let statistics = weight / (height * 2).toFixed(1);
  switch (statistics) {
    case statistics <= 16:
      console.log("ê");
      text.innerHTML = "Gầy độ III";
      break;
    case statistics <= 17:
      console.log("ê");
      text.innerHTML = "Gầy độ II";
      break;
    case statistics <= 17 && statistics < 18:
      text.innerHTML = "Gầy độ I";
      console.log("ê");
      break;

    case statistics >= 18 && statistics < 25:
      console.log("ê");
      text.innerHTML = "Bình thường";
      break;

    case statistics >= 25 && statistics < 30:
      console.log("ê");
      text.innerHTML = "Thừa cân";
      break;

    case statistics >= 30 && statistics < 35:
      console.log("ê");
      text.innerHTML = " Béo phì độ 1";
      break;

    case statistics >= 35 && statistics < 40:
      console.log("ê");
      text.innerHTML = "Béo phì độ II";
      break;

    case statistics > 40:
      console.log("ê");
      text.innerHTML = " Béo phì độ III";
      break;
    default:
      text.innerHTML = "Nhập lại dùm cái cha nội";
  }
}
