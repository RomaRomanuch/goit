const categoriesRef = document.querySelector("#categories");
console.log(`в списке ${categoriesRef.children.length} категории`);

const itemRef = document.querySelectorAll(".item");
console.log(`Категория: ${itemRef[0].firstElementChild.textContent}`);
console.log(
  `Количество елементов: ${itemRef[0].lastElementChild.children.length}`,
);
console.log(`Категория: ${itemRef[1].firstElementChild.textContent}`);
console.log(
  `Количество елементов: ${itemRef[1].lastElementChild.children.length}`,
);
console.log(`Категория: ${itemRef[2].firstElementChild.textContent}`);
console.log(
  `Количество елементов: ${itemRef[2].lastElementChild.children.length}`,
);
