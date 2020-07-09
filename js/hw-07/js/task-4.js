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
  valueRef.innerHTML = counterValue += 1;
}

function decrement() {
  valueRef.innerHTML = counterValue -= 1;
}

function reset() {
  valueRef.innerHTML = counterValue = 0;
}
