var xPosition = 40;
var yPosition = 460;
var robot1;
function setup() {
  createCanvas(680, 480);
  robot1 = new Robot();
  robot1.setup(100, 100, 260, 400);
}

function draw() {
  robot1.draw(mouseIsPressed);
}
