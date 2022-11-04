 let age = 39;
console.log(age);
let year = 1982;
console.log(year);
let name = "Nargul";
console.log(name);

let person = {
    name: "Alla",
    surname: "Ivanova",
    age: 25,
    place: "Kyrgyzstan"
};
console.log("Name: " + person.name);
console.log("Surname: " + person.surname);
console.log("Age: " + person.age);
console.log("Place: " + person.place);

let clothes = ["hat", "trousers", "skirt", "jacket"];

console.log(clothes[0]);
console.log(clothes[1]);
console.log(clothes[2]);
console.log(clothes[3]);

var name_ = prompt("Введите ваше Имя и Фамилию", "");
alert("Вас зовут " + name_);

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );


let m ="введите первый множитель";
let d ="введите второй множитель";
alert(parseInt(prompt(m, 1))*parseInt(prompt(d, 1)));
