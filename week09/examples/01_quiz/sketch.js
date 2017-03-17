
var balls = [];
var numOfBalls = 100;
function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < numOfBalls; i++) {
    var ball = new Ball();
    ball.setup( Math.random()* width, Math.random() * height, Math.random() * 10)
    balls.push(ball);
  }
}

function draw() {
  // draw 100 balls here. 
}
