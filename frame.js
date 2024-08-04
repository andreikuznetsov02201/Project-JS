// TO STRING

//1)
console.log(typeof(String(4)));

//2)
console.log(typeof('q' + false));
console.log('https://vk.com/catalog/' + 5);

// TO NUMBER

//1)
console.log(typeof(Number('5')));

//2)
console.log(typeof(5 + +'5'));

//3)
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt('Hello', '');

//0, '', null, undefined, NaN   Всегда false

let switcher = null;

if (switcher) {
    console.log("Working..")
}

switcher = 1;

if (switcher) {
    console.log("Working..")
}

// TO BOOL
//1)
console.log(typeof(Boolean('5')));

//2)
console.log(typeof(!!'5'));


////////////////////////////////////////////////////////////////////////
//let num = 20;
//function showFirstMessages(text) {
//    alert(text);
//    console.log(num);
//}
//
//showFirstMessages("Hello world!");
//console.log(num);

//let calc = function (a, b) {
//    return (a + b);
//}

//используем WHILE
// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }

//используем DO ... WHILE
// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

/*function first(){
    setTimeout( function(){
    console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJs(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прошёл 3 урок!")
}

learnJs("JavaScript", done);*/
////////////////////////////////////////////////////////////////////////////


/*let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);*/

//new lesson
/*let arr = ["first", 2, 3, "four", 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function(item, i, mass) { //перебирание элементов
    console.log(i + ': ' + item + ' (массив: ' + mass + ')');
}); 

console.log(arr);

//
let mass = [1, 3, 4, 6, 7];

for (let key of mass) {
    console.log(key);
}*/


//
/*let ans = prompt("", ""),
    arr = [];
    
arr = ans.split(',');
console.log(arr);*/

/*let arr = ["egwyf", "zzz", "pppp", "fuse"],
    i = arr.join(', ');

console.log(i);*/



/*let arr = [1, 15, 4],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);*/



/*function hello() {
    console.log("Привет мир!");
}
hello();

function hi() {
    console.log("Привет мир!!!!!");
}
hi();

let arr = [1, 4, 6, 9, 12];
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

console.log(arr);*/
///////////////////////////////////////////////////////////////////