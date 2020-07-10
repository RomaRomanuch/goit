import { images } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const itemImage = document.createElement("img");
const createLink = document.createElement("a");
const modalRef = document.querySelector(".lightbox");
const modalImg = document.querySelector(".lightbox__image");
const modalButtonClose = document.querySelector(".lightbox__button");

images.forEach(image => {
  createLink.href = image.original;
  itemImage.src = image.preview;
  itemImage.alt = image.description;
  itemImage.dataset.source = image.original;

  galleryRef.insertAdjacentHTML(
    "beforeend",
    `<li class = 'gallery__item'><a onclick = 'return false' href = '${createLink.href}' class = 'gallery__link'><img data-source = '${itemImage.dataset.source}' class = 'gallery__image' src = '${itemImage.src}' alt = '${itemImage.alt}'></a></li>`,
  );
});

galleryRef.addEventListener("click", onImgClick);

function onImgClick(event) {
  if (event.target.nodeName === "IMG") {
    modalRef.classList.add("is-open");
    modalImg.src = event.target.dataset.source;
  }
}

modalButtonClose.addEventListener("click", () => {
  modalRef.classList.remove("is-open");
  modalImg.src = "";
});
