// работа с миниатюрами
$(document).ready(function(){

    // объект для стандартного поведения ссылки 1
    $('.small a').mouseover(function(e){

        // блокировки стандартного поведения браузера в отношении картинки
        e.preventDefault();

        if ($('.big img').attr('src') != $(this).attr('href')){

            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

       // объект для стандартного поведения ссылки 2
       $('.small_2 a').mouseover(function(e){

        // блокировки стандартного поведения браузера в отношении картинки
        e.preventDefault();

        if ($('.big img').attr('src') != $(this).attr('href')){

            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });


       // объект для стандартного поведения ссылки 3
       $('.small_3 a').mouseover(function(e){

        // блокировки стандартного поведения браузера в отношении картинки
        e.preventDefault();

        if ($('.big img').attr('src') != $(this).attr('href')){

            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

    // нажатие на кнопку
    $('.button').mouseover (function (){
        $('.gallery').slideToggle();
        if ($('.button').text() == '+'){
            $('.button').text('-')
        }
        else{
            $('.button').text('+')
        }
    });

    // выделение выбранной картинки 1
    $('.small a img').mouseover(function(){
        $(this).fadeTo(600, 0.6).css({
            border:'1px dotted red',
        })
    });
    $(document).mouseup(function(){
        $('.small a img').fadeTo(0,1).css({
            border:'none',
        });
    });

      // выделение выбранной картинки 2
      $('.small_2 a img').mouseover(function(){
        $(this).fadeTo(600, 0.6).css({
            border:'1px dotted red',
        })
    });
    $(document).mouseup(function(){
        $('.small_2 a img').fadeTo(0,1).css({
            border:'none',
        });
    });

        // выделение выбранной картинки 3
        $('.small_3 a img').mouseover(function(){
            $(this).fadeTo(600, 0.6).css({
                border:'1px dotted red',
            })
        });
        $(document).mouseup(function(){
            $('.small_3 a img').fadeTo(0,1).css({
                border:'none',
            });
        });

 
});