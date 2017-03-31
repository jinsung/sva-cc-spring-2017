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
    as.spawnAsteroid();
  }
  as.update();
  rocket.update();
  if (rocketAsteroidHitTest()) {
    isGameOver = true;
  }

  bulletAsteroidHitTest();
}

function rocketAsteroidHitTest () {
  for (var i = 0; i < as.asteroids.length; i++) {
    var a = as.asteroids[i];
    var distance = p5.Vector.dist(rocket.loc, a.loc);
    if (distance < (rocket.size/2 + a.size/2)) {
      return true;
    }
  }
  return false;
}

function bulletAsteroidHitTest() {
  for (var i = as.asteroids.length - 1; i >= 0; i--) {
    for (var j = rocket.bullets.length - 1; j >= 0; j--) {
      var a = as.asteroids[i];
      var b = rocket.bullets[j];
      var distance = p5.Vector.dist(a.loc, b.loc);
      if (distance < (a.size/2 + b.size/2)) {
        b.isDead = true;
        as.hit(i);
      }
    }
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
  } else if (keyCode === 32) { // s for shot.
    rocket.shot();
  }

}
