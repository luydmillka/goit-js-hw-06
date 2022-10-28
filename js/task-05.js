const userNameEl = document.querySelector('#name-output');
const textInputEl = document.querySelector('#name-input');

textInputEl.addEventListener("input", (event) => {
    userNameEl.textContent = event.currentTarget.value})