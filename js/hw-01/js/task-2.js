const total = 100;
const ordered = 50;


// if (ordered <= total) {
//   console.log(`Заказ оформлен, с вами свяжется менеджер`);
  
// } else {
//   console.log(`На складе недостаточно товаров!`);

const isProcessed = ordered <= total;

isProcessed ?  console.log(`Заказ оформлен, с вами свяжется менеджер`) : console.log(`На складе недостаточно товаров!`);