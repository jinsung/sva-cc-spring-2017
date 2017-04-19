function setup () {
	createCanvas( 500, 500 );
    rectMode(CENTER);
}

function draw() {
	background(200);
    
    push();
        translate (200, 200);
        rotate(PI / 4);
        fill(255, 255, 255);
        rect(0, 0, 100, 100);
        fill(255, 0, 0);
        rect(0, 0, 50, 50);
    pop();
    
    push();
        translate(100, 100);
        fill(0, 255, 0);
        ellipse(0, 0, 50, 50);
    pop();
}


