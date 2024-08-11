//Функция конструктор
/*function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello ' + this.name);
    }
}
//Создаём прототип
User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' ушёл');
}
//

// здесь объекты
let ivan = new User('Ivan', 25),
    alex = new User('alex', 20);

console.log(ivan);
console.log(alex);

ivan.exit();*/

////
/*function showThis(a, b) {
    console.log(this);  //this глоб. объект (window)
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);
showThis(5, 5);*/
////

////
/*let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
    }
}
obj.sum();*/
////

////
/*let user = {
    name: 'John'
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, 'Smit'));    //принимает арг. в виде строки
console.log(sayName.apply(user, ['Snow']));     //принимаерт арг. в виде массива

function count(number) {
    return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10));*/
////

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
})

// 1) Просто вызов функции - window/undefind
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указания конкректного контекста - call, apply, bind
//https://tproger.ru/translations/javascript-this-keyword