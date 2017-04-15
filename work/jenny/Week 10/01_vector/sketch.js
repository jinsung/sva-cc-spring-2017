function setup () {
	createCanvas( 500, 500 );
}

function draw() {
	background(150);
	var v1 = createVector ( 20, 0 );
	var v2 = createVector ( 0, 10 );

	var mouseVec = createVector(mouseX, mouseY);

	mouseVec.mult(2.0);
    noFill();
    stroke(0);

    line(0,0, mouseVec.x, mouseVec.y);

    fill(255, 0, 0);
    rect ( 0, 0, mouseVec.mag(), 25);
}


