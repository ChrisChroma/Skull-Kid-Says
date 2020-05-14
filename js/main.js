// Constants
const colors = ["red", "green", "gold", "blue"];
let computerChoice = [];
let round = 0;
getComputerSelection(round, computerChoice);
let playerChoice = [];
let themeChoice = [];

const themes = [
  {
    name: "lostWoods",
    music: new Audio("audio/Sarias Theme SSBU.mp3"),
    background:
      "url(https://cdna.artstation.com/p/assets/images/images/003/023/956/large/sergio-briseno-kokiri-2prnt.jpg?1468621311)",
  },
  {
    name: "clockTown",
    music: new Audio("audio/Clock Town Day 1.mp3"),
    background:
      "url(https://i.pinimg.com/originals/d7/7f/8c/d77f8c43dec780ed972d3baf73471136.jpg)",
  },
  {
    name: "songOfStorms",
    music: new Audio("audio/Song of Storms SSBU.mp3"),
    background:
      "url(https://i.pinimg.com/originals/6b/90/9e/6b909e88b59dab6b460c05d4e1334f4a.jpg)",
  },
];

// Cache Element References
const body = document.querySelector("body");
const msgEl = document.getElementById("message");
const gamePieces = document.querySelectorAll(".game-piece");
const start = document.getElementById("start");
const menu = document.getElementById("themeMenu");
const showMenu = document.getElementById("showMenu");
const themeMenu = document.getElementById("themeMenu");
const themeBtn = document.querySelectorAll(".theme");

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
      msgEl.innerText = "Skull Kid Says: Ehehe! Better luck next time!";
      reset();
    }
  });
});

start.addEventListener("click", function () {
  play(round, computerChoice, gamePieces);
});

themeBtn.addEventListener("click", function (element) {
  themeChoice.push(event.target.id);
  console.log("themeChoice", themeChoice);
  let themeChoices = [];
  themeChoice.forEach(function (theme) {
    themeChoices.push(themes.indexOf(theme));
  });
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
  pieces.forEach(function (element) {
    element.disabled = true;
  });
  let timer = 0;
  compChoice.forEach(function (num) {
    setTimeout(() => {
      pieces[num].style.backgroundColor = colors[num];
      setTimeout(() => {
        pieces[num].style.backgroundColor = "lightgray";
      }, 750);
    }, timer + 500);
    timer += 1000;
  });
  setTimeout(() => {
    pieces.forEach(function (element) {
      element.disabled = false;
    });
  }, timer - 1000);
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

function selectTheme(themeChoice) {
  // let music = theme.music;
  // music.pause();
  changeBg(themeChoice);
  playBgMusic(themeChoice);
}

function changeBg(themeChoice) {
  body.style.backgroundImage = themes[themeChoice].background;
}

function playBgMusic(themeChoice) {
  themes[themeChoice].music.volume = 0.05;
  // theme[themeChoice].music.loop = true;
  themes[themeChoice].music.play();
  setTimeout(function () {
    themes[themeChoice].music.pause();
  }, 40000);
}

function init() {
  selectTheme(0);
}

init();
