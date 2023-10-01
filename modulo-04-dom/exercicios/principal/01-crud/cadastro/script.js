const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const { email, password } = Object.fromEntries(formData);

  if (!email) {
    alert("O campo de email é obrigatório");
    return;
  }

  if (!password) {
    alert("O campo de senha é obrigatório");
    return;
  }

  const users = localStorage.getItem("m4-01-crud:users");
  let usersList = users ? JSON.parse(users) : [];

  const existentUser = usersList.find((user) => user.email === email);

  if (existentUser) {
    alert("Usuário já cadastrado");
    return;
  }

  usersList.push({ email, password });

  localStorage.setItem("m4-01-crud:users", JSON.stringify(usersList));

  localStorage.setItem("m4-01-crud:logged-user", JSON.stringify(email));

  window.location.href = "../index.html";
});
