let box = document.querySelector('.box'),
    btn = document.querySelector('button');

    //Спец методы
let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);//доп получ 1 арг   //даёт нам все координаты

console.log(document.documentElement.clientWidth);  //получаем ширину страницы
console.log(document.documentElement.clientHeight); //от URL до консоли или самого низа

btn.addEventListener('click', function() {
    //box.style.height = box.scrollHeight + 'px';
    //console.log(box.scrollTop);     //смотрим сколько пикс мы пролестнули
    box.scrollTop = 0; //Можнр изменять только --- ScrollTop и ScrollLeft!
});

/*console.log(document.documentElement.scrollTop);////перемещение по странице
scrollBy(0, 200); //от нашего положения 
scrollTo(0, 200); //от положения страницы браузера*/