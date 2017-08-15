class Square {
  constructor(x, y, xVelocity, yVelocity, color, width, height) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.color = color;
    this.xVelocity = xVelocity || 1;
    this.yVelocity = yVelocity || 1;
    this.width = width || 10;
    this.height = height || 10;
  }

  draw(context){
    context.fillStyle = `${this.color}`
    context.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height)
  }
  
  checkEdge(canvas){
    //check right edge
    if (this.xCoordinate > canvas.width - this.width) {
      this.xVelocity = -Math.floor(Math.random()*10) || -1;
    }
    //check left edge
    if (this.xCoordinate < 1){
      this.xVelocity = Math.floor(Math.random()*10) || 1;
    }

    //check bottom edge
    if (this.yCoordinate > canvas.height - this.height){
      this.yVelocity = -Math.floor(Math.random()*10) || -1;
    }
    //check top edge
    if (this.yCoordinate < 1){
      this.yVelocity = Math.floor(Math.random()*10) || 1;
    }
  }
  updateLocation(){
    this.xCoordinate += this.xVelocity;
    this.yCoordinate += this.yVelocity;
  }
}

module.exports = Square;
