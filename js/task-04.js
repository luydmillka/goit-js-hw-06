const buttonDecrementEl = document.querySelector('[data-action ="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action ="increment"]');
const buttonValueEl = document.querySelector('#value');
let counterValue = 0;



buttonDecrementEl.addEventListener('click', () => {
    counterValue -= 1;
    buttonValueEl.textContent = counterValue
})
buttonIncrementEl.addEventListener('click', () => {
    counterValue += 1;
    buttonValueEl.textContent = counterValue
})