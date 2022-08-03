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

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "john", age: 25, position: "designer" },
  { name: "sam", age: 30, position: "boss" },
];

const ages = people.map(function (person) {
  return person.age + 40;
});

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: +20,
  };
});

const names = people.map(function (person) {
  return `<h2> ${person.name} </h2>`;
});

document.body.innerHTML = names.join("");

console.log(names);
