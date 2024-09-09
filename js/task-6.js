function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

const destroyBoxes = () => {
  [...boxes.children].forEach((child) => child.remove());
};

const createBoxes = (amount) => {
  destroyBoxes();

  let boxSize = 30;
  const newBoxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    boxSize += 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box);
  }
  const fragment = document.createDocumentFragment();
  fragment.append(...newBoxes);

  boxes.prepend(fragment);
};

createButton.addEventListener("click", () => {
  const input = document.querySelector("input");
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});
destroyButton.addEventListener("click", destroyBoxes);
