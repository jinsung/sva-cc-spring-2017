var circles = [];

function setup() {
	createCanvas(800, 400);
	for (var i = 0; i <100; i++) {
		circles[i] = new Circle ();
		var position = createVector(10, 10);
		circles[i].setup(position, Math.random() * 100 + 1);
	}
}

function draw () {
	var gravity = createVector(0, 0.1);
	var wind = createVector(0.01, 0.0);
	background(200);
	fill(0,  100);
	for (var i = 0; i < 100; i++) {
		circles[i].moveCircle();
		circles[i].addForce(gravity);
		circles[i].addForce(wind);
		circles[i].checkEdges();
		circles[i].drawCircle();
	}
}
