document.addEventListener('DOMContentLoaded', function () {

    //Objects counter 

    const buttonsBuy = document.querySelectorAll('.buttonBuy');

    buttonsBuy.forEach((button) => {
        button.addEventListener('click', () => {
            const parentDivBut = button.parentElement;
            const counter = parentDivBut.querySelector('.counter');

            const objectsNum = counter.querySelector('p');
            const plus = counter.querySelector('.plus');
            const minus = counter.querySelector('.minus');

            let countObjects = 1;

            button.style.display = 'none';
            counter.style.display = 'flex';

            plus.addEventListener('click', () => {
                countObjects++;
                objectsNum.innerHTML = `${countObjects}`;
            });

            minus.addEventListener('click', () => {
                if (countObjects >= 2) {
                    countObjects--;
                    objectsNum.innerHTML = `${countObjects}`;
                }
                else {
                    button.style.display = 'block';
                    counter.style.display = 'none';
                }
            });
        });
    });

    const allCards = document.querySelectorAll('.containerAllItems');
    const lastCard = document.querySelector('.containerAllItems:last-of-type');

    const setLastCardHeight = (height) => {
        lastCard.style.height = height;
    };

    allCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            if (card === lastCard) {
                setLastCardHeight('100%');
            } else {
                setLastCardHeight('30px');
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!Array.from(allCards).some(card => card.matches(':hover'))) {
                setLastCardHeight('100%');
            }
        });
    });


})