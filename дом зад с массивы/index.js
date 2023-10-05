  
document.querySelector('#bt_al').onclick = function () {
    let out = [];

    for (let i = 1; i <= 10; i++) {
        out.push(+document.querySelector('#al_' + i).value);
    }

    // 1. Принимает массив и выводит его на экран
    let result = ''; 
    for (let i = 0; i < out.length; i++) {
        result += out[i];
        if (i < out.length - 1) {
            result += ', '; 
        }
    }
    document.querySelector('.sp').textContent = result;
   


    // 2. Функция принимает массив и выводит только четные элементы
    for (let i = 0; i < out.length; i++) {
        if (out[i] % 2 === 0) {
            console.log(out[i]);
        }
    }

    // 3. Функция принимает массив и возвращает сумму всех элементов массива
    function calculateSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    
    const sum = calculateSum(out);
    console.log(sum);

    // 4. Функция принимает массив и возвращает его максимальный элемент
    function findMax(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    const maxElement = findMax(out);
    console.log(maxElement);
}
