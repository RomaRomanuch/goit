const total = 100;
let ordered;

ordered = document.querySelector('input');

const userButtonEvent = document.querySelector('button');




userButtonEvent.addEventListener('click',() => {
  ordered = Number(ordered.value);
  const isProcessed = ordered <= total;

  isProcessed ?  console.log(`Заказ оформлен, с вами свяжется менеджер`) : console.log(`На складе недостаточно товаров!`);
});




// if (ordered <= total) {
//   console.log(`Заказ оформлен, с вами свяжется менеджер`);
  
// } else {
//   console.log(`На складе недостаточно товаров!`);



// const isProcessed = ordered <= total;

// isProcessed ?  console.log(`Заказ оформлен, с вами свяжется менеджер`) : console.log(`На складе недостаточно товаров!`);