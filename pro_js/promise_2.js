//обещание --- promise
//если произошло что-то то выполним следущие действия
let drink = 1;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');

    /*Условный (тернарный) оператор - единственный оператор в JavaScript, 
    принимающий три операнда: условие, за которым следует знак вопроса (?), 
    затем выражение, которое выполняется, если условие истинно, сопровождается двоеточием (:), и, 
    наконец, выражение, которое выполняется, если условие ложно.*/

    let promise = new Promise(function(resolve, reject) {       //1--- обещание выполнилось 2--- не выполнилось
        setTimeout(function(){     //стрела летит в течении 3сек
            Math.random() > .5 ? resolve({}) : reject('Вы промахнулись');       //генер. случ. число
        }, 3000)
    });
    
    return promise;

};

function win() {
    console.log('Вы победили');
    (drink == 1) ? buyBeer() : giveMoney();     //если drink == 1 то испол. buyBeer иначе giveMoney
}

function buyBeer() {
    console.log('Вам купили пиво :)')
}

function giveMoney() {
    consaole.log('Вам дали деньги')
}

function loose() {
    console.log('Вы проиграли');
}

shoot({})   //это методы точки не нужны
        .then(mark => console.log("Вы попали в цель"))  //resolve
        .then(win)
        .catch(loose)   //reject

//https://learn.javascript.ru/promise
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise