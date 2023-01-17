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


// var elements = document.getElementsByClassName("add_cart");

// var myFunction = function () {
//     var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".item-title");
//     alert(attribute[0].innerText);
// };




// //   что такое function?

// function name_fun(number){
//     let num = number;

//     console.log(num);
// }

// name_fun(200)


// // Методы и свойства
// // length - считает и символы и буквы
// let text = ("Привет! Как у тебя дела?");
// console.log(text.length);


// // indexOf  - позволяет искать элементы в строке или в тексте.
// let text = "Привет! Как у тебя дела?";
// console.log(text.indexOf("тебя"));

// // search() - такой же метод как и indexOf
// // slice (substring) - два параметра, входной и последующие от нужного нам элемента.

// let text = "Привет! Как у тебя дела?";
// console.log(text.slice(7,11));

// // replace - 

// let text = "Привет! Как у тебя дела?";
// console.log(text.replace("тебя","меня"));



// let text = "Привет! Как у тебя дела?";
// console.log(text.toLowerCase());

// // trim - будет удалять лишние пробелы

// let text = "     Привет! Как у тебя дела?";
// console.log(text.trim);



// Методы чисел
//  toString()


// let number = 120;
// number.toString

// toFixed() - округяет числа после зяпятой.

// "+" - конвертация строки в цифры

// toExponential 



// Добавление в карзину

let class_name = document.getElementsByClassName("add_cart");


let myFunction = function(evt) {
    evt.preventDefault();
   
    let title = this.parentNode.parentNode.parentNode.querySelectorAll(".body-item p");
    let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price span");
    let image = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".product img");

    let creat_li = document.createElement('li');
    creat_li.classList.add('bag_item');


    creat_li.innerHTML = '<div class="bag_img">\
                        <a href="#">\
                            <img src="'+image[0].src+'" alt=""></a></div>\
                        <div class="bag_info">\
                        <p class="info_title"><a href="?search=#">'+title[0].innerText+'</a></p>\
                        <div class="info_price">\
                            <span>'+price[0].innerText+'</span>\
                        </div>\
                        <div class="trash">\
                            <a href="?search=#"><i class="fa-solid fa-trash"></i></a>\
                        </div>\
                      </div>';

    let block_cart = document.querySelector('.shopcard_dropdown ul');
    block_cart.appendChild(creat_li);

    alert("Товар добавлен в корзину!");

    //Удаление товара

    let click_trash = document.querySelectorAll('.trash');

    for (var i = 0; i < click_trash.length; i++) {
        click_trash[i].addEventListener('click', del_func, false);
    }

    function del_func(){
        evt.preventDefault();
        
        this.parentNode.parentNode.remove();
    }

    };


for (var i = 0; i < class_name.length; i++) {
    class_name[i].addEventListener('click', myFunction, false);
}

// addEventListener - добовляем событие клика
    



