let style = require('./style.css');
const Square = require('./square.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// context.fillStyle = "rgba(255, 192, 192, 1)";
// context.fillRect(50, 50, 10, 10);
//
// context.fillStyle = "orange";
// context.fillRect(100, 100, 10, 10)


// class Square {
//   constructor(x, y, xdir, ydir, color, width, height) {
//     this.xcord = x;
//     this.ycord = y;
//     this.color = color;
//     this.xdir = xdir || 1;
//     this.ydir = ydir || 1;
//     this.width = width || 10;
//     this.height = height || 10;
//   }
// }

function drawObject(obj){
  // console.log('running Draw');
  // console.log(`color: ${obj.color}, x: ${obj.xcord}, y: ${obj.ycord}`);
  context.fillStyle = `${obj.color}`;
  context.fillRect(obj.xcord, obj.ycord, obj.width, obj.height)
}

var direction = 1
var squareArray = [new Square(25, 100, 1, 1, 'orange', 15, 15), new Square(500, 0, -2, -2, 'blue', 20, 5), new Square(10, 250, 2, 2, 'green'), new Square(100, 350, -1, -1, 'red'), new Square(500, 500, -1, -1, 'pink', 5, 25), new Square(278, 30, -1, -1, 'teal', 15, 25), new Square(160, 375, -1, -1, 'black', 30, 30)]
// var mySquare1 = new Square(25, 0, 'orange');
// var mySquare2 = new Square(50, 0, 'blue');
// var mySquare3 = new Square(0, 25, 'green');
// var mySquare4 = new Square(0, 50, 'red')

// console.log(mySquare);

// drawObject(mySquare);

requestAnimationFrame(function gameLoop(){
  context.clearRect(0, 0, canvas.width, canvas.height)
  squareArray.forEach(function (square){
    // if (square.xcord > 588 || square.xcord < 2){
    // if (square.xcord > 600 - square.width) {
    //   square.xdir = -Math.floor(Math.random()*10);
    //   // square.width = -square.xdir
    // }
    // else if (square.xcord < 1){
    //   square.xdir = Math.floor(Math.random()*10);
    //   // square.width = square.xdir
    // }
    //
    // // if (square.ycord > 588 || square.ycord < 2){
    // if (square.ycord > 600 - square.height){
    //   square.ydir = -Math.floor(Math.random()*10);
    //   // changeDimensions(square);
    // }
    // else if (square.ycord < 1){
    //   square.ydir = Math.floor(Math.random()*10);
    //   // changeDimensions(square);
    // }

    square.checkEdge(canvas);
    // square.move(context);
    // square.xcord += square.xdir;
    // square.ycord += square.ydir;
    square.updateLocation();
    square.draw(context);

    // drawObject(square)

  });

  //
  // if (mySquare.xcord > 569){
  //   direction = -2;
  // }
  // else if (mySquare.xcord < 1) {
  //   direction = 2;
  // }
  // mySquare.xcord += direction;
  // mySquare.ycord += direction;
  // drawObject(mySquare);

  requestAnimationFrame(gameLoop);
})

function changeDimensions(square){
  square.height = Math.floor(Math.random()*20 || 1)
  square.width = Math.floor(Math.random()*20)
}
