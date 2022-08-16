//for each
//doesnt return a new array

// const people = [
//     {name:'bob' , age : 20, position: 'developer'},
//     {name:'mark' , age : 20, position: 'ddesigner'},
//     {name:'john' , age : 20, position: 'the boss'},
// ];

// function showPerson(person){
//     console.log(person.position.toUpperCase());
// }

// // people.forEach(showPerson);

//  people.forEach(function(item){
//     console.log(item.position.toUpperCase());
//  });

//map
// it returns a new array
// doesnt change the size if the array

// const people = [
//     {name:'bob' , age : 20, position: 'developer'},
//     {name:'mark' , age : 25, position: 'ddesigner'},
//     {name:'john' , age : 30, position: 'the boss'},
// ];

// const ages = people.map(function(thing){

//     // return thing.age;
//     return thing.age + 20;
// });
// console.log(ages);

// function greetMorning(name) {
//   const myName = "john";
//   console.log(`good morning ${name}, my name is ${myName}`);
// // }
// function morning() {
//   console.log(`good morning bob`);
//   return `good morning bob`;
// }

// function afternoon() {
//   console.log(`good afternoon bobby`);
//   return `good afternoon bobby`;
// }
// function evening() {
//   console.log(`good evening shanty`);
//   return `good evening shanty`;
// }
// function greet(name, callBack) {
//   callBack();
//   const myName = "john";
//   console.log(` ${name}, my name is ${myName}`);
// }

// greet("susan", morning);
// greet("john", afternoon);
// greet("betty", evening);

// function morning() {
//   return `good morning`;
// }

// function afternoon() {
//   return "good afternoon";
// }

// function greetings(callBack) {
//   const myName = "dapo";
//   console.log(`${callBack()} ${myName}, its been a while`);
// }

// greetings(morning);
// greetings(afternoon);

// function goodMorning() {
//   return "good morning";
// }

// function goodAfternoon() {
//   return "good afternoon";
// }

// function goodEvening() {
//   return "good evening";
// }

// function greetings(callB, names) {
//   console.log(`${callB()}, ${names.toUpperCase()} its been a while`);
// }

// greetings(goodMorning, "john");
// greetings(goodAfternoon, "mary");
// greetings(goodEvening, "susan");

//  arrays
//  forEach,map,filter, find, reduce
//  iterate over array - no for loop required

// const numbers = [0, 1, 2, 3, 4];

// //show all numbers

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//forEach
//does not return new array

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "john", age: 25, position: "designer" },
//   { name: "sam", age: 30, position: "boss" },
// ];

// function showPerson(person) {
//   console.log(person.name.toUpperCase());
//   console.log(person.position.toUpperCase());
//   console.log(person);
// }

// people.forEach(showPerson); first way

//map
//it retuens a new array
//doesnt change the size of the new array
//uses values from the original array when making a new one

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "john", age: 25, position: "designer" },
//   { name: "sam", age: 30, position: "boss" },
// ];

// const ages = people.map(function (person) {
//   return person.age + 40;
// });

// const newPeople = people.map(function (person) {
//   return {
//     firstName: person.name.toUpperCase(),
//     oldAge: +20,
//   };
// });

// const names = people.map(function (person) {
//   return `<h2> ${person.name} </h2>`;
// });

// document.body.innerHTML = names.join("");

// console.log(names);

//filter
//it returns new array
//can manipulate the size of new array
//returns based on condition

// const people = [
//   { name: "bob", age: 20, position: "developer" },
//   { name: "john", age: 25, position: "designer" },
//   { name: "sam", age: 30, position: "boss" },
// ];

// const youngFellas = people.filter(function (person) {
//   return person.age <= 25;
// });

// const developers = people.filter(function (person) {
//   return person.position === "developer";
// });

// const namess = people.filter(function (person) {
//   return person.name;
// });
// console.log(namess);

//find
//returns object
//returns first match, if no match undefined(if no matches)
//great for getting unique value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1 },
//   { name: "john", age: 25, position: "designer", id: 2 },
//   { name: "sam", age: 30, position: "boss", id: 3 },
// ];

// const names = ["bob", "peter", "susy"];
// const person = people.find(function (person) {
//   return person.age === 30;
// });
// console.log(
//   names.find(function (name) {
//     return name === "bob";
//   })
// );

// console.log(person.name);

//reduce
//iterates , callback function
//reduces to a single value - number, array, object
//1 parameter ('acc') - total of all calculations
//2 parameter ('curr') - current iteration/value

// const people = [
//   { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
//   { name: "john", age: 25, position: "designer", id: 2, salary: 400 },
//   { name: "sam", age: 30, position: "boss", id: 3, salary: 600 },
// ];

// const total = people.reduce(function (acc, currItem) {
//   console.log(`total ${acc}`);
//   console.log(`current money : ${currItem.salary}`);
//   acc += currItem.salary;
//   return acc;
// }, 0);

// console.log(total );

//math

// const number = 4.56789;
// const result = Math.floor(number);

// const number = 4.56789;
// const result = Math.ceil (number);

// const number = 89;
// const result = Math.sqrt(number);

// const result = Math.PI;

// const result = Math.ceil(Math.random() * 10);
// or
// const result = Math.ceil(Math.random() * 10);

// console.log(result);

// date

// const months = [
//   "january",
//   "february",
//   "march",
//   "april",
//   "may",
//   "june",
//   "july",
//   "august",
//   "september",
//   "october",
//   "november",
//   "december",
// ];

// const days = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

// const date = new Date();
// // const date = new Date("1/12/2004");
// const month = date.getMonth();
// console.log(months[month]);

// const day = date.getDay();
// console.log(days[day]);

// console.log(date.getDate());
// console.log(date.getFullYear());

// const words = `${days[day]}, ${date.getDate()}, ${
//   months[month]
// }, ${date.getFullYear()}`;

// document.body.innerHTML = words;
