var angle = 0;
var rectX = 0;
var rectY = 0;
var length = 50;
var rectSize = 50;
function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 255)
}

function draw() {
	background(255);
	var numberOfRects = 100;
	var twoPI = Math.PI * 2;
	length = 10;
	for( 
		var index = 0;
		index < numberOfRects;
		index = index + 1
		){length = length + (index * mouseX * 0.001);

		var segAngle = index/numberOfRects;
		var angle = segAngle * (twoPI * mouseY * 0.1);
		fill (segAngle * 255, 150, 255);
		stroke (segAngle * 255, 255, 255);

		rectX = Math.cos(angle) * length + width/2;
		rectY = Math.sin(angle) * length + height/2;

		rect(rectX, rectY, rectSize, rectSize);
	}
}