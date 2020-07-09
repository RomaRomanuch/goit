const categoriesRef = document.querySelector("#categories");
console.log(`в списке ${categoriesRef.children.length} категории`);

const itemRef = document.querySelectorAll(".item");

itemRef.forEach((item, i) => {
  console.log(`Категория: ${itemRef[i].firstElementChild.textContent}`);
  console.log(
    `Количество елементов: ${itemRef[i].lastElementChild.children.length}`,
  );
});
