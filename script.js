const rollback = 20;

let title = prompt("Как называется ваш проект?").trim();
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = +prompt("Сколько будет стоить такая работа?");
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?")
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice;

const allServicePrices = function getAllServicePrices() {
    return servicePrice1 + servicePrice2;
}

function getRollbackMessage() {
    switch (true) {
        case fullPrice >= 30000:
            return "Даем скидку в 10%";
        case fullPrice >= 15000 && fullPrice < 30000:
            return "Даем скидку в 5%";
        case fullPrice >= 0 && fullPrice < 15000:
            return "Скидка не предусмотрена";
        case fullPrice < 0:
            return "Что-то пошло не так";

    }
}

function getFullPrice() {
    return screenPrice + allServicePrices();
}

function getTitle(titleOld) {
    return title = titleOld.slice(0, 1).toUpperCase() + titleOld.slice(1, titleOld.length + 1).toLowerCase();
}

fullPrice = getFullPrice();

const servicePercentPrice = function getServicePercentPrices() {
    return fullPrice - fullPrice * (rollback / 100)
}

console.log(getTitle(title));

console.log("title " + typeof title, ", fullPrice " + typeof fullPrice, ", adaptive " + typeof adaptive);
console.log(screens.toLocaleLowerCase().split(", "));
console.log("Скидка: " + getRollbackMessage());
console.log("Стоимость за вычетом процента отката посреднику:" + servicePercentPrice());

