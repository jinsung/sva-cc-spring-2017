var x = 100;
var y = 100;
var angle1 = 0.0;
var segLength = 50;

function Fish (){
  this.setup = function (size) {
    fishRed = 100;
    fishGreen = 200;
    fishBlue = 200;
    this.mySize = Math.random() * size;  
  

  };

  this.draw = function () {
    dx = mouseX - x;
    dy = mouseY - y;
    angle1 = atan2(dy, dx);
    x = mouseX - (cos(angle1) * segLength);
    y = mouseY - (sin(angle1) * segLength);
    fill(fishRed, fishGreen, fishBlue, 50);
    //segment(x, y, angle1);
    ellipse (mouseX, mouseY, 10, 10);

  };
  
  this.segment = function(x, y, a) {
    push();
    translate(x,y);
    rotate(a);
    line(0, 0, segLength, 0);
    pop();


  };


}
