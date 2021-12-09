const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const banner = document.querySelector('.adv');

books[4].querySelector('a').textContent = "Книга 3. this и Прототипы Объектов"

books[1].after(books[0]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);

body.style.backgroundImage = 'url(./image/adv.jpg)';
banner.style.display = "none";

books[0].querySelectorAll('li')[3].after(books[0].querySelectorAll('li')[6]);
books[0].querySelectorAll('li')[6].after(books[0].querySelectorAll('li')[8]);
books[0].querySelectorAll('li')[10].before(books[0].querySelectorAll('li')[2]);

books[5].querySelectorAll('li')[1].after(books[5].querySelectorAll('li')[9]);
books[5].querySelectorAll('li')[4].after(books[5].querySelectorAll('li')[2]);
books[5].querySelectorAll('li')[8].before(books[5].querySelectorAll('li')[5]);

const chapter8 = document.createElement('li');
chapter8.textContent = "Глава 8: За пределами ES6";

books[2].querySelectorAll('li')[8].after(chapter8);
