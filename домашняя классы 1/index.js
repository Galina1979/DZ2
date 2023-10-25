class Worker {
    constructor(name, surname, rate, days) {
      this.name = name;
      this.surname = surname;
      this.rate = rate;
      this.days = days;
    }
  
    getSalary() {
      return this.rate * this.days;
    }
  
    getFullName() {
      return `${this.name} ${this.surname}`;
    }
}

const worker1 = new Worker('Иван', 'Иванов', 100, 20);
const worker2 = new Worker('Петр', 'Петров', 120, 15);

console.log(`Имя Фамилия: ${worker1.getFullName()}`);
console.log(`Зарплата: ${worker1.getSalary()}`);
  
console.log(`Имя Фамилия: ${worker2.getFullName()}`);
console.log(`Зарплата: ${worker2.getSalary()}`);

document.querySelector('.class_name').innerHTML =
  worker1.getFullName() + ' ' +
  'ставка за день работы: ' + worker1.rate + ' ' +
  'количество отработанных дней: ' + worker1.days;

document.querySelector('.class_name').innerHTML +=
  '<br>' + worker2.getFullName() + ' ' +
  'ставка за день работы: ' + worker2.rate + ' ' +
  'количество отработанных дней: ' + worker2.days;

alert(worker1.getFullName() + '\nЗарплата: ' + worker1.getSalary());
alert(worker2.getFullName() + '\nЗарплата: ' + worker2.getSalary());