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

// let ttl = document.getElementsByClassName("item-title");
// console.log(ttl[2].innerText);

// let img = document.getElementsByClassName("item-img");
// console.log(img[0].currentSrc);

// let price = document.getElementsByClassName("item-price");
// console.log(price[0].innerHTML);




// let ttl = document.querySelectorAll(".body-item > .item-title");

// console.log(ttl);

// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);

// for (let text of ttl) {
//     console.log(text.innerText);
// }


var elements = document.getElementsByClassName("add_cart");

var myFunction = function () {
    var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".item-title");
    alert(attribute[0].innerText);
};


for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', myFunction, false);
};