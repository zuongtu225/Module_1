// ________LOCAL STORAGE_________

const AccountsApple = JSON.parse(localStorage.getItem("AccountsApple")) || [];
//tạo 1 mảng hứng mảng  lấy từ local về  || hoặc return mảng rỗng

const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userApple = {
    email: email,
    password: password,
  };
  AccountsApple.push(userApple);
  localStorage.setItem("AccountsApple", JSON.stringify(AccountsApple));
});

const deleteKey = document.querySelector(".deleteKey"); //xóa key
deleteKey.addEventListener("click", (e) => {
  e.preventDefault();
  let key = prompt("Nhập key");
  console.log(key);
  console.log(localStorage.getItem(key));
  localStorage.removeItem(key);
});
const deleteAllkey = document.querySelector(".deleteAllkey"); //xóa all key
deleteAllkey.addEventListener("click", (e) => {
  e.preventDefault();
  const isDelete = confirm("Xóa thật á ? ");
  if (isDelete) {
  }
  localStorage.clear();
});
//_________LOG IN ___________________
const formLogin = document.getElementById("form-login");
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  AccountsApple.forEach((item) => {
    if (item.email == email && item.password == password) {
      alert("Đăng nhập thành công");
      window.location =
        "https://techcombank.com/khach-hang-ca-nhan/chi-tieu/tai-khoan/tai-khoan-thanh-toan-Techcombank?utm_source=SEM&utm_medium=CPC&utm_campaign=Casa.Ekyc.Dec22.SEM.CPC.N_InMAF.PB_DangKyTaiKhoan_Ex&utm_term=techcombank&utm_content=19106709264&gclid=CjwKCAjw44mlBhAQEiwAqP3eVgfVM6QFbqyy0mfm0OAHf2KAxNfPHK40nnbro8Fqz1RQebtncrXbCRoCnWwQAvD_BwE  ";
    }
  });
});
// ● Cookie: Có gửi dữ liệu lên server, có thời gian lưu trữ.

// ● LocalStorage: Không gửi dữ liệu lên server, thời gian lưu trữ vô hạn.

// ● SessionStorage: Không gửi dữ liệu lên server, dữ liệu bị mất khi đóng trình duyệt.
