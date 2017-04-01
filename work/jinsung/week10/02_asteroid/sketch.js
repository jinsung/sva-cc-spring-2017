var myShip;
var ac;
var timer;
function setup() {
	createCanvas(800, 800);
	myShip = new Ship();
	myShip.setup();
	ac = new AsteroidController();
	ac.setup();
	timer = 0;
}

function update() {
	timer++;
	if (timer > 130) {
		timer = 0;
		ac.addAsteroid();
	}
	myShip.update();
	ac.update();
	bulletAsteroidHitTest();
}

function draw() {
	background(200);

	this.update();
	fill(255, 0, 0);
	myShip.draw();

	noFill();
	stroke(0);
	ac.draw();
}

function bulletAsteroidHitTest() {
	for (var i = myShip.bullets.length - 1; i >= 0; i--) {
		for (var j = ac.asteroids.length - 1; j >= 0; j--) {
			var b = myShip.bullets[i];
			var a = ac.asteroids[j];
			var distance = b.pos.dist(a.position);
			if (distance < (b.size/2 + a.size/2) ) {
				b.hit();
			}
		}
	}
}

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		myShip.rotate(-(Math.PI * 2) / 15 );
	} else if (keyCode == RIGHT_ARROW) {
		myShip.rotate( (Math.PI * 2) / 15 );
	} else if (keyCode == UP_ARROW) {
		myShip.addForce( createVector(1.0, 0.0) );
	} else if (keyCode == 32) {
		myShip.fire();
	}
}










