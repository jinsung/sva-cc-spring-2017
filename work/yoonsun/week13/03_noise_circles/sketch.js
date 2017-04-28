var numOfPoints;
var numOfCircles;
var prevPos;
var timeX;
var timeY;

function setup () {
	createCanvas (500, 500);
    numOfPoints = 60;
    numOfCircles = 20;
    prevPos = createVector (0,0);
    timeX = 0;
    timeY = 0;
}

function draw () {
	background (0);
    timeX += 0.04;
    timeY += 0.03;
    var r = width * 0.45;
    var noiseAmount = 0.1;
    for (var j = 0; j < numOfCircles; j++) {
        r = (width * 0.45) * ((j+1)/numOfCircles) ;
        noiseAmount = r * r * r * 0.001;
        for (var i = 0; i < numOfPoints; i++) {
            var xPos = width/2 + Math.cos(i/(numOfPoints-2) * TWO_PI) * r;
            var yPos = height/2 + Math.sin(i/(numOfPoints-2) * TWO_PI) * r;
            
            var noiseValX = noise (timeX, xPos * noiseAmount, yPos * noiseAmount);
            var noiseValY = noise (timeY, yPos * noiseAmount, xPos * noiseAmount);

            noiseValX = map (noiseValX, 0, 1, -5, 5);
            noiseValY = map (noiseValY, 0, 1, -5, 5);

            xPos += noiseValX;
            yPos += noiseValY;
            stroke (255 * (j+1)/numOfCircles);
            if (i > 1) {
                line(xPos, yPos, prevPos.x, prevPos.y);
            }
            
            prevPos = createVector (xPos, yPos);   
        
        }       
    }
}