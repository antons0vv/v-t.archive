document.addEventListener('DOMContentLoaded', function () {

    //Objects counter 

    const buttonsBuy = document.querySelectorAll('.buttonBuy');
    const tap = document.getElementById('tap_fx');

    buttonsBuy.forEach((button) => {
        button.addEventListener('click', () => {
            const parentDivBut = button.parentElement;
            const counter = parentDivBut.querySelector('.counter');

            const objectsNum = counter.querySelector('p');
            const plus = counter.querySelector('.plus');
            const minus = counter.querySelector('.minus');

            tap.play();

            let countObjects = 1;

            button.style.display = 'none';
            counter.style.display = 'flex';

            plus.addEventListener('click', () => {
                tap.play();
                countObjects++;
                objectsNum.innerHTML = `${countObjects}`;
            });

            minus.addEventListener('click', () => {
                tap.play();
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

    // Last object proper height

    const allCards = document.querySelectorAll('.containerAllItems');
    const lastCard = document.querySelector('.containerAllItems:last-of-type');

    const paper = document.querySelector("#paperFx");
    const paperSounds = ['fx/paper1.mp3', 'fx/paper2.mp3', 'fx/paper3.mp3']
    let pCounter = 0;
    const setLastCardHeight = (height) => {
        lastCard.style.height = height;
    };

    allCards.forEach(card => {
        card.addEventListener('mouseenter', () => {

            paper.src = paperSounds[pCounter];
            paper.play();
            pCounter++;
            pCounter = pCounter % paperSounds.length;

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