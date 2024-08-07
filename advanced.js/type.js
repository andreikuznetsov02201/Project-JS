//let timerId = setTimeout(sayHello, 3000);
//clearTimeout(timerId);          //останавливает setTimeout

/*let timerId = setInterval(sayHello, 3000);
clearTimeout(timerId);

function sayHello() {
    console.log('Hello world');
};*/
//////рекурсивный вызов setTimeout 
/*let timerId = setTimeout(function log() { //похоже на setInterval
    console.log("Hello");
    setTimeout(log, 2000);
});*/
/////////////////////////////////
let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;//нач поз 0

    let id = setInterval(frame, 10);//каждые 10сек запускаем frame
    function frame() {
        if (pos == 300) {//если поз станет 300пикс то завершаем
            clearInterval(id);
        } else {
            pos++;//на ед увеличивается
            elem.style.top = pos + "px";//по одному пикселю
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);

//Делегирование события
let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) { //target-свойство объекта(event) указыввает на событие
    if (event.target && event.target.matches('button.first')) {
        console.log("Hello");
    }
});
////////////////////////////////////////
//https://learn.javascript.ru/js-animation
//https://learn.javascript.ru/event-delegation
//https://html5.by/blog/what-is-requestanimationframe/