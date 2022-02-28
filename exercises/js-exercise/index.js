
const body = document.body;
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  body.classList.toggle("gradient");
  button.classList.toggle("gradientOn");
});
