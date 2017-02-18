var r = 10;
var g = 10;
var b = 10;
var a = 0;
var b = Math.PI/2;
var x = 640;
var y = 640;
function setup() {
	createCanvas (640, 640);
}
function draw () {
	//background(255);
	strokeWeight (1);
  r++;
	g++;
	//b++;
	if (x > 0) {
		x--;
		y--;
	}
  stroke (100, g, 100);
	if (mouseX < width/2 && mouseY < height/2){
    arc(width/2, height/2, x, y, Math.PI, Math.PI + Math.PI/2);
		//rect(width/2, height/2, x/-2, y/-2);

	} else if (mouseX > width/2 && mouseY < height/2) {
		rect(CORNERS);
		arc(width/2, height/2, x, y, Math.PI + Math.PI/2, 0);
		//rect(width/2, height/2, x/2, y/-2);
    stroke (r, 100, 100);
	} else if (mouseX >= width/2 && mouseY >= height/2) {
		arc(width/2, height/2, x, y, 0, Math.PI/2);
		//rect(width/2, height/2, x/2, y/2);
    stroke (100, 100, b);
	} else if (mouseX <= width/2 && mouseY >= height/2) {
		rect(CORNERS);
		arc(width/2, height/2, x, y, Math.PI/2, Math.PI);
		//rect(width/2, height/2, x/-2, y/2);
    stroke (0);
	} else {
    noStroke();
	}
}

 function mouseClicked() {
   /*if (mouseX < width/2 && mouseY < height/2){
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
  }*/
}
