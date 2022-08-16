//set initial count to 0

let count = 0;

// select value and buttons

const value = document.getElementById("value");
const btn = document.querySelectorAll(".btn");

// console.log(btn );
btn.forEach(function (button) {
  button.addEventListener("click", function (e) {
    // console.log(e.currentTarget.classList); (to check whats being targetted)
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      value.style.color = "red";
      count--;
    } else if (styles.contains("increase")) {
      value.style.color = "green";
      count++;
    } else if (styles.contains("reset")) {
      value.style.color = "black";
      count = 0;
    }
    value.textContent = count;
  });
});
