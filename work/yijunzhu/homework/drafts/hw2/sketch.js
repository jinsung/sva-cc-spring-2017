circleSize = 40;

function setup() {
	createCanvas(600,600);
	noStroke;
	ellipseMode(RADIUS);
	 // colorMode(HSB, 100);
	// colorMode(HSB, 360, 100, 100);
	// frameRate(1);
}


function draw() {

	//sun gradient
	drawGradient(width/2,height/2);

	//draw sun
	noStroke;
	fill(255,0,0);
	// ellipse(width/2,height/2,10,10);


	if (mouseY < 100){
			ellipse(width/2,height/2,100 - mouseY,100 - mouseY);		
		}

	else if (mouseY >= 100 && mouseY < height/2){
		ellipse(width/2,height/2,0,0);
	}

	//draw ground
	// fill(0);
	// rect(0,height/2,width,height/2);
	stroke(0);
	fill(255-mouseY);
	rect(0,height/2,width,height/2);


}


function drawGradient(x,y){
	var radius = width/2;
	var red = mouseY * (-20);
	for (var r = radius; r>0; --r){
		fill(red,100,100);
		ellipse(x,y,r,r);
		red = red + 3;
	}

}

