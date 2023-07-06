const listTodo = [
  {
    id: 1,
    content: "go to the office",
    status: false,
  },
  {
    id: 2,
    content: "go to the supermarket",
    status: false,
  },
  {
    id: 3,
    content: "go to the hotel",
    status: false,
  },
  {
    id: 4,
    content: "go to the beach",
    status: false,
  },
];

renderData(listTodo);
function renderData(data) {
  $("tbody").html();
  let contentHTML = "";
  data.forEach((todo, index) => {
    contentHTML += `<tr>
    <td>${index + 1}</td>
    <td>${todo.content}</td>
    <td>${todo.status}</td>
    <td>
      <button onclick="handleEdit(${todo.id})" class="btn-edit btn">EDIT</button
      ><button onclick="handleEdit(${
        todo.id
      })" class="btn-delete btn">DELETE</button
      ><button onclick="handleEdit(${
        todo.id
      })" class="btn-finished btn">FINISHED</button>
    </td>
  </tr>
    `;
  });
  $("tbody").html(contentHTML);
}

//Thêm
$("#btn-add").click(() => {
  //Tạo sự kiện click
  const task = $("#add-task").val();
  const newTask = {
    id: listTodo.length + 1, //TỰ ĐỘNG THÊM id
    content: task,
    status: false,
  };
  listTodo.push(newTask);
  renderData(listTodo);
});
//Sửa
function handleEdit(id) {
  const todo = listTodo.find((todo) => todo.id == id);
  $("#add-task").val(todo.content); //gán value
}
