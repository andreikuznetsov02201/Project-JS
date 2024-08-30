window.addEventListener('DOMContentLoaded', function() {        //когда загрузилась вся структура DOM(html) картинки и тд не обяз

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),        //передаём элементы
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {        //скрывает лишние табы
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');         //удаляем show     //будем использовать каждый tabContent
            tabContent[i].classList.add('hide');            //доб класс чтобы спрятать --- смотри css
        }
    }

    hideTabContent(1);      //это---a

    function showTabContent(b) {        //показывает tabContent
        if (tabContent[b].classList.contains('hide')) {         //проверяем скрыт ли этот элемент
            tabContent[b].classList.remove('hide');         //удаляем hide
            tabContent[b].classList.add('show');        //доб show(показать)
        }
    }

    info.addEventListener('click', function(event) {        //назначение обработчика событий (панель сверху(лечение, отдых ...))
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {       //проверям что мы кликнули
            for(let i = 0; i < tab.length; i++) {       //перебираем ТАБЫ
                if (target == tab[i]) {         //если то куды нажали совпадает с опред ТАБОМ то....
                    hideTabContent(0);          //скроем все ненужные табы
                    showTabContent(i);          //показывем только тот который совпадает с ТАБОМ
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = '2024-10-21';        //крайний срок

    function getTimeRemaining(endtime) {        //промежуток времени(между deadline и наст. врем.)
        let t = Date.parse(endtime) - Date.parse(new Date()),       //parse --- кол милесек //new Date настоящее время(дан момент)
        seconds = Math.floor((t/1000) % 60),            //получаем из милесек сек //ост от деления, вычленяем из всего мин. и ост
        minutes = Math.floor((t/1000/60) % 60),         //получаем целые мин. (хвостик)
        hours = Math.floor((t/1000/60/60) % 24),        //получаем целые часы
        days = Math.floor((t/(1000*60*60*24)));         //а тут дней может быть сколько угодно

        return {        //возвращаем obj куда помещаем переменные
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {        //делаем вёрстку динамичной
        let timer = document.getElementById(id),        //получаем все элементы 
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);      //обновление
            
        function updateClock() {        //обновляет часы каждую секунду
            let t = getTimeRemaining(endtime);

            /*function addZero(num) {
                if(num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);*/
            
            days.textContent = t.days;          //помещаем данные в эти элементы(HTML)
            hours.textContent = t.hours;        //данные берутся из return
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {         //если значение меньше нуля то... (когда время закончится)
                clearInterval(timeInterval);        //останавливаеам таймер
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);        //1---это id, 2---это endtime(deadline)

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';        //запрещем прокрутку страницы когда открыто мод. окно
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';          //убираем это
    });

    // Form

    let message = {         //состояние нашего запроса
        loading: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        formBottom = document.getElementById('form'),
        input = form.getElementsByTagName('input'),         //получаем все input из класса main-form
        statusMessage = document.createElement('div');          //получаем объект message

        statusMessage.classList.add('status');      //доб. класс status, стилизацию

    /*function sendForm(elem) { //FORM WITH PROMISE
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
                elem.appendChild(statusMessage);///////
                let formData = new FormData(elem);
    
                function postData(data) {
    
                    return new Promise(function(resolve,reject) {
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
    
                        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                resolve();                                                
                            } else if(request.readyState === 4) {
                                if (request.status >= 200 && request.status < 300) {
                                    resolve();                                
                                }                            
                            } else {
                                reject();
                            }
                        };
                        let obj = {};
                            data.forEach(function(value,key) {
                                obj [key] = value;
                            });
                            let json = JSON.stringify(obj);
                        request.send(json);
                    });
                } //End
                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }                
                }
    
                postData(formData)
                    .then(()=> statusMessage.innerHTML = message.loading)
                    .then(()=> statusMessage.innerHTML = message.success)
                    .catch(()=> statusMessage.innerHTML = message.failure)
                    .then(clearInput) 
                    .then(setTimeout((()=> statusMessage.innerHTML = ''), 10000));
            });
        }

        sendForm(form);
        sendForm(formBottom);*////

    form.addEventListener('submit', function(event) {           //ставим обработчик событий через форму а не кнопку
        event.preventDefault();         //отмен. стандартное поведение браузера
        form.appendChild(statusMessage);        //доб. новый див сообщение
    
        let request = new XMLHttpRequest();         //отправляем данные на сервер
        request.open('POST', 'server.php');         //настройки запроса (присылаем) //URL --- это файл php
        //request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');  //загололвки HTTP запросов
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    
        let formData = new FormData(form);          //тоже отправка данных(ключ: значение) значение вводит пользователь!
    
        //создаём JSON  
        let obj = {};       //промежуточный объект
        formData.forEach(function(value, key) {
            obj[key] = value;       //записываем новое значение
        });
        let json = JSON.stringify(obj);         //превращает обычные js объекеты в json формат
    
        request.send(json);     //может быть formData если это не json     //открывает запрос(отправляем его на серевер) formData --- то что ввёл пользователь
    
        request.addEventListener('readystatechange', function() {           //наблюдаем за изменнениями состояния нашего запроса
            if (request.readyState < 4) {           //состояние загрузки
                statusMessage.innerHTML = message.loading;          //доб. то что загрузка
            } else if (request.readyState === 4 && request.status == 200) {         //если уже все обработалось то выводится блок из message 
                statusMessage.innerHTML = message.succes;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });
            
        for (let i = 0; i < input.length; i++) {        //очищаем форму от input
            input[i].value = '';        //превращаем в пустую строку
        }        
    });

    // Slider

    let slideIndex = 1,         //слайд который показывается в данный момент
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);             //function declaration
    function showSlides(n) {            //n --- номер слайда

        if (n > slides.length) {    //если слайды закончились то возвр. к первому
            slideIndex = 1;
        }
        if (n < 1) {            //если мы на 1 слайде нажим. стрелку назад то возвращаемся к последнему слайду
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');          //1)скрываем слайды, 2)item---все слайды
        /*for (let i = 0; i < slides.length; i++) { 2 способ!
            slides[i].style.display = 'none';
        }*/ 
        dots.forEach((item) => item.classList.remove('dot-active'));        //убираем класс active потом этоо класс нзначим той кнопке которая будет нажата

        slides[slideIndex - 1].style.display = 'block';             //1)показываем слайд который нужен, 2)в js 1 это 0 поэтому переводим в формат js
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {            //увел. парамтр slideIndex  n --- 1 
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {          //текущий слайд, когда клик на 4 точку и тепепрь если мы хотим вызвать 4 слайд мы перемещ 4 и slideIndex = 4
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {             //стредака назад
        plusSlides(-1);
    });

    next.addEventListener('click', function() {             //стрелка вперёд
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {            //используем делегирование событий
        for (let i = 0; i < dots.length + 1; i++) {         //перебираем все точки
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {          //1)тот элем. на который мы кликнули --- event.target, проверям класс dot c помощью contains 2)узнаём номер точки
                currentSlide(i);            //вывод. текущий слайд
            }
        }
    });

    //Calc
    
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;           //делаем общую сумму ноль

        persons.addEventListener('change', function() {             //при изменение значения инпута
            personsSum = +this.value;           //то что ввёл пользователь   можем получить тот элемент с которым общаемся
            total = (daysSum + personsSum) * 4000;

            if (restDays.value == '') {             //если одно из полей не заполнено то будет 0
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        restDays.addEventListener('change', function() {             //при изменение значения инпута
            daysSum = +this.value;           //то что ввёл пользователь   можем получить тот элемент с которым общаемся
            total = (daysSum + personsSum) * 4000;

            if (persons.value == '') {             //если одно из полей не заполнено то будет 0
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        place.addEventListener('change', function() {
            if (restDays.value == '' || persons.value == '') {          //проверяем нет ли пустой строки
                totalValue.innerHTML = 0;
            } else {
                let a = total;          //избегаем потерю данных //делаем техническую переменную чтобы total при переходе на другую баху не перемножался
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;          //1)обращаемся к тому options с которым воздействуем 2)к тому элементу котрый был выбран
            }
        });
});