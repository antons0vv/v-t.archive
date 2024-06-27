document.addEventListener('DOMContentLoaded', function () {

    // Img above

    const boardCard = document.getElementById('boardCard');
    const buildingCard = document.getElementById('buildingCard');
    const aboutCard = document.getElementById('paperAbout');
    const objectsCard = document.getElementById('objectsCard');
    const calendarCard = document.getElementById('calendarCard');

    const patternImg = document.getElementById('pattern');
    const buildingImg = document.getElementById('building');
    const calendarImg = document.getElementById('poster');
    const objectsImg = document.getElementById('merch');

    function imgAbove(el, obj) {
        el.addEventListener('mouseenter', () => {
            obj.style.display = "block";
        })
        el.addEventListener('mouseleave', () => {
            obj.style.display = "none";
        })
    }

    imgAbove(boardCard, patternImg);
    imgAbove(buildingCard, buildingImg);
    imgAbove(calendarCard, calendarImg);
    imgAbove(objectsCard, objectsImg);

    // Transition hmtl

    const tap = document.getElementById('tap_fx');

    function goToPage(loc) {
        tap.play();
        const pageMain = document.getElementById('bodyMain');
        pageMain.style.animation = 'slideOutRev 0.6s forwards';
        setTimeout(() => {
            window.location.href = loc;
        }, 700);
    }

    aboutCard.addEventListener('click', () => {
        goToPage("about.html");
    });
    buildingCard.addEventListener('click', () => {
        goToPage("building.html");
    });
    calendarCard.addEventListener('click', () => {
        goToPage("calendar.html");
    });
    objectsCard.addEventListener('click', () => {
        goToPage("objects.html");
    });
    boardCard.addEventListener('click', () => {
        tap.play();
        const pageMain = document.getElementById('bodyMain');
        pageMain.style.animation = 'slideOutRev 0.6s forwards';
        setTimeout(() => {
            window.open("https://antons0vv.github.io/v-t.archive.board/");
        }, 700);
    });

    //Loading animation

    let visited = document.referrer;
    let loaderAnim = this.querySelector('.loaderContainer');

    if (visited.includes('v-t.archive/')) {
        loaderAnim.style.display = "none";
    } else {
        loaderAnim.style.display = "flex";
    };

})