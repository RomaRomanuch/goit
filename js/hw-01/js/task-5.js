const userInput = prompt(`В какую страну хотите оформить доставку?`);



if (userInput === null) {
  alert("Отменено пользователем");
} else {
  switch (userInput.toLowerCase()) {
    case "китай":
      console.log(`Доставка в Китай будет стоить 180 кредитов`);  
      break;
    case "чили":
      console.log(`Доставка в Чили будет стоить 250 кредитов`); 
      break;
    case "австралия":
      console.log(`Доставка в Австралию будет стоить 170 кредитов`); 
      break;
    case "индия":
      console.log(`Доставка в Индию будет стоить 80 кредитов`); 
      break;
    case "ямайка":
      console.log(`Доставка в Ямайку будет стоить 120 кредитов`); 
      break;
    default:
      alert(`В вашей стране, доставка недоступна`)
      break;
  }
}






