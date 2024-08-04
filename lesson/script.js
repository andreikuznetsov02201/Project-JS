let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper');
    link = document.querySelector('a');

/*btn[0].onclick = function() {
    alert('Вы нажали первую кнопку!!!');
};

btn[0].onclick = function() {
    alert('Вы опять нажали первую кнопку!!!');
};*/

/*btn[0].addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + ' на эелементе ' + event.target);//target-цель
});

wrap.addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + ' на эелементе ' + event.target);
});*/

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Произошло событиееее: ' + event.type + ' на эелементе ' + event.target);
});

btn.forEach(function(ittem) {
    ittem.addEventListener('mouseleave', function() {
        console.log("вышли!");
    })
});
/*btn[0].addEventListener('click', function() {
    alert('Вы опять нажали первую кнопку!!!');
});*/

/*btn[0].addEventListener('mouseenter', function() {
    alert('Вы навели на первую кнопку');
});*/

