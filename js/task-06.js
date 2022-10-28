const textInputEl = document.querySelector('#validation-input')


const onBlurInput = function() {
    if (textInputEl.value.length == textInputEl.dataset.length) {
        textInputEl.classList.remove('invalid')
        textInputEl.classList.add('valid')
        console.log(textInputEl.value.length)
    } else {
        textInputEl.classList.remove('valid')
        textInputEl.classList.add('invalid')
        console.log(textInputEl.value.length)
        alert('Please enter 6 symbols')
    }
}
textInputEl.addEventListener("blur", onBlurInput)
