



let butCol = document.querySelector('.but_col');
let col = document.querySelector('.col');
let сCol = document.querySelector('.container');

butCol.onclick = () => {
    console.log(col.value);
    сCol.style.backgroundColor = col.value;
}

let butCol_1 = document.querySelector('.but_col-1'); 
let col_1 = document.querySelector('.col-1'); 
let сCol_1 = document.querySelector('.name');

butCol_1.onclick = () => {
    console.log(col_1.value);
    сCol_1.style.backgroundColor = col_1.value;
}


let butCol_2 = document.querySelector('.but_col-2'); 
let col_2 = document.querySelector('.col-2'); 
let h_3 = document.querySelector('.name h3');

butCol_2.onclick = () => {
    console.log(col_2.value);
    h_3.style.color = col_2.value;
}

let butCol_3 = document.querySelector('.but_col-3'); 
let col_3 = document.querySelector('.col-3'); 
let box_3 = document.querySelector('.box');

butCol_3.onclick = () => {
    console.log(col_3.value);
    box_3.style.color = col_3.value;
}

let butb = document.querySelector('.butb'); 

butb.onclick = () => {
    let cardNumber = document.querySelector('.name1 input').value;
    let cardOwner = document.querySelector('.name2 input').value;
    let date = document.querySelector('.block1 input').value;
    let year = document.querySelector('.block2 input').value;
    let code = document.querySelector('.block3 input').value;

    console.log('Номер карты: ' + cardNumber);
    console.log('Имя владельца: ' + cardOwner);
    console.log('Дата: ' + date);
    console.log('Год: ' + year);
    console.log('Код: ' + code);

    document.querySelector('.dom').innerHTML = 'Номер карты: ' + cardNumber + '<br>' +
                                               'Имя владельца: ' + cardOwner + '<br>' +
                                               'Дата: ' + date + '<br>' +
                                               'Год: ' + year + '<br>' +
                                               'Код: ' + code;
}