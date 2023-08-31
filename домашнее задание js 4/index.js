const Age = document.querySelector('.age');
const Butbut = document.querySelector('.butbut');

Butbut.onclick = () => {
    const number = parseFloat(Age.value);

    if (number > 0) {
        alert("Число положительное");
    } 
    else if (number < 0) {
        alert("Число отрицательное");
    } 
    else {
        alert("Число равно нулю");
    }
};

const Number = document.querySelector('.number');
const Sign = document.querySelector('.sign');

Sign.onclick = () => {
    const age = parseInt(Number.value);

    if (age >= 0 && age <= 120) {
        console.log("Возраст корректен");
         } 
    else if (age >120 && age < 150) {
        console.log("Вы долгожитель!");
    } 
    else {
        console.log("Возраст некорректен");
    }
};


const Inp = document.querySelector('.inp');
const But = document.querySelector('.but');
const inpOne = document.querySelector('.inp_one');

But.onclick = () => {
    const num = parseFloat(Inp.value);
    const absoluteValue = Math.abs(num);

    inpOne.value = absoluteValue;
};


const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');
const inp3 = document.querySelector('.inp3');
const but1 = document.querySelector('.but1');

but1.onclick = () => {
    const hours = parseInt(inp1.value);
    const minutes = parseInt(inp2.value);
    const seconds = parseInt(inp3.value);

    if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60) {
        console.log("Время корректно");
    } else {
        console.log("Время некорректно");
    }
};



const Age1 = document.querySelector('.age1');
const Age2 = document.querySelector('.age2');
const Age3 = document.querySelector('.age3');
const Result = document.querySelector('.result');
const Butt = document.querySelector('.butt');

Butt.onclick = () => {
    const number1 = parseFloat(Age1.value);
    const operator = Age2.value;
    const number2 = parseFloat(Age3.value);

    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            result = 'Неверные данные';
    }

    Result.value = result;
};



const planetName = prompt("Введите название планеты:");

switch (planetName) {
    case 'земля':
        alert('Привет, землянин!');
        break;
    default:
        alert('Привет, инопланетянин!');
}