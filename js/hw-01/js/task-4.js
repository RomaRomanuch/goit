const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let numberOfDroids;
let message;

const userInput = prompt(`Какое количество дроидов вы желаете приобрести?`);

message = userInput;

if (message === null) {
  console.log("Отменено пользователем");
}

if (message == 0 ) {
  console.log("Количество приобретаемых дроидов не может быть \"0\"");
}

message = Number(message);
 
if (message >= 1) {
  numberOfDroids = message;
  totalPrice = numberOfDroids * pricePerDroid;
}

if (credits >= totalPrice) {
  console.log(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
}

if (totalPrice > credits) {
  console.log(`Недостаточно средств на счету`);
}


