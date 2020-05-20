
let total = 0;

do {
  const userInput = prompt("Введите число");
   let numberInput = userInput;

  if (numberInput === null) {
    alert(`Общая сумма чисел, равна ${total}`);
    break;
  }

  numberInput = Number(numberInput);

  const notANumber = Number.isNaN(numberInput);

  if (notANumber) {
    alert(`Было введено не число, попробуйте еще раз!`);
    continue;
  }
  total += numberInput;

} while (true);


