
$(document).ready(function(){
    const butbut = document.querySelector('.butbut');
    butbut.addEventListener('click', function() {
  const q1 = document.querySelector('input[name="q1_page"]:checked');
  const q2 = document.querySelector('input[name="q2_page"]:checked');
  const q3 = document.querySelector('input[name="q3_page"]:checked');
  const answer = document.querySelector('.answer');
  if (!q1 || !q2 || !q3) {
    alert('Пожалуйста, ответьте на все вопросы.');
    return;
  }
  document.querySelectorAll('input[name="q1_page"]').forEach((radio) => {
    radio.disabled = true;
  });
  document.querySelectorAll('input[name="q2_page"]').forEach((radio) => {
    radio.disabled = true;
  });
  document.querySelectorAll('input[name="q3_page"]').forEach((radio) => {
    radio.disabled = true;
  });
  let a = 0;
  let one = parseInt(q1.value);
  let two = parseInt(q2.value);
  let three = parseInt(q3.value);
  switch (one) {
    case 1:
      a = a + 0;
      break;
    case 2:
      a = a + 2;
      break;
    case 3:
      a = a + 0;
      break;
    default:
      alert('No');
  }
  let b = 0;
  switch (two) {
    case 1:
      b = b + 0;
      break;
    case 2:
      b = b + 2;
      break;
    case 3:
      b = b + 0;
      break;
    default:
      alert('No');
  }
  let c = 0;
  switch (three) {
    case 1:
      c = c + 0;
      break;
    case 2:
      c = c + 0;
      break;
    case 3:
      c = c + 2;
      break;
    default:
      alert('No');
  }
  const result = document.querySelector(".answer");
  result.value = "Вы набрали: " + (a + b + c);
});
$('.butbut').click(function(e) {
    $(':input[type="submit"]').prop('disabled', true);
    e.preventDefault();
  });
// ==============================
const butbut_1 = document.querySelector('.butbut_1');
  butbut_1.addEventListener('click', function() {
  const q1 = document.querySelector('input[name="q1_page1"]:checked');
  const q2 = document.querySelector('input[name="q2_page1"]:checked');
  const q3 = document.querySelector('input[name="q3_page1"]:checked');
  const answer = document.querySelector('.answer');
  if (!q1 || !q2 || !q3) {
    alert('Пожалуйста, ответьте на все вопросы.');
    return;
  }
  document.querySelectorAll('input[name="q1_page1"]').forEach((radio) => {
    radio.disabled = true;
  });
  document.querySelectorAll('input[name="q2_page1"]').forEach((radio) => {
    radio.disabled = true;
  });
  document.querySelectorAll('input[name="q3_page1"]').forEach((radio) => {
    radio.disabled = true;
  });
  let a = 0;
  let one = parseInt(q1.value);
  let two = parseInt(q2.value);
  let three = parseInt(q3.value);
  switch (one) {
    case 1:
      a = a + 2;
      break;
    case 2:
      a = a + 0;
      break;
    case 3:
      a = a + 0;
      break;
    default:
      alert('No');
  }
  let b = 0;
  switch (two) {
    case 1:
      b = b + 2;
      break;
    case 2:
      b = b + 0;
      break;
    case 3:
      b = b + 0;
      break;
    default:
      alert('No');
  }
  let c = 0;
  switch (three) {
    case 1:
      c = c + 0;
      break;
    case 2:
      c = c + 0;
      break;
    case 3:
      c = c + 2;
      break;
    default:
      alert('No');
  }
  const result = document.querySelector(".answer_1");
  result.value = "Вы набрали: " + (a + b + c);
});
$('.butbut_1').click(function(e) {
    $(':input[type="submit"]').prop('disabled', true);
    e.preventDefault();
  });
// =======================
const butbut_2 = document.querySelector('.butbut_2');
  butbut_2.addEventListener('click', function() {
  const q1 = document.querySelector('input[name="q1_page2"]:checked');
  const q2 = document.querySelector('input[name="q2_page2"]:checked');
  const q3 = document.querySelector('input[name="q3_page2"]:checked');
  const answer = document.querySelector('.answer');
  if (!q1 || !q2 || !q3) {
    alert('Пожалуйста, ответьте на все вопросы.');
    return;
  }
  document.querySelectorAll('input[name="q1_page2"]').forEach((radio) => {
    radio.disabled = true;
  });
  document.querySelectorAll('input[name="q2_page2"]').forEach((radio) => {
    radio.disabled = true;
  });
  document.querySelectorAll('input[name="q3_page2"]').forEach((radio) => {
    radio.disabled = true;
  });
  let a = 0;
  let one = parseInt(q1.value);
  let two = parseInt(q2.value);
  let three = parseInt(q3.value);
  switch (one) {
    case 1:
      a = a + 0;
      break;
    case 2:
      a = a + 2;
      break;
    case 3:
      a = a + 0;
      break;
    default:
      alert('No');
  }
  let b = 0;
  switch (two) {
    case 1:
      b = b + 2;
      break;
    case 2:
      b = b + 0;
      break;
    case 3:
      b = b + 0;
      break;
    default:
      alert('No');
  }
  let c = 0;
  switch (three) {
    case 1:
      c = c + 0;
      break;
    case 2:
      c = c + 0;
      break;
    case 3:
      c = c + 2;
      break;
    default:
      alert('No');
  }
  const result = document.querySelector(".answer_2");
  result.value = "Вы набрали: " + (a + b + c);
});
$('.butbut_2').click(function(e) {
    $(':input[type="submit"]').prop('disabled', true);
    e.preventDefault();
  });

    let tab = document.querySelectorAll('.tab');  
    init();
    tab.forEach(function(element){
        element.onclick = showTabs;
    });
    function init(){
        let tabBody = document.querySelectorAll('.tab-body');
        for (let i = 1; i < tabBody.length; i++){
            tabBody[i].style.display = 'none';
        }}
        function showTabs(){
           let data = this.getAttribute('data');  
            let tabBody = document.querySelectorAll('.tab-body');
            for (let i = 0; i< tabBody.length; i++){
                tabBody[i].style.display = 'none';
            }
            document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
        }
        $('.tabs li').mouseover(function(){
            $(this).css({
                'font-weight':'bold',
                'color':'white'
            })
        });
        $('.tabs li').mouseout(function(){
            $(this).css({
                'font-weight':'normal',
                'color':'black'
            })
        });
        $('.tabs li').mouseover(function(){
            $(this).css({      
            'background-color':'indianRed'
            })
        });
        $('.tabs li').mouseout(function(){
            $(this).css({
                'background-color':'white'
            })
        });

     















});
