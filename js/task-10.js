function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainerRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('#controls > input');
let amount = inputRef.addEventListener('blur', (event) => {
  amount = inputRef.value;
  console.log (amount)
});


createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);


function createBoxes() {
  let divRefs = [];
  let boxSize = 20;

  for (let i = 0; i < amount; i += 1) {
    const divRef = document.createElement('div');
    
    boxSize += 10;

    divRef.style.width = boxSize + 'px';
    divRef.style.height = boxSize + 'px';
    divRef.style.backgroundColor = getRandomHexColor();
    divRef.style.marginBottom = '10px';
    console.log(divRef)
    divRefs.push(divRef);
  }
  console.log(divRefs)

  boxesContainerRef.append(...divRefs)
}
function destroyBoxes() {
  boxesContainerRef.innerHTML = "";
  inputRef.value = "";
}


