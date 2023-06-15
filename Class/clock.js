function clock() {
  const result = document.querySelector("#result1");
  // setInterval( function thực thi, 1000) --> setInterval KO DỪNG function sẽ thực thi sau 1000s
  setInterval(function () {
    result.innerHTML = new Date();
  }, 1000);
  // setTimeout (function) --> thực thi 1 lần sau 1000s
  setTimeout(function () {
    result.innerHTML = new Date();
  }, 1000);
}
//   ----------------
function clock2() {
  const number = document.querySelector("#number");
  const result = document.querySelector("#result2");
  const toltalSecond = minus * 60;
  setInterval(renderCountDown, 1000);
  function renderCountDown() {
    toltalSecond--;
    const minusRender = parseInt(toltalSecond / 60);
    // const secondRender = toltalSecond % 60;
    const secondRender = (toltalSecond / 60 - minusRender) * 60;
    //    toltalSecond / 60 để lấy lại phút
    result.innerHTML = minusRender + ":" + secondRender;
  }
}
