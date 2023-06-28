const accounts = [];
// ________Register_____
function handleSubmit(event) {
  event.preventDefault(); // Ngăn chặn việc tải lại trang khi submit form

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const user = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  const checkvalidate = validateRegister(user); //validate(user) là một đối tượng msg error{}
  if (checkvalidate.isError == true) {
    //nếu CỜ HIỆU BÁO TRUE CÓ LỖI thì render()
    renderError(checkvalidate);
  } else {
    accounts.push(user);
  }

  console.log(accounts);
}

function renderError(error) {
  const email = document.getElementById("emailMSG");
  const password = document.getElementById("passwordMSG");
  const confirmMSG = document.getElementById("confirmMSG");

  email.innerHTML = error.emailMSG;
  password.innerHTML = error.passwordMSG;
  confirmMSG.innerHTML = error.confirmPasswordMSG;
}
function validateRegister(user) {
  let error = {
    isError: false, // phải cắm cờ chứ ko là không trỏ tới được
    emailMSG: "",
    passwordMSG: "",
    confirmPasswordMSG: "",
  };
  for (let i = 0; i < accounts.length; i++) {
    if (user.email == accounts[i].email) {
      error.emailMSG = "Email đã tồn tại";
      error.isError = true;
    }
  }

  const regxEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!user.email.match(regxEmail)) {
    error.emailMSG = "Email không đúng định dạng. Vui lòng nhập lại!!!";
    error.isError = true;
  }

  if (user.password.length < 8) {
    error.passwordMSG = "Mật khẩu phải có ít nhất 8 ký tự";
    error.isError = true;
  }

  if (user.password !== user.confirmPassword) {
    error.confirmPasswordMSG = "Mật khẩu không trùng khớp";
    error.isError = true;
  }

  return error;
}
// ________Login_____
function handleLogin(event) {
  event.preventDefault();
  const email = document.querySelector("#email-login").value;
  const password = document.querySelector("#password-login").value;
  let isUser = true;
  console.log(accounts);
  accounts.forEach((user, index) => {
    if (user.email == email && user.password == password) {
      console.log(user);
      window.location = "https://www.paypal.com/vn/home?locale.x=vi_VN";
    } else {
      alert("akak");
    }
  });
}
function validateLogin() {
  let error = {
    isError: false, // phải cắm cờ chứ ko là không trỏ tới được
    emailMSG: "",
    passwordMSG: "",
    confirmPasswordMSG: "",
  };
  for (let i = 0; i < accounts.length; i++) {
    if (user.email == accounts[i].email) {
      error.emailMSG = "Email đã tồn tại";
      error.isError = true;
    }
  }

  const regxEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!user.email.match(regxEmail)) {
    error.emailMSG = "Email không đúng định dạng. Vui lòng nhập lại!!!";
    error.isError = true;
  }

  if (user.password.length < 8) {
    error.passwordMSG = "Mật khẩu phải có ít nhất 8 ký tự";
    error.isError = true;
  }

  if (user.password !== user.confirmPassword) {
    error.confirmPasswordMSG = "Mật khẩu không trùng khớp";
    error.isError = true;
  }

  return error;
}
function renderErrorLogin(error) {
  const email = document.getElementById("emailMSG");
  const password = document.getElementById("passwordMSG");
  const confirmMSG = document.getElementById("confirmMSG");

  email.innerHTML = error.emailMSG;
  password.innerHTML = error.passwordMSG;
  confirmMSG.innerHTML = error.confirmPasswordMSG;
}
