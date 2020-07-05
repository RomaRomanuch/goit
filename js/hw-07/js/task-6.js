const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  event.preventDefault();
  if (inputRef.value.length === 6) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
