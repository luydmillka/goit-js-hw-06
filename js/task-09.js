function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const currentColorNameRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');


btnRef.addEventListener('click', (event) => {
  const currentColor = getRandomHexColor()
  bodyRef.style.backgroundColor = currentColor;
  currentColorNameRef.textContent = currentColor;
})
