//$('#btn');
$(document).ready(function() {              //DomContentLoaded замена
    $('.list-item:first').hover(function() {            //при наведении доб класс active (и когда убирали пропадал)
        $(this).toggleClass('active');          //указываем тот класс котопрый хотим тоглить
    });

    $('.list-item:eq(2)').on('click', function() {          //addEventListener замена
        $('.image:even').fadeToggle('slow');            //even --- чётный элем.   fadeToggle --- готовая аним.
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate(            //animate --- своя собственная аним.  odd --- нечетн. картинка
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
});
//Angular
//Vue js
//React
//TypeScript