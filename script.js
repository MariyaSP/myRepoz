'use strict';
const rollback = 20;

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;


const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки").trim();
    screens = prompt("Какие типы экранов нужно разработать?", "Первый, Второй, Третий");

    do {
        screenPrice = prompt("Сколько будет стоить такая работа?");
    }
    while (!isNumber(screenPrice))
    
    screenPrice = Number(screenPrice);
    
    adaptive = confirm("Нужен ли адаптив на сайте?");
    
}

const allServicePrices = function () {
    let sum = 0;
    let servicePrice;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "Кофе");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "Бар");
        }

        do {
            servicePrice = prompt("Сколько это будет стоить?");
        }
        while (!isNumber(servicePrice))
        sum += Number(servicePrice);

    }
    return sum;

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
    // console.log("Цена доп услуг " + allServicePrices());
    return Number(screenPrice) + allServicePrices();
}

function getTitle(titleOld) {
    return titleOld.slice(0, 1).toUpperCase() + titleOld.slice(1, titleOld.length + 1).toLowerCase();
}

const servicePercentPrice = function getServicePercentPrices() {
    return fullPrice - fullPrice * (rollback / 100)
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

asking();
console.log(getTitle(title));

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

const fullPrice = getFullPrice();
console.log(screens.toLocaleLowerCase().split(", "));
console.log("Скидка: " + getRollbackMessage());
console.log("Стоимость за вычетом процента отката посреднику:" + servicePercentPrice());