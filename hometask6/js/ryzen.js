'use strict'

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    //yearValue = document.qurySelector('#year'),  ???
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;//делаем переменные глобальными
//https://beonmax.com/img/adds/006javascript/classification.jpg
//https://learn.javascript.ru/searching-elements-dom

startBtn.addEventListener('click', function() {
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');

	while(isNaN(money) || money == '' || money == null) {           //проверяет чтобы было число
		money = +prompt("Ваш бюджет на месяц?", '');
	}
    appData.budget = money;         //записываем в глобал объект (ответ пользователя)
    appData.timeData = time;            //
    
    budgetValue.textContent = money.toFixed();          //записываем в графу дохода

    yearValue.value = new Date(Date.parse(time)).getFullYear();         //value только для input
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;            //для того чтобы неначинал с нуля
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {          //первая кнопка утвердить
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {             //создаётся псевдоколлекция которая сама считает сколько input
        let a = expensesItem[i].value,          //перебирает с нуля --- наименование расхода
            b = expensesItem[++i].value;            //следущий элемент идущий за i --- префикс. инкремент
    
        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;            //значение и сколько оно будет стоить
            sum += +b;          //всю сумму --- прибавляем к сумме знач b --- в глоб объект
        } else {
            i = i - 1;
        }
        expensesValue.textContent = sum;            //запись в графу
    }
});

optionalExpensesBtn.addEventListener('click', function() {          //необязательные расходы
    for (let i = 0; i <= optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;            //получаем из кажджого элемента по порядку
        appData.optionalExpenses[i] = opt;          //помещаем в глоб объект(appData)
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';      // в графу
    }
});

countBtn.addEventListener('click', function() {            //расчёт дневного бюджета

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();          //на 1 день
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Это минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Это средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Это высокий уровень достатка!";
        } else {
            levelValue.textContent = "Ошибочка...!";
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка:(';
    }
});

incomeItem.addEventListener('input', function() {           //возможн доход
    let items = incomeItem.value;
    console.log(1);
    if (isNaN(items) || items != '') {          //проверка
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;           //в графу
    }
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;//число

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {        
        let sum = +sumValue.value,          //то что пишет польз. сохран. здесь
            percent = +percentValue.value;//число
    
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
    
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

const appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false,
};