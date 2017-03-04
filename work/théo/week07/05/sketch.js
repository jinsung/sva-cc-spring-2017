var circles = [];
var myRed = 200;
function setup () {
	createCanvas (400,400);
	for (var i = 0; i, i < 100; i++) {
		circles[i] = new Circle();
		var position = createVector(10, 10);
		circles[i].setup(position, Math.random() * 100 + 1);
	}

}	

function draw() {
	var gravity = createVector(0, 0.1);
	var wind = createVector(0.01, 0.0);
	background(100);
	noStroke();
	fill(myRed, 0, 0, 100);
	for (var i = 0; i < 100; i++) {
		circles[i].moveCircle();
		circles[i].addForce(gravity);
		circles[i].checkEdges();
		circles[i].drawCircle();
		circles[i].addForce(wind);
	}
	myRed = myRed - .1;
}