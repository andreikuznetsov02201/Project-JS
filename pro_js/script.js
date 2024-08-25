
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

    function catchData() {

        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();         //AJAX
            request.open("GET", "current.json");
        
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();         //отпр. запрос на сервер
            
            /*Главный помощник – это событие load. Оно срабатывает после того, 
            как скрипт был загружен и выполнен.*/
            request.onload = function() {
                if(request.readyState === 4) {
                        if(request.status == 200) {
                            resolve(this.response)
                        }
                        else {
                            reject();
                        
                        }
                }
            }
        });
    };

    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);            //превращение из Json в js
        inputUsd.value = inputRub.value / data.usd;
    })
    .then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так")

});