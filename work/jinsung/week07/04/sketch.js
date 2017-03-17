var xPosition = 40;
var yPosition = 460;
var robot1;
var robot2;
var robot3;
function setup() {
  createCanvas(680, 480);
  robot1 = new Robot();
  robot1.setup(100, 100, 26, 40, 0.15);

  robot2 = new Robot();
  robot2.setup(10, 10, 26* 1.1, 40 * 1.1, 0.20);

  robot3 = new Robot();
  robot3.setup(200, 150, 26* 2, 40 * 2, 0.5);
}

function draw() {
  robot1.draw(mouseIsPressed);
  robot2.draw(mouseIsPressed);
  robot3.draw(mouseIsPressed);
}