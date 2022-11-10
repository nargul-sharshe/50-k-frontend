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


// for (var i = 0; i < elements.length; i++){
//     elements[i].addEventListener('click', myFunction, false);
// };

// -----
// Function

// function ismar(){
//     alert('hello');
// }
// ismar();


// function test_fun(param){
//     var number = 10;
//     var res;
//     res = number + param;

//     alert(res);
// }

// test_fun(45);

// -----
// Обьекты

// const arr = {
//     name: 'Ismar',
//     age: 26,
//     param: {
//         color: 'white',
//         nat: 'dungan'
//     }
// };

// // console.log(arr.name);
// // delete arr.name;
// // console.log(arr.name);

// for (let key in arr) {

//     if(typeof(arr[key]) === 'object'){

//         for (let key2 in arr[key]){

//            console.log(arr[key][key2]);
//         }

//     } else {

//     console.log(arr[key]);
//     }
// }


// function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
//   }
  
//   calculateCircumference(2);  

//   alert (calculateCircumference(2));


  

//   function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
  
//   min(2, 5);
//   min(3, -1);
//   min(1, 1);
//   console.log(min(a, b));

  function min(a, b) { return a < b? a : b; }
  var x = 8, y = 4, z = 7, m;
  m = min(min(x, y), z);
  console.log(m);

//   что такое function?

function name_fun(number){
    let num = number;

    console.log(num);
}
