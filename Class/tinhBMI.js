function handleBMI() {
  let weight = +prompt("NHẬP CÂN NẶNG");
  let heighth = +prompt("NHẬP CHIỀU CAO");
  let bmi = weight / (heighth * 2);
  alert("CHỈ SỐ BMI CỦA YOU LÀ: " + bmi);
  if (bmi < 18.5) {
    alert("Nhẹ cân");
  } else if (bmi < 24.9) {
    alert("Cân nặng bình thường");
  } else if (bmi < 30) {
    alert("Thừa cân");
  } else if (bmi < 34.9) {
    alert("Béo phì độ I");
  } else if (bmi < 39.9) {
    alert("Béo phì độ II");
  } else {
    alert("Béo phì độ III");
  }
}
