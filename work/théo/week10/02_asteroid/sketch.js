var myShip;
var ac;

function setup (){
	createCanvas(1280, 600);
	myShip = new Ship();
	myShip.setup();
	ac = new AsteroidController;
	ac.setup();
	timer = 0;
}
function update (){
	timer++;
	if (timer > 60){
		timer = 0;
		ac.addAsteroid();
	}

	myShip.update();
	ac.update();
	bulletAsteroidHitTest();


}
function draw (){
	background(10);
	fill(220, 60, 80);
	noStroke();
	this.update();
	myShip.draw();
	if (keyIsDown(UP_ARROW))
		myShip.addForce(createVector(1.0, 0.0) );

	noFill();
	strokeWeight(5);
	stroke(155);
	ac.draw();
}

function bulletAsteroidHitTest() {
	for (var i = myShip.bullets.length -1; i >= 0; i--) {
		for (var j = ac.asteroids.length -1; j >= 0; j--) {
			var b = myShip.bullets[i];
			var a = ac.asteroids[j];
			var distance = b.pos.dist(a.position);
			if (distance < (b.size/2 + a.size/2) ) {
				b.hit();
				ac.hit(j, b.rotation);

			}
				
		}
	}
}

function keyPressed() {
	if(keyCode == LEFT_ARROW) {
		myShip.rotate( -(Math.PI * 2) / 12);
	} else if (keyCode == RIGHT_ARROW) {
		myShip.rotate( (Math.PI * 2) / 12);

	}else if (keyCode == 32) {
		myShip.fire();
	}
}