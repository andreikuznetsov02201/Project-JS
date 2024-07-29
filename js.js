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

let calc = (a,b) => a+b

console.log(calc(3,4));
console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num
}

let anotherNum = retVar();
console.log(anotherNum);

let str = 'test';
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));