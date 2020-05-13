// Constants
const colors = ["red", "green", "gold", "blue"];
let computerChoice = [];
let round = 0;
getComputerSelection(round, computerChoice);
let playerChoice = [];

const theme = [
  {
    name: "lostWoods",
    background:
      "https://cdna.artstation.com/p/assets/images/images/003/023/956/large/sergio-briseno-kokiri-2prnt.jpg?1468621311",
  },
  {
    name: "clockTown",
    music: "audio/108 Clock Town Day 1.mp3",
    background:
      "https://i.pinimg.com/originals/d7/7f/8c/d77f8c43dec780ed972d3baf73471136.jpg",
  },
  {
    name: "songOfStorms",
    background:
      "https://i.pinimg.com/originals/6b/90/9e/6b909e88b59dab6b460c05d4e1334f4a.jpg",
  },
];

// Cache Element References
const msgEl = document.getElementById("message");
const gamePieces = document.querySelectorAll(".game-piece");
const start = document.getElementById("start");
const menu = document.getElementById("themeMenu");
const bgPlayer = new Audio("audio/108 Clock Town Day 1.mp3");

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
      console.log("You Lose.");
      reset();
    }
  });
});

start.addEventListener("click", function () {
  play(round, computerChoice, gamePieces);
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
}

function reset() {
  computerChoice = [];
  round = 0;
  getComputerSelection(round, computerChoice);
  playerChoice = [];
}

function selectTheme(background, music) {
  body.style.backgroundImage = theme;
}

function playBgMusic(name) {
  bgPlayer.muted = true;
  bgPlayer.volume = 0.05;
  bgPlayer.loop = true;
  bgPlayer.play();
}

function init() {
  playBgMusic();
}

init();
