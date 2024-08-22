//Json
/*let options ={
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

console.log(JSON.parse(JSON.stringify(options)));*/
//JSON.stringify для преобразования объектов в JSON.
//JSON.parse для преобразования JSON обратно в объект.

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {      //обработчик событий на руб. (испол. стрелочная функция т.к. имя не важно)
    let request = new XMLHttpRequest();     //это главный объект для работы с AJAX запросами 
    
    //Настойка AJAX запроса
    //request.open(method, url, async, login, pass);
    //1)метод котрым общается клиент и сервер(get, post) 2)путь к серверу 3)синхронность запроса(пока не ответь страница зависнет) 4)логин 5)пароль
    request.open('GET', 'current.json');    //мы ПОЛУЧАЕМ инфо. и путь
    //request.setRequestHeader('Content-type', 'application/json; charset=utf-8');    //получение JSON данных, настройка HTTP запросов
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send();     //отравляет запрос на сервер

    //status --- код ответа сервера //открыт/закрыт магазин
    //statusText --- содержит текстовое описание ответа сервера
    //responseText / response --- содержит текст ответа сервера(что хочет отпрвить backend-разработчик) //что  я могу купить
    //readyState --- текущие состояние запроса(есть этапы --- UNSENT[0], OPENED[1], HEADERS_RECEIVED[2], LOADING[3], DONE[4])

    request.addEventListener('readystatechange', function() {       //отслеживает статус готовности запроса в данный момент(если что-то меняется то сраб. функц.)
        if (request.readyState == 4 && request.status == 200) {     //если весь запрос готов И сервер в норме то...
            let data = JSON.parse(request.response);    //превращаем JSON формат в обычный фомат объкт. JS (который код поймёт) //response это файл JSON

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = 'Что то пошло не так!';
        }
    });
});
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects
//https://ilikekillnerds.com/2017/09/convert-formdata-json-object/
//https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B8_HTTP