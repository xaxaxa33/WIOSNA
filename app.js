"use strict";

const MIN = 1;
const MAX = 49;
const COUNT = 6;

const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const drawnNumbersDiv = document.getElementById("drawnNumbers");
const remainingValue = document.getElementById("remainingValue");
const message = document.querySelector(".message");

let drawnNumbers = [];


function generateRandomNumber() {
    let number;

    do {
        number = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    } while (drawnNumbers.includes(number));

    return number;
}


function createCircle(number) {
    const div = document.createElement("div");
    div.classList.add("circle");

    const colors = ["#e8607a", "#6aaa7e", "#3d7a4f", "#d4a017", "#f5a3b3"];

    const color = colors[Math.floor(Math.random() * colors.length)];

    div.style.background = color;
    div.textContent = number;

    return div;
}


function updateRemaining() {
    remainingValue.textContent = COUNT - drawnNumbers.length;
}


function showMessage() {
    message.classList.add("visible");
}

function hideMessage() {
    message.classList.remove("visible");
}


function onAddNumber() {
    if (drawnNumbers.length >= COUNT) return;

    const number = generateRandomNumber();
    drawnNumbers.push(number);

    const circle = createCircle(number);
    drawnNumbersDiv.appendChild(circle);

    updateRemaining();

    if (drawnNumbers.length >= COUNT) {
        btnAdd.disabled = true;
        showMessage();
    }
}



function onClear() {
    drawnNumbers = [];
    drawnNumbersDiv.innerHTML = "";

    btnAdd.disabled = false;

    updateRemaining();
    hideMessage();
}


btnAdd.addEventListener("click", onAddNumber);
btnClear.addEventListener("click", onClear);


updateRemaining();