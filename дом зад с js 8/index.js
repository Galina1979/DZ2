let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let but = document.querySelector('.but');
function one(){
    if(num1.value < num2. value){
    alert('-1');
}
else if(num1.value > num2. value){
    alert('1');
}
else{
    alert('0');
}
}
but.onclick = one;




let i1 = document.querySelector('#inp1');
let i2 = document.querySelector('#inp2');
let i3 = document.querySelector('#inp3');
let butbut = document.querySelector('.butbut');
function two() {
    let val1 = i1.value;
    let val2 = i2.value;
    let val3 = i3.value;
    alert(val1 + val2 + val3);
}
butbut.onclick = two;




    

    let number = document.querySelector('#number');
    let Button = document.querySelector('#Button');
    function sum() {
    let num1 = parseInt(number.value);
    if (num1) {
        let sum = 0;
        for (let i = 1; i < num1; i++) {
            if (num1 % i === 0) {
                sum += i;
            }
        }
        if (sum === num1) {
            alert('Число ' + num1 + ' является совершенным.');
        } else {
            alert('Число ' + num1 + ' не является совершенным.');
        }
    } else {
        alert('Пожалуйста, введите корректное число.');
    }
};
Button.onclick = sum;





let number_2 = document.querySelector('#number_2');
  let Button_2 = document.querySelector('#Button_2');

  function formatTime(hours, minutes, seconds) {
    if (minutes === undefined) {
      minutes = '00';
    }
    if (seconds === undefined) {
      seconds = '00';
    }

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return hours + ':' + minutes + ':' + seconds;
  }

  Button_2.onclick = function () {
    let num2 = parseInt(number_2.value);

    if (!isNaN(num2) && num2 >= 0) {
      let formattedTime = formatTime(num2, '00', '00');
      alert('Время: ' + formattedTime);
    } else {
      alert('Пожалуйста, введите корректное число.');
    }
  };



  let secondsInput = document.querySelector('#seconds');
  let convertButton = document.querySelector('#convertButton');
  let res = document.querySelector('#res');

  function convertSecondsToTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
      return 'Пожалуйста, введите корректное число секунд.';
    }

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    remainingSeconds = String(remainingSeconds).padStart(2, '0');

    return hours + ':' + minutes + ':' + remainingSeconds;
  }

  convertButton.onclick = function () {
    let seconds = parseInt(secondsInput.value);
    let formattedTime = convertSecondsToTime(seconds);
    res.textContent = 'Время: ' + formattedTime;
  };