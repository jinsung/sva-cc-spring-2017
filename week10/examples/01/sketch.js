var as;
var rocket;
var time;
var isGameOver;
function setup () {
  createCanvas(500, 500);
  as = new AsteroidSystem();
  as.setup();
  rocket = new Rocket();
  var midPos = createVector(width/2, height/2);
  rocket.setup(midPos);
  time = 0;
  isGameOver = false;
}

function update() {

  time++;
  if (time > 130) {
    time = 0;
    as.addAsteroid();
  }
  as.update();
  rocket.update();
  if (rocket.isHit(as.asteroids)) {
    isGameOver = true;
  }
}

function draw () {
  if (isGameOver) {
    return;
  }
  background(200);
  update();
  as.draw();
  rocket.draw();
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
