
let age = document.querySelector('.age');
let Butbut = document.querySelector('.butbut');

Butbut.onclick = () => {
    const v = +age.value; 

    if (v < 0) {
        console.log('Возраст не может быть отрицательным');
    } else if (v <= 12) {
        console.log('Ребёнок');
    } else if (v > 12 && v <= 18) {
        console.log('Подросток');
    } else if (v > 18 && v < 60) {
        console.log('Взрослый');
    } else if (v >= 60 && v < 90) {
        console.log('Пенсионер');
    } else if (v >= 90 && v < 120) {
        console.log('Долгожитель');
    } else {
        console.log('Возраст за пределами ожидаемого диапазона');
    }
}



let Number = document.querySelector('.number');
let Sign = document.querySelector('.sign');

Sign.onclick = () => {
let k = +Number.value;
switch (k){
    case 1:
        alert('!');
        break;
    case 2:
        alert('@');
        break;
    case 3:
        alert('#');
        break;
    case 4:
        alert('$');
        break;
    case 5:
        alert('%');
        break;
    case 6:
        alert('^');
        break;
    case 7:
        alert('&');
        break;
    case 8:
        alert('*');
        break;
    case 9:
        alert('(');
        break;
        default:
            alert('Не верные данные');
}
}


let Year = document.querySelector('.year');
let But = document.querySelector('.but');

But.onclick = () => {
    const y = +Year.value; 
if ((y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0)) {
    console.log(y + " - високосный год");
} else {
    console.log(y + " - не високосный год");
}
}


let inp = document.querySelector('.inp');
let butt = document.querySelector('.butt');
butt.onclick = () => {
    const d = +inp.value; 
    let a = 0;
    if (d >= 200 && d < 300) {
        a = 0.03;
    } else if (d >= 300 && d < 500) {
       a = 0.05;
    } else if (d >= 500) {
        a = 0.07;
    }
    const l = d * a;
    const m = d - l;
    console.log('Сумма к оплате со скидкой: ' + m.toFixed(2));
}