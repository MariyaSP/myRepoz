'use strict';
const title = document.getElementsByTagName('h1')[0];
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const butonPlus = document.querySelector('.screen-btn');
const percentItems = document.querySelectorAll('.other-items.percent');
const numberItems = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback input[type=range]');
const inputRangeValue = document.querySelector('.rollback').querySelector('.range-value');

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
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    isEmpty: false,
    init: function () {
        this.addTitle();
        butonPlus.addEventListener('click', this.addScreenBlock);
        inputRange.addEventListener('input', this.addRange.bind(this));
        startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.controller();
        });
        resetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.reset();
        });

    },
    controller: function () {

        this.isEmpty = false;
        screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            if (select.value == '' || input.value.trim() === '') {
                this.isEmpty = true;
            }
        })

        if (this.isEmpty === false) {
            this.start();
        }
    },

    addTitle: function () {
        document.title = title.textContent;
        this.title = title.textContent
    },

    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
        }

        for (let i in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[i];
        }
        for (let i in appData.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[i] / 100);
        }
        this.servicePercentPrice = this.fullPrice = Number(this.screenPrice) + this.servicePricesNumber + this.servicePricesPercent;
        this.servicePercentPrice = this.fullPrice + this.fullPrice * (this.rollback / 100);

    },

    showResult: function () {
        total.value = this.screenPrice;
        totalCountOtherInput.value = this.servicePricesPercent + this.servicePricesNumber;
        totalCountInput.value = this.screens.reduce((summ, item) => {
            return summ + item.count;
        }, 0);

        totalFullCountInput.value = this.fullPrice;
        totalCountRollbackInput.value = this.servicePercentPrice;

        screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            select.disabled = true;
            input.disabled = true;
        })
        startBtn.style.display = "none";
        resetBtn.style.display = "";

    },
    addScreens: function () {

        screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const salectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index,
                name: salectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        })
    },
    addServices: function () {
        percentItems.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        })
        numberItems.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        })
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addRange: function () {

        inputRangeValue.textContent = (inputRange.value + '%');
        this.rollback = inputRange.value;
        if (totalCountRollbackInput.value!='0') {
            totalCountRollbackInput.value = this.fullPrice + this.fullPrice * (this.rollback / 100);
        }

    },
    start: function () {
        this.addScreens();
        this.addServices();
        this.addPrices();
        this.showResult();
        // appData.logger();
    },
    reset: function () {
        percentItems.forEach(item => {
            item.querySelector('input[type=checkbox]').checked = false;
        })
        numberItems.forEach(item => {
            item.querySelector('input[type=checkbox]').checked = false;
        })

        screens = document.querySelectorAll('.screen');

        screens.forEach((screen, index) => {
            if (index == 0) {
                const input = screen.querySelector('input');
                input.value = '';
                const select = screen.querySelector('select');
                select.selectedIndex = 0;
                select.disabled = false;
                input.disabled = false;

            }
            else {
                screens[index].remove();
            }

            total.value = '0';
            totalCountInput.value = '0';
            totalCountOtherInput.value = '0';
            totalFullCountInput.value = '0';
            totalCountRollbackInput.value = '0';
            inputRange.value = 0;
            inputRangeValue.textContent = '0%';
            totalCountRollbackInput.value = '0';

            startBtn.style.display = "";
            resetBtn.style.display = "none";
        })

    },
    logger: function () {

        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        console.log(this.screens);

    }

}


appData.init();

