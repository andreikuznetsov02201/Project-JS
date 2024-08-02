let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

/*for (let i = 0; i < heart.length; i++) {
   heart[i].style.backgroundColor = 'blue';
}*/

/*heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'blue';
});*/

let div = document.createElement('div');
    text = document.createTextNode('Тут был я');//текстовый узел

div.classList.add('black');

//document.body.appendChild(div);//нету класса в блоке html
//wrapper.appendChild(div);//есть блок


//div.innerHTML = '<h1>Hello world!</h1>';
div.textContent = 'Hello world!';


document.body.insertBefore(div, circle[0]);//перенос объекта 1)что переносим 2)перед чем ставим
document.body.removeChild(circle[1]);//удаление
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);//замена 1)берём объект который перенесём 2)а этот объект будет удалён

console.log(div);