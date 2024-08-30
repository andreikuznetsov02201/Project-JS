/*localStorage.setItem("number", 1);          //создаём ключ значение БД

console.log(localStorage.getItem("number"));            //получаем эти данные

localStorage.removeItem("number");          //удляем

localStorage.clear();           //вообще всё отчищаем*/

window.addEventListener('DOMContentLoaded', function() {
    
    let checkbox = document.getElementById('RemeberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    }

    if (this.localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = "#FF4766"
    }

    checkbox.addEventListener('click', function() {
        localStorage.setItem("isChecked", true);
    })

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#FF4766"
    });

    let persone = {
        name: "Alex",
        age: "25",
        tech: ['mobile', 'notebook']
    }

    let serializedPersone = JSON.stringify(persone);            //stringify --- понятный объект для браузера js
    localStorage.setItem('Alex', serializedPersone)

    console.log(JSON.parse(this.localStorage.getItem('Alex')));             //JSON.parse--- нужно эти данные которые приходят в JSON формате вернуть в обычный объект понятный для js 

});
//https://tproger.ru/articles/localstorage