$(document).ready(function() {          //обработчик события не позволяющий скриптам выполняться до загрузки страницы

    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {          //5
        $('.modal').slideDown(1000);    //открытие
        $('.overlay').fadeIn(1000);     //закрытие     
    });

    $('.close').click(function() {              //6
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });

});