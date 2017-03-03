var Y_AXIS = 1;
var X_AXIS = 2;

//setting color

var r, g, b;
var c1, c2, d1, d2;


//setting circles
circleRadius = 10;



function setup() {
	createCanvas(700,700);
	r = random(255);
	g = random(255);
	b = random(255);
	c1 = color(0);
	c2 = color(255);
	d1 = color(200,100,0);
	d2 = color(0,100,150);
	noLoop;
}

// 1.  Draw shapes
// 2. No background
// 3. Time or interactive based
// 4. Use different colors for stroke and fill
// 5. Use If statement.


function draw() {

	setGradient(0,0,width/2,height,c1,c2,X_AXIS);
	setGradient(width/2,0,width/2,height,c2,c1,X_AXIS);

	setGradient(50,90,540,80,c1,c2, Y_AXIS);
	setGradient(50,190,540,80,c2,c1, X_AXIS);
	setGradient(50,290,540,80,c1,c2, Y_AXIS);
	setGradient(50,390,540,80,c2,c1, X_AXIS);
	setGradient(50,490,540,80,c1,c2, Y_AXIS);
	setGradient(50,590,540,80,c2,c1, X_AXIS);

	// rect(20, 20, 20, 20);
	
	// for ( var i = 1; i < 3; i++ ){
	// ellipse(width/2, height/2, circleRadius, circleRadius);
	// circleRadius = circleRadius + 1;
	
	// }
}


function setGradient(x, y, w, h, c1, c2, axis) {

	if (axis == Y_AXIS){
		for (var i = y; i <= y + h; i++){
			var inter = map(i, y, y+h, 0, 1);
			var c = lerpColor(c1,c2,inter);
			stroke(c);
			line(x,i,x+w,i);
		}
	}
	else if (axis == X_AXIS){
		for (var i = x; i <= x + w; i ++){
			var inter = map(i,x,x+w,0,1);
			var c = lerpColor(c1,c2,inter);
			stroke(c);
			line(i,y,i,y+h);
		}
	}
}


// function mousePressed(){
// 	fill(100);
// 	rect(mouseX,mouseY,20,20);
// }

