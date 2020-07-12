const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");
const result = [];
ingredients.forEach((item, i) => {
  const createdItem = document.createElement("li");
  createdItem.textContent = ingredients[i];
  result.push(createdItem);
});

ingredientsRef.append(...result);
