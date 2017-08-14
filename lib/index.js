let style = require('./style.css');
const Square = require('./square.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var squareArraySize = 7;
var squareArray = [];
var colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
 // = [new Square(25, 100, 1, 1, 'orange', 15, 15), new Square(500, 0, -2, -2, 'blue', 20, 5), new Square(10, 250, 2, 2, 'green'), new Square(100, 350, -1, -1, 'red'), new Square(500, 500, -1, -1, 'pink', 5, 25), new Square(278, 30, -1, -1, 'teal', 15, 25), new Square(160, 375, -1, -1, 'black', 30, 30)]

for (var i = 0; i < squareArraySize; i++){
  squareArray.push(new Square(1 + i*15, 1 + i*15, 2, 2, colorArray[i], 10, 10))
  // debugger;
}

requestAnimationFrame(function gameLoop(){
  context.clearRect(0, 0, canvas.width, canvas.height)
  squareArray.forEach(function (square){
    square.checkEdge(canvas);
    square.updateLocation();
    square.draw(context);
  });
  requestAnimationFrame(gameLoop);
})
