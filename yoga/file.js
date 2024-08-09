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

    // Timer

    let deadline = '2024-10-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
        function updateClock() {
            let t = getTimeRemaining(endtime);

            /*function addZero(num) {
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);*/

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);
});
