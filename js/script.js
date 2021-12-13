'use strict';
const title = document.getElementsByTagName('h1')[0];
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const butonPlus = document.querySelector('.screen-btn');
const percentItems = document.querySelectorAll('.other-items.percent');
const numberItems = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback input[type=range]');
const inputRangeValue = document.querySelector('.rollback.range-value');

const total = document.getElementsByClassName('total-input')[0];
const totalCountInput = document.getElementsByClassName('total-input')[1];
const totalCountOtherInput = document.getElementsByClassName('total-input')[2];
const totalFullCountInput = document.getElementsByClassName('total-input')[3];
const totalCountRollbackInput = document.getElementsByClassName('total-input')[4];


let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 20,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    isEmpty: false,
    init: function () {
        appData.addTitle();

        butonPlus.addEventListener('click', appData.addScreenBlock)
        // flag === true ? startBtn.addEventListener('click', appData.start) : startBtn.disabled = true;
        startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            appData.controller();
        });

    },
    controller: function () {

        appData.isEmpty = false;
        screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            console.log(select.value + "fdvfd");
            console.dir(input.value);
            if (select.value == '' || input.value.trim() === '') {
                appData.isEmpty = true;
            }


        })

        console.log(appData.isEmpty);
        if (appData.isEmpty === false) {
            appData.start();
        }

    },

    addTitle: function () {
        document.title = title.textContent;
        appData.title = title.textContent

    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let i in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[i];
        }
        for (let i in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[i] / 100);
        }

        appData.fullPrice = Number(appData.screenPrice) + appData.servicePricesNumber + appData.servicePricesPercent;
        console.log(appData);
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
    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOtherInput.value = appData.servicePricesPercent + appData.servicePricesNumber;
        totalCountInput.value = appData.screens.reduce((summ, item) => {
            return summ + item.count;
        },0);
        console.dir(appData.screens);
        totalFullCountInput.value = appData.fullPrice;


    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const salectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: salectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        })
    },
    addServices: function () {
        percentItems.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        })
        numberItems.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        })
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.showResult();

        // appData.logger();
    },
    logger: function () {

        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);

    }

}


appData.init();

