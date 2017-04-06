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

function keyPressed() {
	if (keyCode == LEFT_ARROW) {
		myShip.rotate(-(Math.PI * 2) / 15 );
	} else if (keyCode == RIGHT_ARROW) {
		myShip.rotate( (Math.PI * 2) / 15 );
	} else if (keyCode == UP_ARROW) {
		myShip.addForce( createVector(1.0, 0.0) );
	}
}