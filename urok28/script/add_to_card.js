// 2) По клику на кнопку добавить в корзину товар со следующими параметрами
//     1. Картинка
//     2. Заголовок
//     3. Доп параметр - цвет
//     4. Цена

// Конкретные задачи:
//     1) Получить картинку
//     1) Получить Заголовок
//     1) Получить доп. параметр
//     1) Получить цену

// Принцип получения данных следующий:
// с помощью:
// .class
// #id 
// attribute 
// tag 

let ttl = document.getElementsByClassName("item-title");
console.log(ttl[2].innerText);

let img = document.getElementsByClassName("item-img");
console.log(img[0].nodeName);

let price = document.getElementsByClassName("item-price");
console.log(price[0].innerHTML);


