class News{
    constructor(title, text,){
        this.title = title;
        this.text = text;
    }
    getTitle(){
        return this.title;
    }
}
class Sale extends News{
    constructor(title, text,){
        super(title, text)
    }
    show(){
        document.write('<br>' + '<u>' + 'Название: ' + '</u>' + '<br>' + '<b>' + this.title + '</b>' + ': ' + this.text + '<br>' + '<br>')
    }
    getTitle(){
        let title = super.getTitle();
        return'[' + title + ']';
    }
}
let order1 = new Sale( 'Новость дня' ,  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum maiores. At commodi expedita rerum rem cum ex delectus quam.',);
let order2 = new Sale('Новость недели',  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum maiores. At commodi expedita rerum rem cum ex delectus quam.',);
let order3 = new Sale('Главные новости месяца',  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum maiores. At commodi expedita rerum rem cum ex delectus quam.',);
let order4 = new Sale('Главные новости города',  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum maiores. At commodi expedita rerum rem cum ex delectus quam.',);

order1.show();
order2.show();
order3.show();
order4.show();

let Orders = [];
Orders.push(order1);
Orders.push(order2);
Orders.push(order3);
Orders.push(order4);
console.log(Orders);
document.querySelector('.contTable').innerHTML = `<table class = "ord"></table>`

for (let i = 0; i < Orders.length; i++){
    let row = document.createElement('tr')
    row.innerHTML = `
    <td>${Orders[i].title}</td>
    <td>${Orders[i].text}</td>`
    document.querySelector('.ord').appendChild(row)
}
// поиск новости
let search = prompt('введите название новости');
document.querySelector('.contTable_seek').innerHTML = `<table class="ord_seek"></table>`
for(let i=0; i < Orders.length; i++){
    if(search === Orders[i].title){
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${Orders[i].title}</td>
        <td>${Orders[i].text}</td>`
        document.querySelector('.ord_seek').appendChild(row)
    }
}
