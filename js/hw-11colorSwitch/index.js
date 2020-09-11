const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector("body");

startButton.addEventListener("click", activeButton);
stopButton.addEventListener("click", innactiveButton);

let timerId = null;

function changeColor() {
  const indexOfColors = randomIntegerFromInterval(0, colors.length);
  bodyRef.style.background = colors[indexOfColors];
}

function activeButton() {
  startButton.disabled = true;
  timerId = setInterval(changeColor, 1000);
}

function innactiveButton() {
  startButton.disabled = false;
  clearInterval(timerId);
}
