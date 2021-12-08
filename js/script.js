'use strict';
const titleProject = document.getElementsByTagName('h1')[0];
const buttons = document.getElementsByClassName('handler_btn');
const butonPlus = document.querySelector('.screen-btn');
const otherItems = document.querySelectorAll('.other-items');
const firstOtherItems = [];
const secondOtherItems = [];
const typeItem = document.querySelector('.rollback').querySelector('input').getAttribute('type');
const span = document.querySelector('.rollback').querySelector('.range-value');
const totalInput = document.getElementsByClassName('total-input');

let screen = document.querySelectorAll('.screen');

otherItems.forEach(function (item) {
    item.classList.contains('percent') ? firstOtherItems.push(item) : secondOtherItems.push(item);
});

for (let i in totalInput) {
    console.log(totalInput[i]);
}

console.log(screen);


// const appData
//     title: '',
//     screens: [],
//     screenPrice: 0,
//     adaptive: true,
//     rollback: 20,
//     allServicePrices: 0,
//     fullPrice: 0,
//     servicePercentPrice: 0,
//     services: {},

//     asking: function () {

//         do{ 
//         appData.title = prompt("Как называется ваш проект?").trim();

//     } while(appData.isNumber(appData.title))

//         for (let i = 0; i < 2; i++) {
//             let name;

//             do{ 
//                 name =prompt("Какие типы экранов нужно разработать?").trim();

//             } while(appData.isNumber(name))


//             let price = 0;

//             do {
//                 price = prompt("Сколько будет стоить такая работа?");
//                 console.log(price);
//             }
//             while (!appData.isNumber(price))
//             appData.screens.push({ id: i, name: name, price: price })
//         }

//         for (let i = 0; i < 2; i++) {

//             let name;
//             do{
//                 name = prompt("Какой дополнительный тип услуги нужен?");

//             } while(appData.isNumber(name))


//             let price = 0;


//             do {
//                 price = prompt("Сколько это будет стоить?");
//             }
//             while (!appData.isNumber(price))

//             appData.services[name] = +price;

//             // sum += Number(price);

//         }

//         appData.screenPrice = Number(appData.screenPrice);
//         appData.adaptive = confirm("Нужен ли адаптив на сайте?");
//     },
//     addPrices: function () {
//         for (let screen of appData.screens) {
//             appData.screenPrice += +screen.price;
//         }

//         for (let i in appData.services) {
//             appData.allServicePrices += appData.services[i];
//         }
//     },

//     getFullPrice: function () {
//         appData.fullPrice = Number(appData.screenPrice) + appData.allServicePrices;
//     },

//     getTitle: function () {
//         appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
//     },

//     getServicePercentPrices: function () {
//         appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
//     },

//     getRollbackMessage: function () {
//         switch (true) {
//             case appData.fullPrice >= 30000:
//                 return "Даем скидку в 10%";
//             case appData.fullPrice >= 15000 && appData.fullPrice < 30000:
//                 return "Даем скидку в 5%";
//             case appData.fullPrice >= 0 && appData.fullPrice < 15000:
//                 return "Скидка не предусмотрена";
//             case appData.fullPrice < 0:
//                 return "Что-то пошло не так";
//         }
//     },
//     isNumber: function (num) {
//         console.log(num);
//         console.log(!isNaN(parseFloat(num)));
//         console.log(isFinite(num));
//         return !isNaN(parseFloat(num)) && isFinite(num);
//     },
//     start: function () {
//         appData.asking();
//         appData.addPrices();
//         appData.getFullPrice();
//         appData.getServicePercentPrices();
//         appData.getTitle();

//         appData.logger();
//     },
//     logger: function () {

//         console.log(appData.fullPrice);
//         console.log(appData.servicePercentPrice);
//         console.log(appData.screens);
//         // for (let key in appData) {
//         //     console.log(key + ":" + appData[key]);
//         // }
//     }

// }

// appData.start();

