// local
const listFeedBackLocal =
  JSON.parse(localStorage.getItem("listFeedBack")) || [];
//first array_________
const listFeedBack = [
  {
    id: 1,
    mark: 8,
    feedback: "Thật ra anh chỉ muốn ta tương tác ",
  },
  {
    id: 2,
    mark: 7,
    feedback: "Không chịu ngủ anh như Sài Gòn (Sài Gòn)",
  },
];

localStorage.setItem("listFeedBack", JSON.stringify(listFeedBack));

render(listFeedBackLocal);
function render(data) {
  const render = document.querySelector(".render");
  let content = "";
  data.forEach((item, index) => {
    content += `<div class="item">
        <div class="mark-notify">
        <p id="mark-item">${item.mark}</p>
        </div>
        <p>${item.feedback}  </p>
        <div class="icon">
        <i class="bx bx-message-x"></i>
        <i class="bx bx-edit-alt"></i>
        </div>
        </div>`;
  });
  render.innerHTML = content;
}
//_____ADD___________
let markInput = "";
const btnAdd = document.querySelector("#btn-add");
btnAdd.addEventListener("click", () => {
  const feedbackInput = document.getElementById("add-review").value;
  const mark = markInput;
  const newFeedBack = {
    id: listFeedBack.length + 1,
    mark: mark,
    feedback: feedbackInput,
  };
  listFeedBack.push(newFeedBack);
  localStorage.setItem("listFeedBack", JSON.stringify(listFeedBack));
  render(listFeedBack);
});

// lấy ra thằng cha của mấy thèn input
const inputs = document.querySelector(".list-bull");

//lấy điểm bằng Event delegation
inputs.addEventListener("click", (event) => {
  console.log("event ===>", event.target.value);
  markInput = event.target.value;
});

//Click các ô input có active và có màu
const inputMarks = document.querySelectorAll(".list-bull .mark");
inputMarks.forEach((item) => {
  item.addEventListener("click", () => {
    //Gỡ bỏ tất cả class là active trong input
    const inputBefore = document.querySelector(".list-bull .active");
    //khi click có active mới xóa active cũ
    if (inputBefore?.value !== item.value) {
      inputBefore?.classList.remove("active");
    }
    item.classList.toggle("active");
  });
});

//_______THAM KHẢO_________________
// inputs.forEach((input) => {
//   input.addEventListener("click", function (event) {
//     valuex = event.target.value;
//     if (selectedInput === null) {
//       selectedInput.classList.remove("active");
//     }
//     selectedInput = this;
//     selectedInput.classList.add("active");
//   });
// });
