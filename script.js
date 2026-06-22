// Neon Rush X 2026

let score = 0;
let coins = 0;
let distance = 0;

const scoreText = document.getElementById("score");
const coinText = document.getElementById("coins");
const distanceText = document.getElementById("distance");
const playBtn = document.getElementById("playBtn");
const player = document.getElementById("player");

let gameRunning = false;
let gameLoop;

function updateScreen() {
    scoreText.innerText = score;
    coinText.innerText = coins;
    distanceText.innerText = distance + " m";
}

function startGame() {

    if (gameRunning) return;

    gameRunning = true;

    playBtn.innerText = "RUNNING...";

    gameLoop = setInterval(() => {

        score += 10;
        distance += 5;

        // Random coin collection
        if (Math.random() > 0.75) {
            coins += 1;
        }

        // Small player animation
        player.style.transform =
            "translateX(-50%) scale(" +
            (1 + Math.random() * 0.1) +
            ")";

        updateScreen();

    }, 200);

}

playBtn.addEventListener("click", startGame);

// Keyboard controls

document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowLeft") {

        player.style.left = "20%";

    }

    if (e.key === "ArrowUp") {

        player.style.bottom = "120px";

        setTimeout(() => {

            player.style.bottom = "25px";

        }, 400);

    }

    if (e.key === "ArrowRight") {

        player.style.left = "80%";

    }

});

// Mobile swipe controls

let startX = 0;

document.addEventListener("touchstart", function (e) {

    startX = e.touches[0].clientX;

});

document.addEventListener("touchend", function (e) {

    let endX = e.changedTouches[0].clientX;

    if (endX - startX > 50) {

        player.style.left = "80%";

    }

    else if (startX - endX > 50) {

        player.style.left = "20%";

    }

});

// Daily reward

const claimBtn = document.querySelector(".claim");

claimBtn.addEventListener("click", function () {

    coins += 100;

    updateScreen();

    claimBtn.innerText = "CLAIMED ✓";

    claimBtn.disabled = true;

});

// Initialize

updateScreen();console.log("Neon Rush X Loaded");
