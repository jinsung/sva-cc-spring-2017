var as;
var rocket;
function setup () {
  createCanvas(500, 500);
  as = new AsteroidSystem();
  as.setup();
  rocket = new Rocket();
  var midPos = createVector(width/2, height/2);
  rocket.setup(midPos);
}

function update() {
  as.update();
  rocket.update();
}

function draw () {
  background(200);
  update();

  as.draw();
  rocket.draw();
}

function mousePressed() {
  as.addAsteroid();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    rocket.addForce(1);
  } else if (keyCode === RIGHT_ARROW) {
    rocket.rotate((Math.PI * 2)/15);
  } else if (keyCode === LEFT_ARROW) {
    rocket.rotate(-(Math.PI * 2)/15);
  }

}
