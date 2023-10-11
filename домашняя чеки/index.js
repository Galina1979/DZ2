// Массив для хранения списка покупок
let List = [];

// Функция для добавления новой покупки в список
function addItem() {
    const newItemInput = document.getElementById("new-item");
    const quantityInput = document.getElementById("quantity");

    const itemName = newItemInput.value;
    const itemQuantity = quantityInput.value;

    if (itemName.trim() !== "" && itemQuantity.trim() !== "") {
        // Создаем объект для новой покупки
        const newItem = {
            name: itemName,
            quantity: itemQuantity,
            bought: false, // По умолчанию товар не куплен
        };

        // Добавляем новую покупку в массив
        List.push(newItem);

        // Очищаем поля ввода
        newItemInput.value = "";
        quantityInput.value = "";

        // Обновляем список покупок
        displayList();
    }
}
// Функция для отметки покупки как купленной
function markAsBought(index) {
    List[index].bought = true;
    displayList();
}
// Функция для отображения списка покупок
function displayList() {
    const ListContainer = document.getElementById("list");
    ListContainer.innerHTML = "";

    List.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = item.name + " (" + item.quantity + ")" +
            "<button onclick=\"markAsBought(" + index + ")\">Куплено</button>" +
            (item.bought ? " (Куплено)" : "");
        ListContainer.appendChild(listItem);
    });
}
// Инициализируем список покупок
displayList();



const shoppingCart = [
    { name: "Сок", quantity: 2, price: 100 },
    { name: "Шоколад", quantity: 1, price: 100 },
    { name: "Макароны", quantity: 4, price: 50 },
    { name: "Мясо", quantity: 1, price: 500 },
];
console.log(shoppingCart);

// Распечатка чека на экран:
function printReceipt(cart) {
    console.log("Чек на покупку:");
    cart.forEach((item) => {
        console.log(item.name + " (" + item.quantity + "): $" + item.price * item.quantity);
    });
}


// Подсчет общей суммы покупки:

function calculateTotal(cart) {
    let total = 0;
    cart.forEach((item) => {
        total += item.price * item.quantity;
    });
    return total;
}

// Получение самой дорогой покупки в чеке:

function findMostExpensiveItem(cart) {
    let mostExpensive = null;
    cart.forEach((item) => {
        if (!mostExpensive || item.price > mostExpensive.price) {
            mostExpensive = item;
        }
    });
    return mostExpensive;
}

// Подсчет средней стоимости одного товара в чеке:
function calculateAveragePrice(cart) {
    if (cart.length === 0) {
        return 0;
    }
    let total = 0;
    cart.forEach((item) => {
        total += item.price;
    });
    return total / cart.length;
}

printReceipt(shoppingCart);
console.log("Общая сумма покупки: $" + calculateTotal(shoppingCart));
const mostExpensiveItem = findMostExpensiveItem(shoppingCart);
console.log("Самая дорогая покупка: " + mostExpensiveItem.name);
console.log("Средняя стоимость товара: $" + calculateAveragePrice(shoppingCart));