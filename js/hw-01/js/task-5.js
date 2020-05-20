let price;
const message = prompt(`В какую страну хотите оформить доставку?`);



let country = message;

if (!country) {
  alert("Отменено пользователем");
} else {
  switch (country.toLowerCase()) {
    case "китай":
      price = 180;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`); 
      break;
    case "чили":
      price = 250;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`); 
      break;
    case "австралия":
      price = 170;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`); 
      break;
    case "индия":
      price = 80;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`); 
      break;
    case "ямайка":
      price = 120;
      console.log(`Доставка в ${country} будет стоить ${price} кредитов`); 
      break;
    default:
      alert(`В вашей стране, доставка недоступна`)
      break;
  }
}





