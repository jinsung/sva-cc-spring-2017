var ps;
var red;
var green;
var blue;
var fish;

function setup() {
	noCursor();
	createCanvas(690, 400);
	time = 0;
	smooth();
	ps = new ParticleSystem();
	fish = new Fish();
	fish.setup();
	ps.setup(10);
	red = 100;
	green = 100;
	blue = 200;
	
}

function draw () {
	time++;
	background(red, green, blue);
	ps.draw();
	fill(0, 20, 200);
	fish.draw();
	fish.segment();


	if( mouseX < width / 2 ) {
		green++;
		blue--;
	} else {
		green--;
		blue++;
	}

	if (green > 255) {
		green = 255;
	} else if (green < 0) {
		green = 0;
	
	}

	if (blue >= 255) {
		blue = 255;
	} else if ( blue <+ 0){
		blue = 0;

	}

};

function mouseMoved () {
		myRed = myRed + 5;
		myGreen = myGreen + 1;
		myBlue = myBlue + 1;
};
function mouseDragged () {
		myRed = myRed - 5;
		myGreen = myGreen -1;
		myBlue = myBlue -1;
}

		
function mouseClicked () {
		myRed = 255;
		myGreen = 155;
		myBlue = 155;

};