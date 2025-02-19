'use strict'

document.addEventListener("DOMContentLoaded", () => {

    /* 1. Динамическое листание карточек врачей */

    const slider__left = document.querySelector('.slider__left');       // создаем переменную находя блок по классу
    const slider__right = document.querySelector('.slider__right');

    /*
       *  Алгоритм 
       *  
       * 1. Начало
       * 2. Имеем 2 кнопки: влево и вправо
       * 3. Нажимаем на кнопки и ожидаем листание карточек
       *  3.1 Нажимаем на кнопку вправо
       *   3.1.1 Происходит листание карточек с право на лево поочередно одна за другой
       *  3.2 Нажимаем на кнопку влево
       *   3.2.1. Происходит листание карточек с лева на право поочередно 
       * 5. Конец
       
       Блок-схема: /images/Block-schema.png
       */

    if (slider__left) {                                         // проверяем существование элемента в DOM
        console.log('Константа slider__left существует');
        slider__left.addEventListener('click', () => {
            console.log('Кнопка нажимается')
        })
    }
    if (slider__right) {                                         // проверяем существование элемента в DOM
        console.log('Константа slider__right существует');
        slider__right.addEventListener('click', () => {
            console.log('Кнопка нажимается')
        })
    }
    console.log('Скрипт отработал корректно')
});