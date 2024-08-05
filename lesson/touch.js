//TOUCH

//touchstart --- касание к элементу
//touchmove --- нажали на экран и начали водить по дисплею
//touchend --- перестаёт ксаться экрана
//touchenter --- палец заходит на элемент
//touchleave --- палец покинул пределы элемента
//touchcancel --- палец не регистрируется в браузере
//event -------- событие произошедшее на странице

window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('.box');

/*    box.addEventListener('touchstart', function(event) {
        event.preventDefault();
        console.log("Red box: touchstart");
        console.log(event.target);
        console.log(event.touches[0].target);
        console.log(event.changedTouches);
        console.log(event.targetTouches);
    });*/

    box.addEventListener('touchmove', function(event) {
        event.preventDefault();
        console.log("Red box: " + event.touches[0].pageX);      //видим координаты если водить по экрану
    });

    /*box.addEventListener('touchend', function(event) {
        event.preventDefault();
        console.log("Red box: touchend");
    });*/

//РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
    //new RegExp('pattern', 'flags');
    ///pattern/ 


    //let ans = prompt('Введите ваше имя');

    //let reg = /n/gi;

    //console.log(ans.search(reg));//внутри строки ищем рег выр
    //console.log(ans.match(reg));
    //console.log(reg.test(ans));

    //i первое вхождение
    //g глоб поиск
    //m многострочность

//КЛАССЫ
    //\d --- цифры --- \D иначе
    //\w --- буквы --- \W иначе 
    //\s --- пробелы --- \S иначе 
// FIN
    //let pass = prompt('Введите пароль');

    //console.log(pass.replace(/./g, '*'));//каждый символ заменить на
    //alert('12-34-56'.replace(/-/g, ':'));

    /*let ans = prompt('Введите число');

    let reg = /\d/g;

    console.log(ans.match(reg));*/

    let str = 'My name is R2D2';
    console.log(str.match(/\w\d\w\d/i));  // спец симфолы нач с \

});