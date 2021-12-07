'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    asking: function () {

        do {
            appData.title = prompt("Как называется ваш проект?").trim();

        } while (appData.isNumber(appData.title))

        for (let i = 0; i < 2; i++) {
            let name;

            do {
                name = prompt("Какие типы экранов нужно разработать?").trim();

            } while (appData.isNumber(name))


            let price = 0;

            do {
                price = prompt("Сколько будет стоить такая работа?");
                console.log(price);
            }
            while (!appData.isNumber(price))


            appData.screens.push({ id: i, name: i + '-' + name, price: price })
        }

        for (let i = 0; i < 2; i++) {

            let name;
            do {
                name = prompt("Какой дополнительный тип услуги нужен?");

            } while (appData.isNumber(name))


            let price = 0;


            do {
                price = prompt("Сколько это будет стоить?");
            }
            while (!appData.isNumber(price))

            appData.services[name] = +price;

        }

        appData.screenPrice = Number(appData.screenPrice);
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function () {

        appData.screenPrice = appData.screens.reduce(function (sum, item) {
            console.log("asdfghj" + item.price);
            return sum += +item.price;
        }, 0);

        console.log("стоимость экранов" + appData.screenPrice);

        for (let i in appData.services) {
            appData.allServicePrices += appData.services[i];
        }
    },

    getFullPrice: function () {
        appData.fullPrice = Number(appData.screenPrice) + appData.allServicePrices;
    },

    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
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
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
    },
    logger: function () {

        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        // for (let key in appData) {
        //     console.log(key + ":" + appData[key]);
        // }
    }

}

appData.start();

