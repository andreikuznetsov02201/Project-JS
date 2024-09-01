/*function User(name, age) {
    this.name = name;
    //this.age = age;
    let userAge = age;

    this.say = function() {
        console.log((`Имя пользователя ${this.name}, возраст: ${userAge}`))
    }

    this.getAge = function() {
        return userAge;
    }

    this.setAge = function(age) {               //меняем
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

let ivan = new User('Ivan', 25);
console.log(ivan.name);
console.log(ivan.userAge);
console.log(ivan.getAge());

ivan.setAge(30);    //сами утстанавливаем
console.log(ivan.getAge());

ivan.say()*/

//1

/*let number = 1;

(function() {
    let number = 2;
    console.log(number);

    return console.log(number + 3)
}())

console.log(number);

//2

let user = (function() {
    let privat = function() {
        console.log('Privat')
    }

    return {
        sayHello : function() {
            console.log('Hello')
        }
    }
}());

console.log(user);
console.log(user.sayHello());

//3

let peop = (function() {
    let privat = function() {
        console.log('Privat')
    }

    let sayHello = function() {
        console.log('Hello')
    }

    return {
        sayHello : sayHello
    }
}());

console.log(peop);
console.log(peop.sayHello());*/
//http://www.codenet.ru/progr/cpp/ipn.php
require('es6-promise').polyfill();
let myModule = requier('./hg');             //получаем данные

let newModule = new myModule();

console.log(newModule.hello());
console.log(newModule.goodBye());