const listPlayer = [
  {
    id: 1,
    name: "Vương Đình Long",
    point: 9,
  },
  {
    id: 2,
    name: "Vương Tú",
    point: 1,
  },
  {
    id: 3,
    name: "Roschill",
    point: 7,
  },
  {
    id: 4,
    name: "Mercy",
    point: 10,
  },
];
const add = document.getElementById("add");
add.addEventListener("click", () => {
  const player = document.querySelector("#add-player").value;
  const newPlayer = {
    id: listPlayer.length + 1,
    name: player,
    point: "",
  };
  listPlayer.push(newPlayer);
  render(listPlayer);
});
render(listPlayer);
function render(data) {
  const mid = document.querySelector(".mid-container");
  let content = "";
  data.forEach((player, index) => {
    content += `
    <div class="mid">
    <div class="mid-left">
      <i class="bx bx-x"></i>
      <i class="bx bx-crown"></i>
      <p>${player.name}</p>
    </div>
    <div class="mid-right">
      <button id="minus" onclick="handleMinus(${player.id})">-</button>
      <input type="text" id="point" value="${player.point}" />
      <button id="plus"  onclick="handlePlus(${player.id})">+</button>
    </div>
  </div>`;
  });
  mid.innerHTML = content;
  //in số lượng người chơi
  const player = document.querySelector("#player");
  let length = listPlayer.length;
  player.innerHTML = "PLayer:" + " " + length;
  //in point điểm
  const printPoint = document.querySelector("#point-top");
  let point = null;
  data.forEach((player) => {
    point += player.point;
  });
  printPoint.innerHTML = "Point: " + point;
  //render màu nhà vô địch
  champion(listPlayer);
}
function handleMinus(id) {
  listPlayer.forEach((player, index) => {
    if (id === player.id) {
      if (player.point > 0 && player.point <= 10) {
        player.point--;
      }
    }
  });
  render(listPlayer);
}
function handlePlus(id) {
  listPlayer.forEach((player, index) => {
    if (id === player.id) {
      if (player.point >= 0 && player.point < 10) {
        player.point++;
      }
    }
  });
  render(listPlayer);
}
//______champion____

function champion(data) {
  let max = data[0].point; // Giả sử điểm của người chơi đầu tiên là điểm cao nhất
  let maxIndex = 0; // Lưu chỉ số của người chơi điểm cao nhất
  //_____________________________________________________________
  // Tìm người chơi điểm cao nhất và chỉ số của họ
  data.forEach((player, index) => {
    if (player.point > max) {
      max = player.point; //Gán MAX là điểm cao hơn thèn vị trí 0
      maxIndex = index;
    }
  });
  // Tô màu cho người chơi điểm cao nhất
  const crownIcons = document.querySelectorAll(".bx-crown");
  crownIcons.forEach((crown, index) => {
    if (maxIndex == index) {
      crown.style.backgroundColor = "yellow";
    }
  });
}
//tạo đồng hồ đếm

const countPrint = document.querySelector("#time-count");

const start = document.getElementById("start");
const reset = document.getElementById("reset");

//format time
function fomartTime(number) {
  return number.toString().padStart(2, "0");
}
let intervalID; //đặt ở ngoài cho thèn reset ké nữa
start.addEventListener("click", () => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  intervalID = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
    const showTime =
      fomartTime(hours) +
      " : " +
      fomartTime(minutes) +
      " : " +
      fomartTime(seconds);
    countPrint.textContent = showTime;
  }, 1000);

  //intervalID là số ID của hàm setInterval trả về để khi clear mới biết clear thèn nào
});
reset.addEventListener("click", () => {
  // giới hạn time
  clearInterval(intervalID);
  countPrint.textContent = "00 : 00 : 00";
});
//
function get() {
  console.log(1);
  console.log(2);
}
get();

const x = 7 % 2;
const y = x ? "Two" : "One";
console.log(y);
let arr = [1, 2, 3, 4];
arr.length = 0;
console.log(345, arr);

var atsrt = 1;
function end() {
  var edn1 = 10;
}
end();
console.log(edn1, 9);

for (i = 0; i < 5; i++) {
  if (i < 3) {
    i++;
  } else {
    ++i;
  }
}
console.log("i", i);

var a = ["d", "ad", "b"];
a[100] = "fox";
console.log(a.length);
