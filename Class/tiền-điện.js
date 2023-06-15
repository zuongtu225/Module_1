function eletric() {
  const data = document.querySelector("#eletric").value;
  let money;
  const rank_1 = 50 * 100;
  const rank_2 = rank_1 + 50 * 1800;
  /*  rank_1 là kết quả của 50* 100;  50 == rank_2; 1800 là chi phí cho rank_2 */
  const rank_3 = rank_2 + 100 * 1900;
  const rank_4 = rank_3 + 100 * 2000;
  const rank_5 = rank_4 + 100 * 2200;
  if (data < 0) {
    alert("Không nhập số âm");
    return; //chỉ sử dụng bên trong function --> Kết thúc function, trả về kết quả - nếu không return sẽ trả về kết quả âm -100
  }
  //validate
  if (isNaN(data)) {
    alert("Nhap so di em iu");
    return;
  }
  if (data <= 50) {
    money = data * 1700;
  } else if (data <= 100) {
    money = (data - 50) * 1800 + rank_1;
    // data = 70 => 70 - 50 = 20 (cục rank 2) => + rank_1 (phải cộng tiền rnak1 mới lên rank 2)
  } else if (data <= 200) {
    money = (data - 100) * 1900 + rank_2;
  } else if (data <= 300) {
    money = (data - 200) * 2000 + rank_3;
  } else if (data <= 400) {
    money = (data - 300) * 2200 + rank_4;
  } else {
    money = (data - 400) * 2500 + rank_5;
  }
  let text = document.querySelector("#text100");
  text.innerHTML = money;
}
