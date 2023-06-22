const products = ["Sony", "Samsung", "iPhone", "Macbook", "Dell"];
render(products);

function handleAdd() {
  const valueInput = document.querySelector("#add-input").value;
  const hollow = document.querySelector("#add-input");
  const thead = document.querySelector("thead");
  if (valueInput.length == 0) {
    alert("Vui lòng nhập sản phẩm");
    return;
  } else {
    products.push(valueInput);
  }
  hollow.value = "";
  console.log(products);
  const length = `
    <tr>
      <th>Product Name</th>
      <th></th>
      <th></th>
      <th class="colorLength">${products.length} products</th>
    </tr>
  `;
  thead.innerHTML = length;
  render(products);
}

function render(arr) {
  const tbody = document.querySelector("tbody");
  let content = "";
  for (let product of arr) {
    content += `
      <tr>
        <td>${product}</td>
        <td></td>
        <td><button onclick="handleEdit('${product}')">Edit</button></td>
        <td><button onclick="handleDelete('${product}')">Delete</button></td>
      </tr>
    `;
  }
  tbody.innerHTML = content;
}

function handleDelete(product) {
  const index = products.indexOf(product);
  if (index !== -1) {
    products.splice(index, 1);
    render(products);
  }
}

function handleEdit(product) {
  const setBTN = document.querySelector("#handleUpdate");
  //setBTN để set function cho nút button
  const newInfo = document.querySelector("#textUpdate");
  //newinfo để trỏ tới ô input cần dán giá trị lên

  const formEdit = document.querySelector("#form-edit");
  formEdit.style.display = "block";

  newInfo.value = product;
  //newInfo.value  để in thèn product lên ô input

  setBTN.setAttribute("onclick", `handleUpdate('${product}')`);
  //setAtribute để set thuộc tính cho element được chọn
}

function handleUpdate(product) {
  console.log(77, product);
  const infoUpdate = document.querySelector("#textUpdate").value;
  const hideFormUpdate = document.querySelector("#form-edit");
  hideFormUpdate.style.display = "none";
  const hollow = document.querySelector("#textUpdate");

  const index = products.indexOf(product);
  //Hàm indexOf() trả về chỉ số của item trong arr, hoặc trả về -1 nếu item không được tìm thấy trong arr.
  if (infoUpdate.length == 0) {
    alert("Vui lòng nhập sản phẩm");
  } else {
    products[index] = infoUpdate;
  }
  hollow.value = "";
  render(products);
}

function search() {
  let textSearch = document.querySelector("#ip-search").value;
  let filter2 = products.filter((item) =>
    item.toLowerCase().includes(textSearch.toLowerCase())
  );
  if (textSearch.length == 0) {
    render(products); //nếu không search thì RENDER MẢNG CŨ
  } else {
    render(filter2); //nếu search thì RENDER MẢNG MỚI
  }
}
