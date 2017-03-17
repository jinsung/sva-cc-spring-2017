var circle1;
var circle2;

function setup() {
	createCanvas(400, 400);
	circle1 = new Circle();
	circle2 = new Circle();
	var position = createVector(10, 10);
	circle1.setup(position, 10);
	position = createVector(40, 10);
	circle2.setup(position, 100);
}

function draw() {
	var gravity = createVector(0, 0.1);
	var wind = createVector(0.01, 0.0);
	background(100);
	fill(0);
	circle1.moveCircle();
	circle1.addForce(gravity);
	circle1.addForce(wind);
	circle1.checkEdges();
	circle1.drawCircle();
	fill(72, 109, 146);
	circle2.moveCircle();
	circle2.addForce(gravity);
	circle2.addForce(wind);
	circle2.checkEdges();
	circle2.drawCircle();

}