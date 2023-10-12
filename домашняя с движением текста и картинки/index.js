$('.sd_2').click(function start(){
    $('.suk img')
        .animate({opacity: 1, marginLeft: "80%"}, 4000) // движение от правого края
        .animate({opacity: 1, marginLeft: "0%"}, 4000, start) // возвращение влево
});

$('.sd_2').click(function start(){
$('.ck')
       .animate({'font-size': '24',},10000)
       .animate({'font-size': '11',},2000, start);
});