const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number from 0-3 colors

  //   const randomNumber = 2; (one way of doing it )
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  //   return Math.random() * colors.length;(will only give random numbers in decimals)
  //   return Math.ceil(Math.random() * colors.length);(will only give random numbers from '1' to infinity but we need 0 to infinity so we will be rounding down with 'floor')
  return Math.floor(Math.random() * colors.length);
}
