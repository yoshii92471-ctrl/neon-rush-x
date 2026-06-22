// ==============================
// NEON RUSH X 2026
// GAME ENGINE - PART 1
// ==============================

const GAME = {

    running: false,

    score: 0,

    coins: 0,

    distance: 0,

    speed: 6,

    lane: 1,

    playerX: 50,

    jump: false,

    slide: false

};

const LANES = [

    20,

    50,

    80

];

const player = document.getElementById("player");

const scoreBox = document.getElementById("score");

const coinBox = document.getElementById("coins");

const distanceBox = document.getElementById("distance");

const playButton = document.getElementById("playBtn");

function updateHUD() {

    scoreBox.innerText = GAME.score;

    coinBox.innerText = GAME.coins;

    distanceBox.innerText = GAME.distance + " m";

}

function startGame() {

    if (GAME.running) return;

    GAME.running = true;

    playButton.innerText = "RUNNING";

    requestAnimationFrame(loop);

}

playButton.addEventListener("click", startGame);

function loop() {

    if (!GAME.running) return;

    GAME.score += 1;

    GAME.distance += 1;

    if (Math.random() > 0.98) {

        GAME.coins++;

    }

    updateHUD();

    player.style.left = LANES[GAME.lane] + "%";

    requestAnimationFrame(loop);

}

// ----------------------
// KEYBOARD CONTROLS
// ----------------------

document.addEventListener("keydown", function(e){

    if(e.key==="ArrowLeft"){

        GAME.lane--;

        if(GAME.lane<0){

            GAME.lane=0;

        }

    }

    if(e.key==="ArrowRight"){

        GAME.lane++;

        if(GAME.lane>2){

            GAME.lane=2;

        }

    }

    if(e.key==="ArrowUp"){

        if(!GAME.jump){

            GAME.jump=true;

            player.classList.add("jump");

            setTimeout(function(){

                GAME.jump=false;

                player.classList.remove("jump");

            },500);

        }

    }

    if(e.key==="ArrowDown"){

        if(!GAME.slide){

            GAME.slide=true;

            player.classList.add("slide");

            setTimeout(function(){

                GAME.slide=false;

                player.classList.remove("slide");

            },500);

        }

    }

});

// ----------------------
// MOBILE SWIPE
// ----------------------

let touchStartX=0;

document.addEventListener("touchstart",function(e){

    touchStartX=e.touches[0].clientX;

});

document.addEventListener("touchend",function(e){

    let endX=e.changedTouches[0].clientX;

    if(endX-touchStartX>60){

        GAME.lane++;

        if(GAME.lane>2){

            GAME.lane=2;

        }

    }

    if(touchStartX-endX>60){

        GAME.lane--;

        if(GAME.lane<0){

            GAME.lane=0;

        }

    }

});

// ----------------------
// SAVE HIGH SCORE
// ----------------------

function saveHighScore(){

    let high=localStorage.getItem("neonHigh");

    if(high==null){

        localStorage.setItem("neonHigh",GAME.score);

    }

    else{

        if(GAME.score>Number(high)){

            localStorage.setItem("neonHigh",GAME.score);

        }

    }

}

// ----------------------
// STOP GAME
// ----------------------

function gameOver(){

    GAME.running=false;

    saveHighScore();

    playButton.innerText="PLAY AGAIN";

    alert("GAME OVER\nScore : "+GAME.score);

}

updateHUD();// Neon Rush X 2026

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
