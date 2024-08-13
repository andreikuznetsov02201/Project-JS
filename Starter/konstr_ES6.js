class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello! ${this.name}`)
    }
    exit() {
        console.log(`Пользователь ${this.name} ушёл`)
    }
}
let ivan = new User('Ivan', 25);
let alex = new User('alex', 20);

console.log(ivan);
console.log(alex);

ivan.exit();
//https://learn.javascript.ru/classes
//https://learn.javascript.ru/constructor-new