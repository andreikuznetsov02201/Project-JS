class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    newDiv() {
        let divMake = document.createElement("div");
        document.body.appendChild(divMake);     //добавляет узел в конец списка

        let obj = `height: ${this.height}px, width: ${this.width}px, bg: ${this.bg}, 
        fontSize: ${this.fontSize}, textAlign: ${this.textAlign}`;
        divMake.style.cssText = obj;   //Свойство cssText позволяет задать CSS стили массово одной строкой.
    }
}

const item = new Options(150, 400, "blue", 14, "center");   //передаём данные в конструктор

item.newDiv();