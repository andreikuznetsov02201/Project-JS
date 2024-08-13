let name = "Ivan",
    age = 30,
    mail = "ex@mail.com";

document.write(`Пользователю ${name} ${age} лет. Его почтовый индекс: ${mail}`);    //интрпорляция ES6    
//https://habr.com/ru/articles/305900/


function makeArray() {
    var items = [];
    //var создалась одна на весь цикл
    for (let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);   //в массив itemS добов. iteM
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const

//Стрелочная функция анонимна(нет имени)
let fun = () => {
    console.log(this);
};

//fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {   //нет своего контекста и берёт и своего родителя(sayNumber)
            console.log(this);
        };
        say();
    }
}

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function calcOrDouble(number, basis = 2) {      //если ничего не передают значения то нужно умн. на 2  //ES6
    //basis = basis || 2;     //1 случай) если в арг. есть basis 2 случай) то в перем. basis попадает 2 и они перемнож. ES5

    console.log(number * basis);
}
calcOrDouble(3, 5);
calcOrDouble(6);    //умножится на 2
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters

class Rectangle {
    constructor(height, width = 20) {   //можно убрать приравнивание
        this.height = height;
        this.width = width;
    }
    calcArea() {    //метод
        return this.height * this.width;
    }
}

const squre = new Rectangle(10);    //арг. к конструктору //можно доб 10

console.log(squre.calcArea());
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejour', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];      //Spred оператор

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2, 5, 7];

log(...numbers);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax