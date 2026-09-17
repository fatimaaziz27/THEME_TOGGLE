// Dynamic Text
function changeText() {
    document.getElementById("text").innerText =
        "The text has been changed using JavaScript!";
}

// Counter
let count = 0;
function increaseCount() {
    count++;
    document.getElementById("count").innerText = count;
}

function decreaseCount() {
    count--;
    document.getElementById("count").innerText = count;
}

function resetCount() {
    count = 0;
    document.getElementById("count").innerText = count;
}


// Random Number

function generateRandomNumber() {

    let number = Math.floor(Math.random() * 100) + 1;

    document.getElementById("randomNumber").innerText = number;
}


// Background Color

function changeColor() {

    let colors = [
        "#E3F2FD",
        "#FFF3E0",
        "#E8F5E9",
        "#FCE4EC",
        "#F3E5F5"
    ];

    let randomIndex = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[randomIndex];
}


// Theme Toggle

function toggleTheme() {

    document.body.classList.toggle("dark-mode");
}
