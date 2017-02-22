var r = 0;
var g = 0;
var b = 0;
var a = 0;
var b = Math.PI/2;
var x = 640;
var y = 640;
function setup() {
	createCanvas (640, 640);
	background(255);
	noFill();
	rect(CORNERS);
}
function draw () {
	strokeWeight (1);
	// 2. Control your drawing with additional if statements
	if (r < 255){ // check if r, g, b value is more than max color value (255)
  	r++;
		g++;
		b++;
	} else { // if r, g, b value is more than max value set them back to 0
		r = 0;
		g = 0;
		b = 0;
	}
	if (x > 0 ) { // check if x and y value is 0
		if (mouseIsPressed){ // decrease this value only when mouse is clicked.
			x--;
			y--;
		}
	} else { // if x and y is zero, set them to width and height value.
		x = width;
		y = height;
	}

	if (mouseX < width/2 && mouseY < height/2){
		stroke (100, g, 100);
		// 2. Take a look how I draw Arc.
		// Arc is using radian not degree.
		// In this case, start position is Math.PI(3.14...), which is left side of your canvas,
		// and end position is Math.PI + Math.PI/2(4.71...), which is top of your canvas
    arc(width/2, height/2, x, y, Math.PI, Math.PI + Math.PI/2);
		rect(width/2, height/2, x/-2, y/-2);
	} else if (mouseX > width/2 && mouseY < height/2) {
		stroke (r, 100, 100);
		arc(width/2, height/2, x, y, Math.PI + Math.PI/2, 0);
		rect(width/2, height/2, x/2, y/-2);

	} else if (mouseX >= width/2 && mouseY >= height/2) {
		stroke (100, 100, b);
		arc(width/2, height/2, x, y, 0, Math.PI/2);
		rect(width/2, height/2, x/2, y/2);

	} else if (mouseX <= width/2 && mouseY >= height/2) {
		stroke (r, g, b);
		arc(width/2, height/2, x, y, Math.PI/2, Math.PI);
		rect(width/2, height/2, x/-2, y/2);

	} else {
    noStroke();
	}
}


// Commented this out and use mouseIsPressed built in variable.
/*function mouseClicked() {
  if (mouseX < width/2 && mouseY < height/2){
   	ellipse(width/2, height/2, x, y);
   	fill (0, 80);
	} else if (mouseX <= width && mouseY < height/2) {
   ellipse(width/2, height/2, x, y);
   fill (100, g, 100, 80);
  } else if (mouseX >= width/2 && mouseY >= height/2) {
  	ellipse(width/2, height/2, x, y);
  	fill (r, 100, 100, 80);
  } else if (mouseX <= width/2 && mouseY >= height/2) {
   	ellipse(width/2, height/2, x, y);
   	fill (100, 100, b, 80);
  } else {
    nofill();
  }
}*/
