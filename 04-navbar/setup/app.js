// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   console.log(links.classList);
  //   console.log(links.classList.contains("links"));
  //two ways to use toggles
  //first
  list = links.classList;
  //   if (list.contains("show-links")) {
  //     list.remove("show-links");
  //   } else {
  //     list.add("show-links");
  //   }
  //second
  list.toggle("show-links");
});
