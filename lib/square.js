class Square {
  constructor(x, y, xdir, ydir, color, width, height) {
    this.xcord = x;
    this.ycord = y;
    this.color = color;
    this.xdir = xdir || 1;
    this.ydir = ydir || 1;
    this.width = width || 10;
    this.height = height || 10;
  }
  draw(context){
    context.fillStyle = `${this.color}`
    context.fillRect(this.xcord, this.ycord, this.width, this.height)
  }
  checkEdge(canvas){
    if (this.xcord > canvas.width - this.width) {
      this.xdir = -Math.floor(Math.random()*10);
    }
    else if (this.xcord < 1){
      this.xdir = Math.floor(Math.random()*10);
    }
    if (this.ycord > canvas.height - this.height){
      this.ydir = -Math.floor(Math.random()*10);
    }
    else if (this.ycord < 1){
      this.ydir = Math.floor(Math.random()*10);
    }
  }
  updateLocation(){
    this.xcord += this.xdir;
    this.ycord += this.ydir;
  }
}

module.exports = Square;
