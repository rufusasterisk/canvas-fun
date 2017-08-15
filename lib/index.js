let style = require('./style.css');
const Square = require('./square.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var squareArray = [];
var colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'teal', 'pink', 'black'];

//This code creates 8 squares on page load.
//
// var squareArraySize = 7;
// for (var i = 0; i < squareArraySize; i++){
//   squareArray.push(new Square(1 + i*15, 1, 2, 2, colorArray[i], 10, 10))
// }

requestAnimationFrame(function gameLoop(){
  context.clearRect(0, 0, canvas.width, canvas.height)
  squareArray.forEach(function (square){
    square.checkEdge(canvas);
    square.updateLocation();
    square.draw(context);
  });
  requestAnimationFrame(gameLoop);
})

canvas.addEventListener('click', function(e){
  let xVelocity = Math.floor(Math.random()*20) - 10; //picks a number between -10 and 10
  let yVelocity = Math.floor(Math.random()*20) - 10;
  let colorIndex = Math.floor(Math.random()*10) //picks a number between 0 and 10
  let color = colorArray[colorIndex]
  let width = 20;
  let height = 20;
  squareArray.push(new Square(e.clientX, e.clientY, xVelocity, yVelocity, color, width, height))
  // single line version
  // squareArray.push(new Square(e.clientX, e.clientY, Math.floor(Math.random()*20) - 10, Math.floor(Math.random()*20) - 10, colorArray[Math.floor(Math.random()*10)], 10, 10))
})
