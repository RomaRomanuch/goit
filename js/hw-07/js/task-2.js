const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientList = ingredients.map((item, i) => {
  const createdItem = document.createElement("li");
  createdItem.textContent = ingredients[i];
  return createdItem;
});

ingredientsRef.append(...ingredientList);
