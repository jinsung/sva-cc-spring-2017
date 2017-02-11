function setup () {
  createCanvas(700, 700);
}

function draw() {
  fill (mouseX / 3);
//  ellipse(mouseX, mouseY, 20, 20);
rect(width/20, height/20, mouseX, mouseY);
}

var circleX = 200;
var circleY = 0;

var speed = 0;

var gravity = 0.1;


function draw() {

  circleY = circleY + speed;
  speed = speed + gravity;

  stroke(0);
  fill(200);
  ellipse(circleX, circleY, 40, 40);

  if (circleY > height) {
    speed = speed * -0.95;
  }

}

