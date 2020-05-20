const ADMIN_PASSWORD = "jqueryismyjam";
let message; 
const input = prompt("Введите пароль");
message = input;

if (message === null) {
  message = "Отменено пользователем";
} else if (message === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
