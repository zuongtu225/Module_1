function handleIf() {
  //Lần 1 if
  const a = 10;
  const b = 20;
  const c = 30;
  if (a < b) {
    //max = b;
    if (b < c) {
      max = c;
      console.log("Kết quả số lớn nhất là ", c);
    } else {
      console.log("Kết quả số lớn nhất là ", b);
    }
  } else {
    if (a < c) {
      max = c;
    }
  }

  // Lần 2
  let max = a;
  if (max < b) {
    max = b;
    if (max < c) {
      max = c;
    }
  } else {
    //max is still a
    if (max < c) {
      max = c;
    }
  }
}
