const total = 100;
let ordered;


ordered = prompt("Сколько товаров желаете приобрести?")



const isProcessed = ordered <= total;

isProcessed ?  console.log(`Заказ оформлен, с вами свяжется менеджер`) : console.log(`На складе недостаточно товаров!`);