document.addEventListener('DOMContentLoaded', function () {

    // Submiting form

    let nameInput = document.querySelector("input[name='name']");
    let emailInput = document.querySelector("input[name='email']");
    const subButton = document.getElementById("subButton");
    const registerForm = document.querySelector(".formReg");
    const tap = document.getElementById('tap_fx');

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
        tap.play();
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
    const paper = document.querySelector("#paperFx");
    const paperSounds = ['/fx/paper1.mp3', '/fx/paper2.mp3', '/fx/paper3.mp3']

    let pCounter = 0;
    function flipping(el) {
        let index = 100;
        el.addEventListener('click', function () {
            index--;
            el.style.zIndex = index;

            paper.src = paperSounds[pCounter];
            paper.play();
            pCounter++;
            pCounter = pCounter % paperSounds.length;
        })
    }
    render.forEach(flipping);

    // Book

    const book = document.querySelector('.book');
    const bookPaper = document.querySelector("#bookPaper");
    const bookSounds = ['/fx/paper2.mp3', '/fx/book.mp3', '/fx/paper3.mp3']

    let counterBook = 0;
    let pCounterBook = 0;

    book.addEventListener('click', () => {
        counterBook++
        counterBook = counterBook % 13;

        book.src = `./img/book${counterBook}.png`

        bookPaper.src = bookSounds[pCounterBook];
        bookPaper.play();
        pCounterBook++;
        pCounterBook = pCounterBook % bookSounds.length;
    })
})