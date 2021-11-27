let title = "калькулятор верстки",
    screens = "Простые, Сложные, Интерактивные",
    screenPrice = 20000,
    rollback = 20,
    fullPrice = 100000,
    adaptive = true;


console.log("title " + typeof title, ", fullPrice " + typeof fullPrice, ", adaptive " + typeof adaptive);
console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани");
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани");

console.log(screens.toLocaleLowerCase().split(", "));
console.log("Процент отката посреднику за работу:" + fullPrice * (rollback/100));
