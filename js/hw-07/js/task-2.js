const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");
const createdItem = document.createElement("li");

createdItem.textContent = ingredients[0];

const a = ingredients.forEach(item => {
  const clonedElement = createdItem.cloneNode(true);
  clonedElement.textContent = item;
  ingredientsRef.append(clonedElement);
});
