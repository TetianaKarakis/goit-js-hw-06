const control = document.getElementById("font-size-control");
const text = document.getElementById("text");

control.addEventListener("input", () => {
  text.style.fontSize = control.value + 'px';
});