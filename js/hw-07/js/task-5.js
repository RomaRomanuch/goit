const inputRef = document.querySelector("#name-input");
const greetingRef = document.querySelector("#name-output");

inputRef.addEventListener("input", greetName);
const outputOriginContent = greetingRef.textContent;

function greetName() {
  greetingRef.innerHTML = inputRef.value;
  greetingRef.textContent === ""
    ? (greetingRef.innerHTML = outputOriginContent)
    : "";
}
