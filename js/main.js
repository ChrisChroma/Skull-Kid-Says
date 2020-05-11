// Constants
const colors = {
    1: 'red',
    2: 'green',
    3: 'blue',
    4: 'yellow'
}

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
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow')
const start = document.getElementById('start');
const menu = document.getElementById('themeMenu');

// Event Listeners

red.addEventListener('click', function(){
    console.log('Red is clicked!')
})

green.addEventListener('click', function(){
    console.log('Green is clicked!')
})

blue.addEventListener('click', function(){
    console.log('Blue is clicked!')
})

yellow.addEventListener('click', function(){
    console.log('Yellow is clicked!')
})

start.addEventListener('click', function(){
  play();
})
// Functions

init();

function init(){
  red.style.borderBottom = "200px solid black";
  green.style.borderBottom = "200px solid black";
  blue.style.borderBottom = "200px solid black";
  yellow.style.borderTop = "200px solid black";
}

function randColor () {
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = colors[randIdx];
  return randColor;
}

function play(){
  randColor();
}

function render () {

}

render();