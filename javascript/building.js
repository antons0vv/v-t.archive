document.addEventListener('DOMContentLoaded', function () {

    // Submiting form

    let nameInput = document.querySelector("input[name='name']");
    let emailInput = document.querySelector("input[name='email']");
    const subButton = document.getElementById("subButton");
    const registerForm = document.querySelector(".formReg");

    function toggleSubmitButton() {

        let name = nameInput.value;
        let email = emailInput.value;

        if (name.trim() !== "" && email.trim() !== "") {
            subButton.disabled = false;
            subButton.style.color = 'black';
            subButton.classList.add('enable')
        } else {
            subButton.disabled = true;
            subButton.classList.remove('enable')
            subButton.style.color = '#8C8C8C';
        }
    }

    document.querySelectorAll("input[name='name'], input[name='email']").forEach(function (element) {
        element.addEventListener("input", toggleSubmitButton);
    });

    toggleSubmitButton();

    function handleFormSubmit(event) {
        event.preventDefault()

        let email = emailInput.value;
        let name = nameInput.value.split(' ');
        let firstName = name[0];
        let SecondName = name[1];

        document.querySelector('.formReg div').style.display = 'none';
        document.querySelector('#successReg').style.display = 'block';

        document.querySelector('#successReg').innerHTML = ` ${firstName}, вы зарегистрированы! <br> Билеты отправили на почту ${email}`;
    }

    registerForm.addEventListener('submit', handleFormSubmit)

    // Flipping img

    const render = document.querySelectorAll('.render');

    function flipping(el) {
        let index = 100;
        el.addEventListener('click', function () {
            index--;
            el.style.zIndex = index;

        })
    }
    render.forEach(flipping);

    // Book

    const book = document.querySelector('.book');
    let counterBook = 0;

    book.addEventListener('click', () => {
        counterBook++
        counterBook = counterBook % 13;

        book.src = `./img/book${counterBook}.png`
    })
})