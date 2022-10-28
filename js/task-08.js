const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    // document.querySelectorAll('input').forEach(input => {
    //     if (input.value === '') {
    //         alert('Заполните все поля');
    //         return;
    //     }
    // })

     const { email, password } = event.currentTarget.elements;
         if (email.value === '' || password.value === '') {
        alert('Не все поля заполнены');
        return;
    }

        const userFormData = {};
        userFormData.email = event.currentTarget.elements.email.value;
        userFormData.password = event.currentTarget.elements.password.value;
        console.log(userFormData)
    
        formRef.reset();

    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) =>
    //     console.log(`users ${name}: ${value}`))
}



