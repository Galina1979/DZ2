// модальное окно
$(document).ready(function(){

    
    // закрыть на крестик
    $('.close-popup').click(function(){
        $('.overlay').fadeOut();
    });


    // закрыть по клику вне окна
    $(document).mouseup(function(){
        $('.overlay').fadeOut();
    });

    // открыть по клику на картинку
    $('.img_auto').click(function(){
        $('.overlay').show();
    });


});