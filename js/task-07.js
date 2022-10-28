const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

rangeRef.addEventListener('input', (event) => {
    console.log(rangeRef.value);
    console.log(textRef.style.fontSize)
    textRef.style.fontSize = rangeRef.value + 'px' });

