let input;
const numbers = [];
let total = 0;

do {

  input = prompt('Введите число');
  if(input !== null) {
   input = Number(input);
   if(Number.isNaN(input)) {
     alert(`Было введено не число, попробуйте еще раз!`);
     continue;
   }
  numbers.push(input);
  }
} while (input !== null);

if(numbers.length == 0){
  alert('нужно ввести число');
}else for(let number of numbers) {
  total += number;
}



console.log(`Общая сумма равна ${total}`);







