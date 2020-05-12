// Constants
const colors = {
    1: 'red',
    2: 'green',
    3: 'blue',
    4: 'yellow'
}

let rounds = [];
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
    background: "https://i.pinimg.com/originals/6b/90/9e/6b909e88b59dab6b460c05d4e1334f4a.jpg",
  },
];

// Cache Element References
const msgEl = document.getElementById('message');
const gamePiece = document.querySelectorAll('.game-piece');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow')
const start = document.getElementById('start');
const menu = document.getElementById('themeMenu');

// Event Listeners

red.addEventListener('click', function(){
    console.log('Red is clicked!')
    playerChoice.push('red')
})

green.addEventListener('click', function(){
    console.log('Green is clicked!')
    playerChoice.push('green')
})

blue.addEventListener('click', function(){
    console.log('Blue is clicked!')
    playerChoice.push('blue');
})

yellow.addEventListener('click', function(){
    console.log('Yellow is clicked!')
    playerChoice.push('yellow');
})

start.addEventListener('click', function(){
  play();
})
// Functions

init();

function init(){
  playerChoice = [];
  rounds = [];
  render();
}

function randColor () {
  let randIdx = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
  let randColor = colors[randIdx];
  return randColor;
}

function play(){
  let color = randColor();
  if (color === 'yellow') {
    yellow.style.backgroundColor ="gold";
  } else if (color === 'red') {
    red.style.backgroundColor ="red";
  } else if (color === 'green') {
    green.style.backgroundColor ="green";
  } else if (color === 'blue') {
    blue.style.backgroundColor = "blue";
  }
  rounds.push(color);
  console.log(rounds);
}

function colorFlash() {
  let timer = 1000;
  rounds.forEach(function(color) {
    timer += 1000;
    setTimeout(() => {
      play(colors[color]);
    }, timer + 500);
  })
}

function checkRound(rnd, plyr) {
  if (rnd === plyr) {
    console.log('nice!');
  } else {
    console.log('not nice!');
  }
}

function render () {

}

render();