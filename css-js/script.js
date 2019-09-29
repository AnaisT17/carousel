`use strict`;

const buttonRight = document.querySelector(".button-right");
const buttonLeft = document.querySelector(".button-left");
const li = document.querySelectorAll("li");
let i = 0;
let timer = setInterval(buttonNext,3000);

function buttonNext () {
    li[i].classList.remove("active");
    i++;
    if (i==li.length)
    {i = 0}
    li[i].classList.add("active");
}
buttonRight.addEventListener ("click", buttonNext);

function buttonPrevious () {
    li[i].classList.remove("active");
    i--;
    if (i < 0 )
    {i = li.length -1}
    li[i].classList.add("active");
}
buttonLeft.addEventListener ("click", buttonPrevious);
