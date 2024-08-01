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
