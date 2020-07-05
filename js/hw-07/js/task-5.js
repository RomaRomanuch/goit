const inputRef = document.querySelector("#name-input");
const greetingRef = document.querySelector("#name-output");

inputRef.addEventListener("input", greetName);

function greetName() {
  return (greetingRef.innerHTML = inputRef.value);
}
