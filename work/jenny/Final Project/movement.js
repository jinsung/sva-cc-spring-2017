var numOfCircles;
var noiseAmount;

var circlePoses;
var linePoses;
var targetPoses;
var drawCircle;

var lineColor;

function setup(){
    drawCircle = true;
    circlePoses = [];
    linePoses = [];
    targetPoses = [];
    lineColor = 100;
}

function movement(){
    for (var j = 0; j < numOfCircles; j++) {
        r = (width * 0.45) * ((j+1)/numOfCircles) ;
        noiseAmount = r * r * r * 0.001;
}
