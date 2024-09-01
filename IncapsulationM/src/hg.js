function myModule() {
    this.hello = function() {
        return 'Hello';
    }

    this.goodBye = function() {
        return 'goodbye';
    }
}

module.exports = myModule;          //импортируем в другой файл