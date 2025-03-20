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
});
