let json = '{"id":2}'

try {
    /*console.log('Начинаем работу');
    console.log(a);
    console.log('Результат');*/
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error("В этих данных нет имени")          //создаём собственную ошибку
    }
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Мы получили ошибку: ${error.name}`);
} finally {
    console.log('я вывожусь всегда')
}

console.log('GO TO MY PARTY');
//https://learn.javascript.ru/exception
//https://www.w3schools.com/js/js_errors.asp