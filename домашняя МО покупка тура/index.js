$(document).ready(function(){


    let links_show = true;

$('.menu img').click(function (){

    if (links_show){
        $('.head_one .links').show(600);
    }
    else{
        $('.head_one .links').hide(600);
    }
    links_show = !links_show;
    
});

// 1 модальное окно покупка тура

$('.se1 .start').click(function(){
    $('.overlay').show();
});

$('.overlay .close-popup').click(function(){
    $('.overlay').hide();
});

// 2 модальное заполнение формы на покупку

// $('.overlay button').click(function(){
//     $('.shop').show();
// });

// $('.shop .close-popup_shop').click(function(){
//     $('.shop').hide();
// });

$(document).ready(function() {
    $('.overlay button').click(function() {
        $('.shop').show();
    });

    $('.shop .close-popup_shop').click(function() {
        $('.shop').hide();
    });

    $('.but_p').click(function() {
        // Проверка заполнения полей и выделение незаполненных
        $('.input-name, .input-surname, .input-patronymic, .input-check-in, .input-check-out, .input-guests:checked, .input-comment').removeClass('error');
        let error = false;

        if ($('.input-name').val() === '') {
            $('.input-name').addClass('error');
            error = true;
        }
        if ($('.input-surname').val() === '') {
            $('.input-surname').addClass('error');
            error = true;
        }
        if ($('.input-patronymic').val() === '') {
            $('.input-patronymic').addClass('error');
            error = true;
        }
        if ($('.input-check-in').val() === '') {
            $('.input-check-in').addClass('error');
            error = true;
        }
        if ($('.input-check-out').val() === '') {
            $('.input-check-out').addClass('error');
            error = true;
        }
        if ($('.input-guests:checked').length === 0) {
            $('.input-guests').addClass('error');
            error = true;
        }
        if ($('.input-comment').val() === '') {
            $('.input-comment').addClass('error');
            error = true;
        }

        // Если все поля заполнены, блокируем их
        if (error === false) {
            $('.input-name, .input-surname, .input-patronymic, .input-check-in, .input-check-out, .input-guests, .input-comment').attr('disabled', 'disabled');
        }
    });
});


// __________________________

// проверка заполнения формы из 5 блоков
// $(':submit').click (function(e){
//     e.preventDefault();
//     // 1)
//     if($('.name_1').val() !='' && $('.email_1').val () !='' && $('.phone_1').val ()!='' && $('.textarea').val ()!=''){
//         alert('поля формы успешно заполнены');
        
//         $('.name_1').attr('disabled', 'disabled');
//         $('.email_1').attr('disabled', 'disabled');
//         $('.phone_1').attr('disabled', 'disabled');
//         $('.textarea').attr('disabled', 'disabled');
//     }
//     else{
//         alert('не все поля заполнены');
//     }




// $('.block2 input').each(function (){
// let flag = true;
// if(flag){
//     if ($(this).is(':checket')){
//         $('.block2 input').each(function (){
//          $(this).attr('disabled', 'disabled');
//         })
//     }
// }
// else{
//     alert('Выберите способ связи');
// }
// flag = !flag;
// });

// });

// настройка галлереи

$('.point a').click(function(e){
    e.preventDefault();
    if($('.gal_big img').attr('src') != $(this).attr('href')){
        $('.gal_big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
            width:'100%',
            height:'100%',
        })
    }
});
$('.point a img').mouseup(function(){
    $(this).fadeTo(2000, 0.6);
});
$(document).mouseup(function(){
    $('.point a img').fadeTo(0, 1);
});



$('.point_1 a').click(function(e){
    e.preventDefault();
    if($('.gal_big_1 img').attr('src') != $(this).attr('href')){
        $('.gal_big_1 img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
            width:'100%',
            height:'100%',
        })
    }
});
$('.point_1 a img').mouseup(function(){
    $(this).fadeTo(2000, 0.6);
});
$(document).mouseup(function(){
    $('.point_1 a img').fadeTo(0, 1);
});


$('.point_2 a').click(function(e){
    e.preventDefault();
    if($('.gal_big_2 img').attr('src') != $(this).attr('href')){
        $('.gal_big_2 img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
            width:'100%',
            height:'100%',
        })
    }
});
$('.point_2 a img').mouseup(function(){
    $(this).fadeTo(2000, 0.6);
});
$(document).mouseup(function(){
    $('.point_2 a img').fadeTo(0, 1);
});

// -------------------------модальное 1 от ссылки

// $('a[href="fhoto"]').click(function(e) {
//     $('.fhoto').fadeIn();
// });
$('.a[href="fhoto"]').click(function(e) {
    $('.fhoto').show();
});

// Закрывать модальное окно при клике за его пределами
$(document).mouseup(function(e) {
    $('.fhoto').fadeOut();
});
// $(document).mouseup(function(e) {
//     if (!$('.gallery').is(e.target) && $('.gallery').has(e.target).length === 0) {
//         $('.gallery').hide();
//         $('.fhoto').text('+');
//     }
// });

// модальное окно 2 от ссылки

$('a[href="modal_2"]').click(function() {
    $('.modal_2').fadeIn();
    var image = $('.suk img');

    image.animate({ opacity: 1, width: '120%', height: '120%' }, 2000) // увеличение картинки
        .animate({ opacity: 1, width: '100%', height: '100%' }, 2000); // уменьшение картинки
});

$(document).mouseup(function(e) {
    if (!$('.fon_8').is(e.target) && $('.fon_8').has(e.target).length === 0) {
        $('.fon_8').hide();
        $('.modal_2').text('+');
    }
});


});