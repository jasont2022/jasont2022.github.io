const body = document.querySelector("body");
const button = document.querySelector(".button");

// an array of gradient color objects (select one by random)
const gradColors = [
  {
    degree: "90deg",
    left: "#ee9ca7",
    right: "#ffdde1",
  },
  {
    degree: "45deg",
    left: "#7ee8fa",
    right: "#eec0c6",
  },
  {
    degree: "-90deg",
    left: "#d99ec9",
    right: "#f6f0c4",
  },
  {
    degree: "-45deg",
    left: "#f67062",
    right: "#fc5296",
  },
  {
    degree: "90deg",
    left: "#e61d8c",
    right: "#c7e9fb",
  }
];

button.addEventListener("click", () => {
  const randIndex = Math.floor(Math.random() * gradColors.length);
  const randGradColor = gradColors[randIndex];
  const { degree, left, right } = randGradColor;
  body.style.background = `linear-gradient(${degree}, ${left}, ${right})`;
});
