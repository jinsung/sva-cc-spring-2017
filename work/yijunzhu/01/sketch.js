// var myXPosition1 = 0;
// var myXPosition2 = 0;
// var myXPosition3 = 50;
// var myYPosition1 = 0;
// var myYPosition2 = 0;
// var myYPosition3 = 150;

// var myX = 10;
// var myY = 20;

// var myRed;
// var myGrenn;
// var myBlue;

var mySize;
var myX;
var myY;
var myTargetX;
var myTargetY;


function setup (){
	createCanvas(480,400);
	// myX = 100*(2+40);
	// console.log("what is myX value?",myX);
	// background(150);
	mySize = 20;
	myX = random(width);
	myY = random(height);
	myTargetX = myX;
	myTargetY = myY;
	noStroke();
}


 
function draw () {


// //WHITE TEXT
// 	var size = 300;
// 	textSize(300);
// 	fill(255);

// 	text("white",320,340);

// 	// var color = random();
// 	fill(0);
// 	ellipse(mouseX,mouseY,size,size);




	//moving

	// var size = 300;
	// textSize(300);
	// fill(0);

	// // text("white",450,620);

	// var mySize = 500;
	// // background (150);
	// fill(255,0,frameCount/10);
	// stroke(100);
	// fill(255);
	// line(mouseX,mouseY, pmouseX, pmouseY + 300);

	// ellipse(width/2,myYPosition1,mySize,mySize);
	// ellipse(myXPosition2,myYPosition2+200,mySize,mySize);
	// ellipse(myXPosition3,myYPosition3+400,mySize,mySize);

	// myXPosition1 = myXPosition1 + 1;
	// myYPosition1 = myYPosition1 + 0.4;

	// myXPosition2 = myXPosition2 + 0.5;
	// myYPosition2 = myYPosition2 + 1;

	// myXPosition3 = myXPosition3 + 0.5;
	// myYPosition3 = myYPosition3 + 0.5;



//line
// stroke(255,0,frameCount/4);

// 	line(mouseX,mouseY,pmouseX,pmouseY);


// //random circle

// 	myRed = random(255);
// 	myGreen = random(255);
// 	myBlue = random(255);

// 	mySize = random(0,200);
// 	myX = random(width);
// 	myY = random(height);

// 	noStroke();
// 	fill(myRed,myGreen,myBlue);

// 	ellipse(myX,myY,mySize,mySize);


	background(0);
	var xDifferent = myTargetX - myX;
	var yDifferent = myTargetY - myY;


	myX = myX + xDifferent * 0.05;
	myY = myY + yDifferent * 0.05;

	fill(100);

	ellipse(myX, myY, mySize, mySize);
}

function mouseClicked(){
	myTargetX = mouseX;
	myTargetY = mouseY;

}
