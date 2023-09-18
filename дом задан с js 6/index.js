let start = +prompt("Введите первое число:");
let end = +prompt("Введите последнее число:");
let sum = 0;

let s = parseInt(start);
let e = parseInt(end);

if (typeof s === "number" && typeof e === "number" && s<e) {
  for (let i = s; i <= e; i++) {
    sum += i;
  }
  console.log("Сумма чисел в диапазоне от " + s + " до " + e + " равна " + sum);
}  else {
  console.log("Введите корректные числа.");
}


const positiveCountElem = document.querySelector("#positiveCount");
const negativeCountElem = document.querySelector("#negativeCount");
const zeroCountElem = document.querySelector("#zeroCount");
const evenCountElem = document.querySelector("#evenCount");
const oddCountElem = document.querySelector("#oddCount");

const Input = document.querySelector("#numberInput");
const submitButton = document.querySelector(".submitButton");

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

submitButton.onclick = () => {
  const inputText = Input.value;
  const numbersArray = inputText.split(",").map(Number);

  for (let i = 0; i < numbersArray.length; i++) {
    const number = numbersArray[i];

    if (!isNaN(number)) {
      if (number > 0) {
        positiveCount++;
      } else if (number < 0) {
        negativeCount++;
      } else {
        zeroCount++;
      }

      if (number % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    } else {
      alert("Пожалуйста, введите корректные числа.");
      return;
    }
  }
 
  positiveCountElem.textContent = positiveCount;
  negativeCountElem.textContent = negativeCount;
  zeroCountElem.textContent = zeroCount;
  evenCountElem.textContent = evenCount;
  oddCountElem.textContent = oddCount;

  Input.value = "";
};





  const userInput = document.querySelector("#userNumber");
  const But = document.querySelector("#butbut");
  const resultDiv = document.querySelector("#result");

  But.onclick = () => {
    const user = parseInt(userInput.value);

    if (!isNaN(user)) {
       let output = "Числа от 1 до 100, кратные " + user + ":<br>";
  for (let i = 1; i <= 100; i++) {
    if (i % user == 0) {
      output += i + "<br>";
    }
  }
  resultDiv.innerHTML = output;
} else {
  resultDiv.innerHTML = "Пожалуйста, введите корректное число.";
}
  };



 
const numberInp = document.querySelector("#numberInp");
const but = document.querySelector("#but");
const result_o = document.querySelector("#result_o");

but.onclick = () => {
    const n = parseInt(numberInp.value);

    if (isNaN(n)) {
        result_o.textContent = "Пожалуйста, введите корректное число.";
    } else {
        if (isPrimeNumber(n)) {
            result_o.textContent = "Число является простым.";
        } else {
            result_o.textContent = "Число не является простым.";
        }
    }
};

function isPrimeNumber(n) {
    if (n <= 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}