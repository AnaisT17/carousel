const buttonRight = document.querySelector(".button-right");
const buttonLeft = document.querySelector(".button-left");
const li = document.querySelectorAll("li");
let i = 0;

function buttonNext () {
    li[i].classList.remove("active");
    i++;
    if (i==li.length)
    {i = 0}
}
