const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

ingredients.forEach((item, i) => {
  const createdItem = document.createElement("li");
  createdItem.textContent = ingredients[i];
  ingredientsRef.appendChild(createdItem);
});
