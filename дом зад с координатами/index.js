
// 1) Функция принимает объект-прямоугольник и выводит
// информацию о нем (где какая точка расположена)
document.querySelector('#bt_al').onclick = function () {
    const x1 = +document.querySelector('#al_1').value;
    const y1 = +document.querySelector('#al_2').value;
    const x2 = +document.querySelector('#al_3').value;
    const y2 = +document.querySelector('#al_4').value;

    const resultElement = document.querySelector('#result');
    const topLeft = { x: x1, y: y1 };
    const topRight = { x: x2, y: y1 };
    const bottomLeft = { x: x1, y: y2 };
    const bottomRight = { x: x2, y: y2 };
    const points = [topLeft, topRight, bottomLeft, bottomRight];

    resultElement.innerHTML = '';
    for (let i = 0; i < points.length; i++) {
        const point = points[i];
        resultElement.innerHTML += `Точка ${i + 1}: (x:${point.x}, y:${point.y})<br>`;
    }
// 2)Функция принимает объект-прямоугольник и возвращает
// его ширину
document.querySelector('#bt_al_2').onclick = function () {
    const x1 = +document.querySelector('#al_1').value;
    const x2 = +document.querySelector('#al_3').value;

    const width = Math.abs(x2 - x1);

    const resultElement_2 = document.querySelector('#result_2');
    resultElement_2.innerHTML = `Ширина прямоугольника: ${width}`;
};

// 3)Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// ширину
document.querySelector('#bt_al_3').onclick = function () {
    const x1 = +document.querySelector('#al_1').value;
    const x2 = +document.querySelector('#al_3').value;
    const changeValue = +document.querySelector('#al_5').value;

    const newWidth = Math.abs(x2 - x1) + changeValue;

    const resultElement_3 = document.querySelector('#result_3');
    resultElement_3.innerHTML = `Новая ширина прямоугольника: ${newWidth}`;
};

// 4) Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить
// высоту
document.querySelector('#bt_al_4').onclick = function () {
    const y1 = +document.querySelector('#al_2').value;
    const y2 = +document.querySelector('#al_4').value;
    const changeValue = +document.querySelector('#al_6').value;

    const newHeight = Math.abs(y1 - y2) + changeValue;

    const resultElement_4 = document.querySelector('#result_4');
    resultElement_4.innerHTML = `Новая высота прямоугольника: ${newHeight}`;
};
// 5)Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его
// сдвинуть.
document.querySelector('#bt_al_5').onclick = function () {
    const x1 = +document.querySelector('#al_1').value;
    const x2 = +document.querySelector('#al_3').value;
    const changeValue = +document.querySelector('#al_7').value;
    const newX1 = x1 + changeValue;
    const newX2 = x2 + changeValue;

    const resultElement_5 = document.querySelector('#result_5');
    resultElement_5.innerHTML = `Новые координаты прямоугольника: (x:${newX1}, y:${y1}) - (x:${newX2}, y:${y2})`;
};
// 6) Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и
// координаты точки.
document.querySelector('#bt_al_6').onclick = function () {
    const x1 = +document.querySelector('#al_1').value;
    const x2 = +document.querySelector('#al_3').value;
    const y1 = +document.querySelector('#al_2').value;
    const y2 = +document.querySelector('#al_4').value;
    const x = +document.querySelector('#al_8').value;
    const y = +document.querySelector('#al_9').value;

    let isInsideRectangle = false;
    if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
        isInsideRectangle = true;
    }
    let message;
    if (isInsideRectangle) {
        message = 'Точка находится внутри прямоугольника.';
    } else {
        message = 'Точка находится снаружи прямоугольника.';
    }
    alert(message);
};
};