const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let userInput = prompt(`Какое количество дроидов вы желаете приобрести?`);


if (userInput === null) {
  console.log("Отменено пользователем");
}else {
  userInput = Number(userInput);
  totalPrice = userInput * pricePerDroid;
}


if (credits >= totalPrice) {
  console.log(`Вы купили ${userInput} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
}else {
  console.log(`Недостаточно средств на счету`);
}


