window.addEventListener('DOMContentLoaded', function() {    //когда загрузилась вся структура DOM(html) картинки и тд не обяз

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),    //передаём элементы
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {    //скрывает лишние табы
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');     //удаляем show     //будем использовать каждый tabContent
            tabContent[i].classList.add('hide');        //доб класс чтобы спрятать --- смотри css
        }
    }

    hideTabContent(1);  //это---a

    function showTabContent(b) {    //показывает tabContent
        if (tabContent[b].classList.contains('hide')) {     //проверяем скрыт ли этот элемент
            tabContent[b].classList.remove('hide');     //удаляем hide
            tabContent[b].classList.add('show');    //доб show(показать)
        }
    }

    info.addEventListener('click', function(event) {    //назначение обработчика событий (панель сверху(лечение, отдых ...))
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {   //проверям что мы кликнули
            for(let i = 0; i < tab.length; i++) {   //перебираем ТАБЫ
                if (target == tab[i]) {     //если то куды нажали совпадает с опред ТАБОМ то....
                    hideTabContent(0);      //скроем все ненужные табы
                    showTabContent(i);      //показывем только тот который совпадает с ТАБОМ
                    break;
                }
            }
        }
    });
});
