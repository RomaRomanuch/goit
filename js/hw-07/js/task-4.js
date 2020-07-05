const valueRef = document.querySelector("#value");
const decrementRef = document.querySelector("[data-action = 'decrement']");
const incrementRef = document.querySelector("[data-action = 'increment']");
// Add buton reset
const cont = document.querySelector("#counter");
const btnReset = document.createElement("button");
btnReset.classList.add("reset");
btnReset.textContent = "reset";
cont.appendChild(btnReset);

let counterValue = 0;

decrementRef.addEventListener("click", decrement);
incrementRef.addEventListener("click", increment);
btnReset.addEventListener("click", reset);
//functions
function increment() {
  counterValue += 1;
  return (valueRef.innerHTML = counterValue);
}

function decrement() {
  counterValue -= 1;
  return (valueRef.innerHTML = counterValue);
}

function reset() {
  counterValue = 0;
  return (valueRef.innerHTML = counterValue);
}
