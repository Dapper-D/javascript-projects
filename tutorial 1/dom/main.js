// const h1 = document.getElementById("title");
// h1.style.color = "red";

// const btn = document.getElementById("btn");
// btn.style.backgroundColor = "blue";
// btn.style.color = "white";

// // getElementByTagname

// const headings = document.getElementsByTagName("h1");
// headings[0].style.color = "red";

// const items = document.getElementsByTagName("li");
// const betterItems = [...items];
// betterItems.forEach(function (item) {
//   console.log(item);
// });

// const listItems = document.getElementsByClassName("specs");
// console.log(listItems);

// const result = document.querySelector("#result");
// result.style.backgroundColor = "blue";

// const item = document.querySelector(".specs");
// console.log(item);

// const lastItem = document.querySelector("li:last-child");
// console.log(lastItem);

// const list = document.querySelectorAll(".specs");
// console.log(list);

// list.forEach(function (item) {
//   console.log(item);
//   item.style.color = "yellow";
// });

// const result = document.querySelector("#result");
// const allChildren = result.childNodes;
// // console.log(allChildren);
// const Children = result.children;
// console.log(Children);

// console.log(result.firstChild);
// console.log(result.lastChild);

// // parent element
// const heading = document.querySelector("h2");
// // console.log(heading.parentElement.parentElement.parentElement);
// const parent = heading.parentElement;
// parent.style.color = "red";
// const first = document.querySelector(".first");
// // console.log(first);
// const second = (first.nextSibling.nextSibling.style.color = "red");
// // console.log(second);

// const last = document.querySelector("#last");
// // console.log(last);
// const third = last.previousSibling.previousSibling;
// // console.log(third);

// const first = document.querySelector(".first");
// first.nextElementSibling.getElementsByClassName.color = "red";

// const item = document.getElementById("special");
// const value = item.firstChild.nodeValue;
// // console.log(item.childNodes);
// // console.log(item.childNodes[0].nodeValue);
// const easyValue = item.textContent;
// console.log(easyValue);

// getAttribute
// setAttribute

// const first = document.querySelector(".first");

// const classValue = first.getAttribute("class");

// const links = document.querySelectorAll(".first");
// console.log(links);

// className
// classList

// const first = document.getElementById("first");
// const second = document.getElementById("second");
// const third = document.getElementById("third");

// // const classValue = first.className;
// // console.log(classValue);

// second.className = "color text";

// // third.classList.add("color");
// // third.classList.add("text");
// third.classList.add("text", "color");
// third.classList.remove("text");

// let result = third.classList.contains("text");
// if (result) {
//   console.log("hello world");
// } else {
//   console.log("doesnt have the class");
// }

// const classValue = third.classList;
// console.log(classValue);

// createElement ('element')
// createTextnode('text content')
// Element.appendChild(childElement)

// const result = document.querySelector("#result");
// const first = document.querySelector(".red");
// //create empty element

// const bodyDiv = document.createElement("div");
// //create textnode

// const text = document.createTextNode("a simple body div");
// bodyDiv.appendChild(text);
// // document.body.appendChild(bodyDiv);
// document.body.insertBefore(bodyDiv, result);
// // result element
// const heading = document.createElement("h2");
// const headingText = document.createTextNode("dynamic heading");
// heading.appendChild(headingText);
// heading.classList.add("blue");
// // result.appendChild(heading);

// result.insertBefore(heading, first);

// const sHeading = document.createElement("h6");
// const sText = document.createTextNode(`i'm small heading text`);
// sHeading.classList.add("red");
// sHeading.appendChild(sText);
// document.body.replaceChild(sHeading, bodyDiv);
// console.log(result.children);

// const heading = document.createElement("h2");
// heading.innerText = `i am a dynamic heading `;
// document.body.prepend(heading);

//remove
//removechild

// const result = document.getElementById("result");
// // result.remove();
// const heading = result.querySelector("h1");
// result.removeChild(heading);
// console.log(heading);

//innerhtml
//textcontent

// //
// const list = document.getElementById("first");
// const div = document.getElementById("second");
// const item = document.querySelector(".item");

// console.log(div.textContent);
// console.log(list.innerHTML);
// console.log(list.textContent);

// const ul = document.createElement("ul");
// ul.innerHTML = ` <li class="item">list item</li>
// <li>list item</li>`;
// document.body.appendChild(ul);

//select element
//addEventlistener
//what event, what to do

// const btn = document.querySelector(".btn");
// // btn.addEventListener("click", function () {
// //   console.log("this is rock , you lose");
// //});
// const heading = document.querySelector("h2");

// // heading.addEventListener("click", function () {
// //   console.log("this is rock , you lose");
// // });

// // btn.addEventListener("click", function () {
// //   heading.classList.add("red");
// // });

// function changeColor() {
//   let hasColor = heading.classList.contains("red");
//   if (hasColor) {
//     heading.classList.remove("red");
//   } else {
//     heading.classList.add("red");
//   }
// }

// btn.addEventListener("click", changeColor);

//

//mouseclick
//mouseenter
//mouseleave
//mousedown
//mouseup
//keypress
//keydown
//keyup

// const nameInput = document.getElementById("name");

// // nameInput.addEventListener("keypress", function () {
// //   console.log("you pressed something");
// // });

// // nameInput.addEventListener("keydown", function () {
// //   console.log("you pressed something");
// // });

// nameInput.addEventListener("keyup", function () {
//   console.log(nameInput.value);
// });

//

// event object argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

// const heading = document.querySelector("h1");
// const btn = document.querySelector(".btn");

// heading.addEventListener("click", function (event) {
//   //   heading.classList.add("blue");
//   console.log(event.currentTarget);
// });

// btn.addEventListener("click", function (event) {
//   //   heading.classList.add("blue");
//   console.log(event.currentTarget);
// // });

// const container = document.querySelector(".container");
// const list = document.querySelector(".list-items");

// function showBubbles(e) {
//   console.log("current target", e.currentTarget);
//   //   console.log("target", e.target);
// }

// function stopProp(e) {
//   console.log("you clicked it");
//   e.stopProp();
// }

// container.addEventListener("click", showBubbles, { capture: true });
// document.addEventListener("click", showBubbles, { capture: true });
// window.addEventListener("click", showBubbles, { capture: true });
// list.addEventListener("click", showBubbles, { capture: true });

//

// submit event listener
// prevent default
// how to get a value

// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const password = document.getElementById("password");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("form submitted");
//   console.log(name.value);
//   console.log(password.value);
// });

//

// web storage api
// session storage,local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem("name", "john");
// sessionStorage.setItem("name", "john");
