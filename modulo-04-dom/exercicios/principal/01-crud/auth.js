const users = localStorage.getItem("m4-01-crud:users");
const loggedUser = localStorage.getItem("m4-01-crud:logged-user");

const usersList = users ? JSON.parse(users) : [];
const actualUser = loggedUser ? JSON.parse(loggedUser) : null;

if (!loggedUser) {
  window.location.href = "./login/index.html";
}

if (users.length < 1) {
  window.location.href = "./cadastro/index.html";
}

const existentUser = usersList.find((user) => user.email === actualUser);

if (!existentUser) {
  window.location.href = "./cadastro/index.html";
}