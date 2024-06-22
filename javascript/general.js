document.addEventListener('DOMContentLoaded', function () {
    // Animated favicon
    const favicon = document.querySelector("link[rel~='icon']");

    let favCounter = 0;

    const favicons = ['img/favicon-1.svg', 'img/favicon-2.svg', 'img/favicon-3.svg', 'img/favicon-4.svg']

    setInterval(() => {
        favicon.href = favicons[favCounter];
        favCounter++;
        favCounter = favCounter % favicons.length;
    }, 500)


    // Draggable items

    let highestZIndex = 1;

    function makeDraggable(element, stackSelector, cursor) {
        let isMouseDown = false;
        let offsetX, offsetY;

        element.addEventListener('mousedown', function (e) {
            isMouseDown = true;
            offsetX = e.clientX - element.getBoundingClientRect().left;
            offsetY = e.clientY - element.getBoundingClientRect().top;

            if (cursor) {
                element.style.cursor = cursor;
            }


            highestZIndex++;
            element.style.zIndex = highestZIndex;
        });

        document.addEventListener('mouseup', function () {
            isMouseDown = false;
            if (cursor) {
                element.style.cursor = "default";
            }
        });

        document.addEventListener('mousemove', function (e) {
            if (!isMouseDown) return;
            element.style.position = "absolute";
            element.style.left = (e.clientX - offsetX) + "px";
            element.style.top = (e.clientY - offsetY) + "px";
        });
    }

    document.querySelectorAll(".draggable").forEach(el => makeDraggable(el, ".draggable", "grabbing"));

    // Random rotating

    const paper = document.querySelectorAll('.paper');
    const nameObject = document.querySelectorAll('.nameObject');
    const book = document.querySelectorAll('.book');

    function randonAngle(item) {
        item.forEach(el => {
            let rAngle = (Math.random() * 5) - 2.5;
            el.style.transform = `rotate(${rAngle}deg)`;
        });
    }

    randonAngle(paper);
    randonAngle(nameObject);
    randonAngle(book);

    function getRandomAngle() {
        return Math.floor(Math.random() * 16) - 8;
    }


    function addHoverEffect(className) {
        const elements = document.querySelectorAll(`.${className}`);

        function handleMouseOver() {
            elements.forEach(el => {
                let angle = getRandomAngle();
                el.style.transform = `rotate(${angle}deg)`;
            });
        }

        function handleMouseOut() {
            elements.forEach(el => {
                el.style.transform = 'rotate(0deg)';
            });
        }

        elements.forEach(el => {
            el.addEventListener('mouseover', handleMouseOver);
            el.addEventListener('mouseout', handleMouseOut);
        });
    }

    addHoverEffect('poster');
    addHoverEffect('render');

    // Transition between pages

    function goToPageMain() {
        const pageThis = document.querySelector("body");
        pageThis.style.animation = 'slideOut 0.6s forwards';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 600);
    }

    document.getElementById('backArrow').addEventListener('click', goToPageMain);
})  