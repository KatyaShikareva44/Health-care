'use strict'

document.addEventListener("DOMContentLoaded", () => {

    /* 1. Динамическое листание карточек врачей */

    const slider__left = document.querySelector('.slider__left');       // создаем переменную находя блок по классу
    const slider__right = document.querySelector('.slider__right');
    const cards = document.getElementById('doctors__list');
    /*
       *  Алгоритм 
       *  
       * 1. Начало
       * 2. Имеем 2 кнопки: влево и вправо
       * 3. Нажимаем на кнопки и ожидаем листание карточек
       *  3.1 Нажимаем на кнопку вправо
       *   3.1.1 Происходит листание карточек с право на лево по 2 штуки
       *  3.2 Нажимаем на кнопку влево
       *   3.2.1. Происходит листание карточек с лева на право по 2 штуки
       * 5. Конец
       
       Блок-схема: /images/Block-schema.png
       */

    if (slider__left) {                                         // проверяем существование элемента в DOM
        console.log('Константа slider__left существует');
        slider__left.addEventListener('click', toSlideLeft)
    }
    if (slider__right) {                                         // проверяем существование элемента в DOM
        console.log('Константа slider__right существует');
        slider__right.addEventListener('click', toSlideRight);
    }
    console.log('Скрипт отработал корректно');


    function toSlideLeft() {
        console.log('Кнопка нажимается');
        let left = cards.style.getPropertyValue('left');
        if (left) {
            left = left.replace('px', '');
            left = parseInt(left);
        }
        else {
            left = 0;
        }
        if (left < 720) {
            left = 0;
        } else {
            left = left + 720;
        }
        console.log('left ' + left);
        cards.style.setProperty('left', left + 'px');

    }

    function toSlideRight() {
        console.log('Кнопка нажимается');
        let width = 350 * 4 + 3 * 20;

        let left = cards.style.getPropertyValue('left');
        // debugger;
        if (left) {
            left = left.replace('px', '');
            left = parseInt(left);
        }
        else {
            left = 0;
        }
        if (left >= width - 740) {
            left = width - 740;
        } else {
            left = left - 740;
        }
        console.log('left ' + left);
        if (left * (-1) < width) {
            cards.style.setProperty('left', left + 'px');
        }

        console.log('width' + width);

    }


    /* 2. Появление форм */

    /* 2.1 Появление формы Входа при нажатии на кнопку "Вход" */

    const recordFormLogin = document.querySelector('.form-login');
    const buttonLogin = document.querySelector('.button-login');

    if (buttonLogin && recordFormLogin) {
        const closeButton = recordFormLogin.querySelector('.form-login__close');
        buttonLogin.addEventListener('click', () => {
            recordFormLogin.removeAttribute('hidden');
        });
        // Закрытие модального окна при клике на кнопку закрытия
        closeButton.addEventListener('click', () => {
            recordFormLogin.setAttribute('hidden', true);
        });
    }

    /* 2.1 Появление формы Регистрации при нажатии на кнопку "Регистрация" */

    const recordFormRegistration = document.querySelector('.form-registration');
    const buttonRegistration = document.querySelector('.button-registration');

    if (buttonRegistration && recordFormRegistration) {
        const closeButton = recordFormRegistration.querySelector('.form-registration__close');
        buttonRegistration.addEventListener('click', () => {
            recordFormRegistration.removeAttribute('hidden');
        });
        // Закрытие модального окна при клике на кнопку закрытия
        closeButton.addEventListener('click', () => {
            recordFormRegistration.setAttribute('hidden', true);
        });
    }

      /* 2.1 Появление формы Записи при нажатии на кнопку "Записаться на прием" */

    const recordForm = document.querySelector('#doctor__record');
    const buttonForm = document.querySelectorAll('.doctors__link');

    if (buttonForm && recordForm) {
        console.log("элементы найдены");
        const closeButton = recordForm.querySelector('.record__form__close');
        buttonForm.forEach(function (button) {
            console.log(button);
             button.addEventListener('click', () => {
            recordForm.removeAttribute('hidden');
        });
        });
       
        // Закрытие модального окна при клике на кнопку закрытия
        closeButton.addEventListener('click', () => {
            recordForm.setAttribute('hidden', true);
        });
    }



    /*3. Отображение списка услуг из массива */

    const services = ["Рентген", "ФГДС", "УЗИ", "МРТ", "КТ", "Медицинские программы", "Медосмотры и справки", "Косметология", "Стоматология", "Физиокабинет"];
    const services__group = document.querySelector('#services__group');
    services.forEach(function (service) {
        console.log(service);
        services__group.innerHTML += '<li class="services__item"><a class="services__item-link" href="#">' + service + '</a></li>';
    });

    /*4. Формирование и вывод верстки с использованием цикла for...in */

    /*const person = {
        image:
        procedure:
        description:
    };
    for (let key in person) {
        console.log('${key}: ${person[key]}');
    }*/


     const cardsContainer = document.querySelector('#procedures');
    if (cardsContainer) {
        const cardList = cardsContainer.querySelector('.procedures__list');

        /* Моковые данные */
        const cardsData = {
            card1: {
                image: 'images/analis.png',
                procedure: 'Анализы',
                description: 'Мы предлагаем широкий спектр клинико-диагностических услуг.'
            },
            card2: {
                image: 'images/KOSMETUVEL2.png',
                procedure: 'Косметология',
                description: 'Каждая уходовая процедура состоит из следующих этапов: очистка кожи,глубокая очистка кожи, тонизация, массаж, введение активного концентрата, затем наносится, высокоэффективные маски и процедура заканчивается нанесением крема.'
            },
            card3: {
                image: 'images/rentgen.webp',
                procedure: 'Рентген',
                description: 'Метод исследования, основанный на прохождение сквозь тело человека рентгеновских лучей.'
            },
            card4: {
                image: 'images/KT.webp',
                procedure: 'КТ',
                description: 'Один из самых информативных методов диагностики, заключающийся в послойном сканировании тканей посредством просвечивания их рентгеновскими лучами.'
            },
            card5: {
                image: 'images/MRT.webp',
                procedure: 'МРТ',
                description: 'Метод диагностики, который в медицинских центрах используется для получения максимально анатомически точных изображений внутренних органов и тканей пациента.'
            },
            card6: {
                image: 'images/GGDS.jpg',
                procedure: 'ФГДС.Колоноскопия',
                description: 'Методика эндоскопического обследования верхнего отдела пищеварительной системы.'
            }

        }

        // Функция для создания карточки
        const createCard = (imageUrl, procedures, description) => {
            // Первый вариант вывода разметки)
            const card = document.createElement('li');
            card.className = 'procedures__card';

            const image = document.createElement('img');
            image.src = imageUrl;

            const heading = document.createElement('h3');
            heading.textContent = procedures;
            heading.className = 'procedures__name';

            const desc = document.createElement('p');
            desc.textContent = description;
            desc.className = 'procedures__text';

            card.appendChild(image);
            card.appendChild(heading);
            card.appendChild(desc);

            // Шаблонные строки подстановки (второй вариант вывода разметки - рекомендуемый)
            /* 
            const card = `
                <a class="card__item" href="${linkUrl}">
                    <span class="card__icon">
                        <img src="${iconUrl}" alt="${iconAlt}" width="${iconWidth}" height="${iconHeight}">
                    </span>
                    <h3 class="card__title">${title}</h3>
                    <p class="card__description">${description}</p>
                </a>
            `; 
            */

            return card;
        }

        for (const cardKey in cardsData) {
            const card = cardsData[cardKey];
 
            const cardElement = createCard(card.image, card.procedure, card.description);
            cardList.appendChild(cardElement); // Первый вариант
            // cardList.insertAdjacentHTML('beforeend', cardElement); // Второй вариант
        }
    }
});
 