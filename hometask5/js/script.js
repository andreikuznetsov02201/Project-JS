'use strict';

let menu = document.getElementsByClassName("menu")[0],//?
    menuItem = document.getElementsByClassName("menu-item"),
    column = document.getElementsByClassName('column'),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],//?
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]); // Поменяли местами два элемента

menuItemLi.classList.add("menu-item"); // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);                                   


//document.body.replaceChild(url())
document.body.style.backgroundImage = "url('img/apple_true.jpg')"; // Меняем фон


title.textContent = "Мы продаем только подлинную технику Apple" // Заменить текст

//adv.removeChild(adv);
adv.remove(); // Удалить рекламу со страницы

let answer = prompt("Ваше отношение к технике Apple?"); // Отношение к технике Apple
//console.log(answer);
promptforApple.textContent = answer;