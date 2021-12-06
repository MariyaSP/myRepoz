'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки").trim();
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Первый, Второй, Третий");

        do {
            appData.screenPrice = prompt("Сколько будет стоить такая работа?");
        }
        while (!appData.isNumber(appData.screenPrice))
        appData.screenPrice = Number(appData.screenPrice);
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let price = 0;
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "Кофе");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "Бар");
            }

            do {
                price = prompt("Сколько это будет стоить?");
            }
            while (!appData.isNumber(price))
            sum += Number(price);

        }
        return sum;
    },

    getFullPrice: function () {
        return Number(appData.screenPrice) + appData.allServicePrices;
    },

    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },

    getServicePercentPrices: function () {
        return appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    },

    getRollbackMessage: function () {
        switch (true) {
            case appData.fullPrice >= 30000:
                return "Даем скидку в 10%";
            case appData.fullPrice >= 15000 && appData.fullPrice < 30000:
                return "Даем скидку в 5%";
            case appData.fullPrice >= 0 && appData.fullPrice < 15000:
                return "Скидка не предусмотрена";
            case appData.fullPrice < 0:
                return "Что-то пошло не так";
        }
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();
    },
    logger: function () {

        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        for (let key in appData) {
            console.log(key + ":" + appData[key]);
        }
    }

}

appData.start();

