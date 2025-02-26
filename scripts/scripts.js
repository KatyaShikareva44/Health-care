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
       *   3.1.1 Происходит листание карточек с право на лево поочередно одна за другой
       *  3.2 Нажимаем на кнопку влево
       *   3.2.1. Происходит листание карточек с лева на право поочередно 
       * 5. Конец
       
       Блок-схема: /images/Block-schema.png
       */

    if (slider__left) {                                         // проверяем существование элемента в DOM
        console.log('Константа slider__left существует');
        slider__left.addEventListener('click', () => {
            console.log('Кнопка нажимается');
            let left = cards.style.getPropertyValue('left');
            if (left) {
                left = left.replace('px', '');
                left = parseInt(left);
            }
            else {
                left = 0;
            }
            if (left<720) 
            {
                left = 0;
            } else{
                left = left + 720;
            }
            console.log('left ' + left);
            cards.style.setProperty('left', left + 'px');
        })
    }
    if (slider__right) {                                         // проверяем существование элемента в DOM
        console.log('Константа slider__right существует');
        slider__right.addEventListener('click', () => {
            console.log('Кнопка нажимается');
            let width = 360*4;
            console.log('width' + width);
            /*let left = cards.style.getPropertyValue('left');
            if (left) {
                left = left.replace('px', '');
            }
            else {
                left = 0;
            }
            left = parseInt(left) - 350;
            console.log('left ' + left);
            cards.style.setProperty('left', left + 'px');*/
            let left = cards.style.getPropertyValue('left');
            if (left) {
                left = left.replace('px', '');
                left = parseInt(left);
            }
            else {
                left = 0;
            }
            if (left >= width-720) 
            {
                left = width-720;
            } else{
                left = left - 720;
            }
            console.log('left ' + left);
            cards.style.setProperty('left', left + 'px');
 
        })
    }
    console.log('Скрипт отработал корректно')
});
