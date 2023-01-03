//  let age = 39;
// console.log(age);
// let year = 1982;
// console.log(year);
// let name = "Nargul";
// console.log(name);

// let person = {
//     name: "Alla",
//     surname: "Ivanova",
//     age: 25,
//     place: "Kyrgyzstan"
// };
// console.log("Name: " + person.name);
// console.log("Surname: " + person.surname);
// console.log("Age: " + person.age);
// console.log("Place: " + person.place);

// let clothes = ["hat", "trousers", "skirt", "jacket"];

// console.log(clothes[0]);
// console.log(clothes[1]);
// console.log(clothes[2]);
// console.log(clothes[3]);

// var name_ = prompt("Введите ваше Имя и Фамилию", "");
// alert("Вас зовут " + name_);

// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");

// alert( a + b );


// let m ="введите первый множитель";
// let d ="введите второй множитель";
// alert(parseInt(prompt(m, 1))*parseInt(prompt(d, 1)));


// urok 30

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

// function min(a, b) { return a < b? a : b; }
// var x = 8, y = 4, z = 7, m;
// m = min(min(x, y), z);
// console.log(m);



// ---Добавление товара в корзину----

// const class_name = document.getElementsByClassName("to_cart");

// console.log(class_name);



// Массивы и псевдомассивы

// const arr2 = [1,2,3,4,5];
// console.log(arr2);

// let object = {0: 1, 1: 2, 2: 3, length: 3}
// let array = []

// for (let i = 0; i < object.length; i++){
//     array.push(object[i]);
// };

// console.log( array );


// Сылочный обьект

// const objectA = {
//     a: 10,
//     b: true
// };
// const copyOfA = objectA
 
// console.log (copyOfA);

// copyOfA.c = 'abc';
// console.log (copyOfA);


// Динамическая типизация

// console.log (copyOfA);//TypeError, a is not a function
//  если мы хотим присвоить переменноф а другое значение  и вывести ее, то это будет ошибкой
//  поэтому при обьявлении переменной, значение которой будет функция, нужно использовать 
//  'const' и стрелочную функцию -- () => {} ---

// const a = () => {
//     console.log('Hey there');
// };
// a();

// a = 10; //const нельзя присваивать новые значения

// a();

// -------------

// const myCity = {
//     city: 'New York'
// };

// myCity.popular = true; //таким образом можно добовлять значения в обьект
// console.log(myCity);
// myCity.country = 'USA';
// console.log(myCity) 


// -----------
// -delete -- удалять свойство обьекта
const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA'
};

delete myCity.country;
console.log(myCity);


