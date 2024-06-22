
let posterData = {
    card_poster_1: {
        name: "Карточная игра как способ оказаться в прошлом",
        date: "15:00–17:00, <br>10 февраля 2024",
        description: "Обсуждаем и играем в карточные игры прошлого: Короли, Бабочка, Мельник, Слетелись, Пьяница и другие",
        add_text: "Клуб настольных игр «Играя в архив»",
    },
    card_poster_2: {
        name: "Пазлы и другие первые игры-головоломки",
        date: "15:00–17:00, <br>20 февраля 2024",
        description: "Обсуждаем и собираем пазлы прошлого. Разбираемся, как головоломка менялась со временем и что несли в себе эти изменения",
        add_text: "Клуб настольных игр «Играя в архив»",
    },
    odno_poster_1: {
        name: "Диалог с местом. Суздаль",
        date: "17:00, Каждую среду ноября 2023",
        description: "Аудио-прогулка по улицам и дворам, позволяющая  побывать в дне местного жителя из разных времен.  Пройдем сквозь центральные районы и окраины города",
        add_text: "Автор прогулки: Александра Селиванова",
    },
    odno_poster_2: {
        name: "Одно дыхание Москва–Вена–Париж/ ",
        date: "13.09—02.12.2023 <br>Время работы вт-вс: 12:00–21:00<br> Открытие 12 сентября в 19:00",
        description: "Выставка-исследование общего и разного трёх европейский городов  через аудио- и фотоматериалы на границе XX и XXI века/",
        add_text: "Георгий Пинхасов, Сергей Борисов, Евгений  Фельдман, Игорь Мухин, Владимир Лагранж.",
    },
    swap_poster_1: {
        name: "Складывая прошлое",
        date: "12:00–20:00<br>23–25.08.2023",
        description: "Архивный своп",
        add_text: "Факельный переулок, дом 21",
    },
    swap_poster_2: {
        name: "Обмениваясь воспоминаниями прошлого",
        date: "10:00–19:00<br>1–3.12.2023",
        description: "Своп открыток",
        add_text: "Факельный переулок, дом 21",
    },
    collage_poster_1: {
        name: "Коллаж как способ организовать память",
        date: "19:00–21:00<br>13 ноября 2023",
        description: "Практикуемся в работе с разными предметами  и материалами, собирая свои воспоминания на одном листе",
        add_text: "Ведущая: Татьяна Звонарева",
    },
    collage_poster_2: {
        name: "Коллаж как способ нового взгляда на вещи",
        date: "19:00–21:00<br>20 ноября 2023",
        description: "Пересобираем свой фотоальбом  с помощью коллажа. Из множества  фотографий в один лист воспоминаний",
        add_text: "Ведущая: Мария Лукьянова",
    },
}

document.addEventListener('DOMContentLoaded', function () {

    //Posters text changing

    const posters = document.querySelectorAll('.poster')

    posters.forEach(function (poster) {
        poster.addEventListener('click', function () {
            let posterId = this.getAttribute('id');

            let imageData = posterData[posterId];
            document.getElementById('postName').innerHTML = imageData.name;
            document.getElementById('postDate').innerHTML = imageData.date;
            document.getElementById('postDes').innerHTML = imageData.description;
            document.getElementById('postAddText').innerHTML = imageData.add_text;
        });
    });


    // Flipping posters 

    function flipping(el) {
        let index = 100;
        el.addEventListener('click', function () {
            index--;
            el.style.zIndex = index;

        })
    }
    posters.forEach(flipping);
})
