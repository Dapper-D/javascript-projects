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
