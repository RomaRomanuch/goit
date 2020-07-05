const inputRangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRangeRef.addEventListener("input", changeFontSize);

function changeFontSize() {
  return textRef.setAttribute("style", `font-size: ${inputRangeRef.value}px`);
}
