let num = 50;
if (num < 49) {
    console.log('Неверно!')
} else if (num > 100) {
    console.log('Много!')
} else {
    console.log('ВЕРНО!')
};

(num == 50) ? console.log('Верно!') : console.log('Неверно!');

switch (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Много!');
        break;
    case num > 80:
        console.log('Всё ещё Много!');
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log("Что-то пошло не так");
        break;
}

//lesson
let numer = 50;
//while (numer < 55) {
//    console.log(numer);
//    numer++;
//}

do {
    console.log(numer);
    numer++;
}
while (numer < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break;
    }
    console.log(i)
}