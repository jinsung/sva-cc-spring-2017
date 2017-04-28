var numOfPoints;
var prevPos;
var timeX;
var timeY;

var circlePoses;
var linePoses;
var targetPoses;
var drawCircle;

var lineColor;

function setup (){
    createCanvas( 500,500 );
    numOfPoints = 60;
    numOfCircles = 20;
    prevPos = createVector(0,0);
    timeX = 0;
    timeY = 0;
    drawCircle = true;
    circlePoses = [];
    linePoses = [];
    targetPoses = [];
    lineColor = 100;
    
    var r = width * 0.1;
    var noiseAmount = 0.1;
    
    var length = r * TWO_PI;
    
    for (var i = 0; i < numOfPoints; i++ ){
        var xPos = width/2 + Math.cos(i/(numOfPoints-2) * TWO_PI- PI/2) * r;
        var yPos = height/2 + Math.sin(i/(numOfPoints-2) * TWO_PI- PI/2) * r;

        var noiseValX = noise(timeX, xPos * noiseAmount, yPos * noiseAmount);
        var noiseValY = noise(timeY, yPos * noiseAmount, xPos * noiseAmount);

        noiseValX = map(noiseValX, 0, 1, -5, 5);
        noiseValY = map(noiseValY, 0, 1, -5, 5);

        xPos += noiseValX;
        yPos += noiseValY;
        
        circlePoses.push(createVector(xPos, yPos));
        targetPoses.push(createVector(xPos, yPos));
        var xLinePos = width/2 + ((numOfPoints - i)/numOfPoints * length) - length/2;
        var yLinePos = height/2 + r;
        
        linePoses.push(createVector(xLinePos, yLinePos));
    }
}

function draw (){
    background(0);
    timeX += 0.04;
    timeY += 0.03;
    
    
    stroke( lineColor );
    for(var i = 0; i < numOfPoints; i++ ) {
        
        if (drawCircle){
           targetPoses[i] = p5.Vector.lerp(targetPoses[i], circlePoses[i], 0.1); 
        } else {
           targetPoses[i] = p5.Vector.lerp(targetPoses[i], linePoses[i], 0.1); 
        }
        
        if (i > 0){
            line(targetPoses[i-1].x, targetPoses[i-1].y, targetPoses[i].x, targetPoses[i].y);
        }
    }
}

function mousePressed(){
    drawCircle = !drawCircle;
}

function mouseMoved() {
    for(var i = 0; i < numOfPoints; i++ ) {
        if (targetPoses[i].dist(createVector(mouseX, mouseY) ) < 10) {
            lineColor = 255;
            return;
        } else {
            lineColor = 100;
        }
    }
}