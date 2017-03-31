var myShip;
var ac;

function setup (){
	createCanvas(1280, 800);
	myShip = new Ship();
	myShip.setup();
	ac = new AsteroidController;
	ac.setup();
	timer = 0;
}
function update (){
	timer++;
	if (timer > 130){
		timer = 0;
		ac.addAsteroid();
	}

	myShip.update();
	ac.update();


}
function draw (){
	background(50);
	fill(220, 60, 80);
	stroke(255, 0, 0);
	this.update();
	myShip.draw();
	if (keyIsDown(UP_ARROW))
		myShip.addForce(createVector(1.0, 0.0) );

	noFill();
	stroke(255);
	ac.draw();
}

function keyPressed() {
	if(keyCode == LEFT_ARROW) {
		myShip.rotate( -(Math.PI * 2) / 15);
	} else if (keyCode == RIGHT_ARROW) {
		myShip.rotate( (Math.PI * 2) / 15);
	}
}