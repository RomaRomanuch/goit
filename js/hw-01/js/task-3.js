const ADMIN_PASSWORD = "jqueryismyjam";
let message;

message = prompt("Введите пароль");

console.log(message);

if (message === null) {
  message = "Отменено пользователем";
  alert(message);
} else if (message === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
  alert(message);
} else {
  message = "Доступ запрещен, неверный пароль!";
  alert(message);
}

