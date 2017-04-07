var circle1;
var circle2;

function setup() {
	createCanvas( 400, 400 );
	circle1 = new Circle();
	circle2 = new Circle();
	circle1.setup(10, 10, 2, 2.5);
	circle2.setup(40, 10, 1, 1.5);
}

function draw() {
	background(100);
	fill(0);
	circle1.moveCircle();
	circle1.checkEdges();
	circle1.drawCircle();
	fill(255, 0, 0);
	circle2.moveCircle();
	circle2.checkEdges();
	circle2.drawCircle();
}