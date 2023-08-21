
let a = document.querySelector('.in_one');
let c = document.querySelector('.but_one');
const b = 2;

c.onclick = () => {
    const d = +a.value; // Преобразуем введенное значение в число
    const result = d ** b; // Возводим во 2 степень
    alert('Число во 2 степени: ' + result);
}
// --------------------------------------------------
let inTwo = document.querySelector('.in_two');
let inThree = document.querySelector('.in_three');
let butTwo = document.querySelector('.but_two');

butTwo.onclick = () => {
    const firstNumber = +inTwo.value; 
    const secondNumber = +inThree.value; 
    const result_two =(firstNumber + secondNumber) / 2;  //среднее арифметическое 2 чисел
    alert('Результат ' + result_two);
}
// --------------------------------------------------
let inIn = document.querySelector('.in_in');
let butBut = document.querySelector('.but_but');

butBut.onclick = () => {
    alert('Площадь'+'   '+ (+inIn.value * +inIn.value));
}

// --------------------------------------------------
const t_four = 0.621371;
let inFour = document.querySelector('.in_four');
let butFour = document.querySelector('.but_four');

butFour.onclick = () => {
    alert('Мили'+'   '+ (+t_four * +inFour.value));
}

// --------------------------------------------------

let aInput = document.querySelector('.a_input');
let bInput = document.querySelector('.b_input');
let calculateButton = document.querySelector('.calculate_button');

calculateButton.onclick = () => {
    const a = +aInput.value;
    const b = +bInput.value;

    if (a === 0) {
       alert("Уравнение не является линейным");
    } else {
        const x = -b / a;
       alert(`Значение x:` + x);
    }
}
// --------------------------------------------------
let hoursInput = document.querySelector('.hours_input');
let minutesInput = document.querySelector('.minutes_input');
let But = document.querySelector('.but');

But.onclick = () => {
    const Hours = +hoursInput.value;
    const Minutes = +minutesInput.value;

    const hoursUntilNextDay = 24 - Hours - (Minutes > 0 ? 1 : 0);
    const minutesUntilNextDay = Minutes > 0 ? 60 - Minutes : 0;

    alert('До следующего дня осталось ' + hoursUntilNextDay + ' часов ' + minutesUntilNextDay + ' минут');
}