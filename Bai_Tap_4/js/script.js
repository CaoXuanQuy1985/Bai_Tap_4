let locCanvas = document.getElementById("myCanvas");
let locDraw = document.getElementById("draw");

function Circle(x, y, radius, color){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function(){
    let ctx = locCanvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

locDraw.addEventListener("click", function(){
  let circle = new Circle(100, 75, 50, 000000);
  circle.draw();
}, false);

