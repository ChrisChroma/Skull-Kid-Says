// Constants
const colors = ["red", "green", "gold", "blue"];
let computerChoice = [];
let round = 0;
getComputerSelection(round, computerChoice);
let playerChoice = [];
let themeChoice = [];
let bgMusic;

const themes = [
  {
    name: "lostWoods",
    message: "white",
    music: new Audio("audio/Sarias Theme SSBU.mp3"),
    background:
      "url(https://cdna.artstation.com/p/assets/images/images/003/023/956/large/sergio-briseno-kokiri-2prnt.jpg?1468621311)",
  },
  {
    name: "clockTown",
    message: "white",
    music: new Audio("audio/Clock Town Day 1.mp3"),
    background:
      "url(https://pbs.twimg.com/media/CTyCureUkAAjvkW?format=jpg&name=large)",
  },
  {
    name: "songOfStorms",
    message: "black",
    music: new Audio("audio/Song of Storms SSBU.mp3"),
    background:
      "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c0272ad-8c88-47cf-aa76-21663d92348e/ddwofoa-723e436d-bd18-414e-94cd-413dcd068636.jpg/v1/fill/w_1192,h_670,q_70,strp/song_of_storms_by_jasqreate_ddwofoa-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NzUiLCJwYXRoIjoiXC9mXC82YzAyNzJhZC04Yzg4LTQ3Y2YtYWE3Ni0yMTY2M2Q5MjM0OGVcL2Rkd29mb2EtNzIzZTQzNmQtYmQxOC00MTRlLTk0Y2QtNDEzZGNkMDY4NjM2LmpwZyIsIndpZHRoIjoiPD0xMjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-RE33Zujpg-7PODWKCultGWKxrB3WEci1WrFbuKABTo)",
  },
];

// Cache Element References
const body = document.querySelector("body");
const msgEl = document.getElementById("message");
const gamePieces = document.querySelectorAll(".game-piece");
const start = document.getElementById("start");
const menu = document.getElementById("themeMenu");
const themesEl = document.getElementById("themes");
const themeMenu = document.getElementById("themeMenu");
const lostWoodsTheme = document.getElementById("lostWoods");
const clockTownTheme = document.getElementById("clockTown");
const songOfStormsTheme = document.getElementById("songOfStorms");
const loseLaugh = new Audio("audio/SkullKidLaugh.wav");
const loseMusic = new Audio("audio/MM - Game Over.mp3");
const redSound = new Audio("audio/ganon.wav");
const greenSound = new Audio("audio/link.wav");
const yellowSound = new Audio("audio/Tatl.wav");
const blueSound = new Audio("audio/zelda.wav");
const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const yellowBtn = document.getElementById("gold");
const blueBtn = document.getElementById("blue");

const soundEffects = [redSound, greenSound, yellowSound, blueSound];

// Event Listeners
gamePieces.forEach(function (element) {
  element.addEventListener("click", function (event) {
    playerChoice.push(event.target.id);

    let playerChoices = [];
    playerChoice.forEach(function (color) {
      playerChoices.push(colors.indexOf(color));
    });

    console.log("computerChoice", computerChoice);
    console.log("playerChoices", playerChoices);

    if (
      JSON.stringify(playerChoices) ===
      JSON.stringify(computerChoice.slice(0, playerChoice.length))
    ) {
      if (playerChoices.length === computerChoice.length) {
        console.log("They are equal!");
        play(round, computerChoice, gamePieces);
      }
    } else {
      msgEl.innerText = "Ehehe! Better luck next time!";
      loseLaugh.volume = 0.1;
      loseMusic.volume = 0.05;
      loseLaugh.play();
      loseMusic.play();
      pauseBgMusic();
      reset();
    }
  });
});

redBtn.addEventListener("click", function () {
  redSound.play();
});

greenBtn.addEventListener("click", function () {
  greenSound.play();
});

yellowBtn.addEventListener("click", function () {
  yellowSound.play();
});

blueBtn.addEventListener("click", function () {
  blueSound.play();
});

start.addEventListener("click", function () {
  play(round, computerChoice, gamePieces);
  playBgMusic(themeChoice);
});

lostWoodsTheme.addEventListener("click", function () {
  pauseBgMusic();
  selectTheme(0);
});

clockTownTheme.addEventListener("click", function () {
  pauseBgMusic();
  selectTheme(1);
});

songOfStormsTheme.addEventListener("click", function () {
  pauseBgMusic();
  selectTheme(2);
});

// Functions
function getRandomNum() {
  return Math.floor(Math.random() * (3 - 0 + 1)) + 0;
}

function getComputerSelection(round, compSelectArr) {
  for (let i = 0; i < round; i++) {
    const randomNum = getRandomNum();
    compSelectArr.push(randomNum);
  }
}

function colorFlash(compChoice, pieces) {
  let timer = 0;
  compChoice.forEach(function (num) {
    setTimeout(() => {
      pieces[num].style.backgroundColor = colors[num];
      soundEffects[num].play();
      setTimeout(() => {
        pieces[num].style.backgroundColor = "lightgray";
      }, 750);
    }, timer + 500);
    timer += 1000;
  });
}

function gamePieceReset() {
  console.count("called");
  blue.style.backgroundColor = "lightgray";
  green.style.backgroundColor = "lightgray";
  red.style.backgroundColor = "lightgray";
  yellow.style.backgroundColor = "lightgray";
}

function play(round, computerChoice, gamePieces) {
  round += 1;
  getComputerSelection(round, computerChoice);
  colorFlash(computerChoice, gamePieces);
  playerChoice = [];
  msgEl.innerText = "Skull Kid Says";
}

function reset() {
  computerChoice = [];
  round = 0;
  getComputerSelection(round, computerChoice);
  playerChoice = [];
}

function selectTheme(theme) {
  msgEl.style.color = themes[theme].message;
  themesEl.style.color = themes[theme].message;
  bgMusic = themes[theme].music;
  bgMusic.pause();
  changeBg(theme);
}

function changeBg(theme) {
  body.style.backgroundImage = themes[theme].background;
}

function pauseBgMusic() {
  bgMusic.pause();
}

function playBgMusic() {
  bgMusic.volume = 0.05;
  bgMusic.loop = true;
  bgMusic.play();
}

function init() {
  selectTheme(0);
  redSound.volume = 0.2;
  greenSound.volume = 0.2;
  yellowSound.volume = 0.2;
  blueSound.volume = 0.2;
}

init();
