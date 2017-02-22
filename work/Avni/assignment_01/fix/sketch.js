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
	if (r < 255){
  	r++;
		g++;
		b++;
	} else {
		r = 0;
		g = 0;
		b = 0;
	}
	if (x > 0 ) {
		if (mouseIsPressed){
			x--;
			y--;
		}
	} else {
		x = width;
		y = height;
	}

	if (mouseX < width/2 && mouseY < height/2){
		stroke (100, g, 100);

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
