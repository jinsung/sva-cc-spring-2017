var r = 10;
var g = 10;
var b = 10;
var a = 0;
var b = 90;
var x = 640;
var y = 640;
var speed = 2;
function setup() {
	createCanvas (640, 640);
}
function draw () {

	 strokeWeight (1);
    r++;
	g++;
	b++;
	x--;
	y--;

	//noStroke();
	//fill(r, g, b);
    //fill (0);
    //ellipse(600, 320, 200, 200);


if (mouseX < width/2 && mouseY < height/2){
    arc(width/2, height/2, x, y, a, b);
	//line (width/2, height/2, pmouseX, pmouseY);
	rect(width/2, height/2, x/-2, y/-2);
    stroke (100, g, 100);


} else if (mouseX <= width && mouseY < height/2) {
	rect(CORNERS);
	arc(width/2, height/2, x, y, a, b);
	rect(width/2, height/2, x/2, y/-2);
   	//line (width/2, height/2, pmouseX, pmouseY);
    stroke (r, 100, 100);
    speed--;

} else if (mouseX >= width/2 && mouseY >= height/2) {
	arc(width/2, height/2, x, y, a, b);
	rect(width/2, height/2, x/2, y/2);
   	//line (width/2, height/2, pmouseX, pmouseY);
    stroke (100, 100, b);
    speed--;

} else if (mouseX <= width/2 && mouseY >= height/2) {
	rect(CORNERS);
	arc(width/2, height/2, x, y, a, b);
	rect(width/2, height/2, x/-2, y/2);
   	//line (width/2, height/2, pmouseX, pmouseY);
    stroke (0);
    speed--;
} else {
    noStroke();
    ;
}

}

 function mouseClicked() {

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
    ;
}

}
