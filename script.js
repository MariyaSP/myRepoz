let rollback = 20;


const title = prompt("Как называется ваш проект?");

const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить такая работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?")
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?")


const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
console.log("Стоимость проекта за вычетом отката: " + servicePercentPrice);


switch (true) {
    case fullPrice >= 30000:
        console.log("Даем скидку в 10%");
        break;
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log("Даем скидку в 5%");
        break;
    case fullPrice >= 0 && fullPrice < 15000:
        console.log("Скидка не предусмотрена");
        break;
    case fullPrice<0:
        console.log("Что-то пошло не так");
        break;        
}


// console.log("title " + typeof title, ", fullPrice " + typeof fullPrice, ", adaptive " + typeof adaptive);
// console.log(screens.length);

// console.log("Стоимость верстки экранов " + screenPrice + " рублей");
// console.log("Стоимость разработки сайта " + fullPrice + " рублей");

// console.log(screens.toLocaleLowerCase().split(", "));
// console.log("Процент отката посреднику за работу:" + fullPrice * (rollback / 100));
