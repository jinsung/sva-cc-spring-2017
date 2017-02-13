// 1.  Draw shapes
// 2. No background
// 3. Time or interactive based
// 4. Use different colors for stroke and fill
// 5. Use If statement.

function setup () {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  frameRate(20);
}

function draw() {
	var number;

	if(mouseX > mouseY){
		fill(255);
		stroke(0);
		number = mouseX - mouseY;
	}

	else if (mouseX <= mouseY) {
		fill(0);
		stroke(255);
		number = mouseY - mouseX;
	}

	star(innerWidth/2,innerHeight/2,mouseX,mouseY,number);

}


function star(x, y, radius1, radius2, npoints) {
	var angle = TWO_PI / npoints;
	var halfAngle = angle/2;
 	
 	beginShape();
	for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  	}
 	endShape(CLOSE);
}

