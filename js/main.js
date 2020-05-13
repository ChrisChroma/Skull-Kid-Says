// Constants
const colors = ["red", "green", "yellow", "blue"];

let round = 0;
let computerChoice = [];
let playerChoice = [];

const theme = [
  {
    name: "lostWoods",
    background: "https://i.ytimg.com/vi/ecnb7qOl4Pc/maxresdefault.jpg",
  },
  {
    name: "clockTown",
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

// Event Listeners

gamePieces.forEach(function (element) {
  element.addEventListener("click", function (event) {
    playerChoice.push(event.target.id);
    console.log(`${event.target.id} is clicked!`);
  });
});

start.addEventListener("click", function () {
  play();
});

// Functions

function getRandomNum() {
  return Math.floor(Math.random() * (3 - 0 + 1)) + 0;
}

function getComputerSelection(round) {
  let randomNums = [];
  for (let i = 0; i < round; i++) {
    const randomNum = getRandomNum();
    randomNums.push(randomNum);
  }
  return randomNums;
}

function play() {
  let color = getRandomNum();
  round += 1;
  computerChoice.push(color);
  colorFlash();
  console.log(computerChoice);
}

function colorFlash() {
  let timer = 0;
  computerChoice.forEach(function (num) {
    console.log("timer", timer);
    setTimeout(() => {
      gamePieces[num].style.backgroundColor = colors[num];
      setTimeout(() => {
        gamePieces[num].style.backgroundColor = "lightgray";
      }, 750);
    }, timer + 500);
    timer += 1000;
  });
}

function checkRound(rnd) {
  if (computerChoice[rnd] === playerChoice[rnd]) {
    console.log("nice!");
  } else {
    console.log("not nice!");
  }
}

function gamePieceReset() {
  console.count("called");
  blue.style.backgroundColor = "lightgray";
  green.style.backgroundColor = "lightgray";
  red.style.backgroundColor = "lightgray";
  yellow.style.backgroundColor = "lightgray";
}

function init() {
  round = 0;
  playerChoice = [];
  computerChoice = getComputerSelection(round);
}

init();
