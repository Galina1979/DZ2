
// $(document).ready(function () {
//     $('.text1').mask("9999 9999 9999 9999");
//     $('.data_1').mask("99");
//     $('.data_2').mask("9999");
//     $('.kod').mask("999");

//       $('.text1, .text2, .data_1, .data_2, .kod').on('blur', function () {
//         validateForm();
//     });

//     function validateForm() {
//         if ($('.text1').val() === ''){
//             console.log('Заполните все поля');
//          }
//          if ($('.text2').val() === ''){
//             console.log('Заполните все поля');
//          }
//          if ($('.data_1').val() === ''){
//             console.log('Заполните все поля');
//          }
//          if ($('.data_2').val() === ''){
//             console.log('Заполните все поля');
//          }
//          if ($('.kod').val() === ''){
//             console.log('Заполните все поля');
//          }
//          else {
//             alert('Поля формы успешно заполнены');
//             $('.text1, .text2, .data_1, .data_2, .kod').attr('disabled', 'disabled');
//         }
//     }
// });


$(document).ready(function () {
    $('.text1').mask("9999 9999 9999 9999");
    $('.data_1').mask("99");
    $('.data_2').mask("9999");
    $('.kod').mask("999");

      $('.text1, .text2, .data_1, .data_2, .kod').on('blur', function () {
        validateForm();
    });
    function validateForm() {
        if ($('.text1').val() === '' || $('.text2').val() === '' || $('.data_1').val() === '' || $('.data_2').val() === '' || $('.kod').val() === '') {
            console.log('Заполните все поля');
        }
        else {
            alert('Поля формы успешно заполнены');
            console.log('Поля формы успешно заполнены');
            $('.text1, .text2, .data_1, .data_2, .kod').attr('disabled', 'disabled');
        }
    }
});


