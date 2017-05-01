var numOfPoints = 100;
var numOfCircles = 1;
var prevPos;
var time;

var targetPoses;
var currentPoses;

var toggleCircle;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 255);
    smooth();
    time = 0;

    targetPoses = [];
    currentPoses = [];
    for (var i = 0; i < numOfPoints; i++) {
      targetPoses.push(createVector(0,0));
      currentPoses.push(createVector(0,0));
    }
    isCircleShape = true;
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  var size = width * 0.45;
  prevPos = createVector(0,0);
  noiseScale = 0.03;
  //var noiseXScale = mouseX/width * 0.2;
  //var noiseYScale = mouseY/height * 0.2;
  time+= 0.01;
  push();
  strokeWeight(1);
  size = width * 0.1;
  for (var i = 0; i < numOfPoints; i++) {
    if (isCircleShape) {
      var x = width/2 + Math.cos(-Math.PI/2 + Math.PI * 2.0 * i/(numOfPoints-2)) * size;
      var y = height/2 + Math.sin(-Math.PI/2 + Math.PI * 2.0 * i/(numOfPoints-2)) * size;
      var noiseVal = noise(time, x*noiseScale, y*noiseScale);
      var noisePos = map(noiseVal, 0, 1, -5, 5);
      targetPoses[i].set(x+noisePos, y+noisePos);

    } else {
      var length =  Math.PI * 2.0 * size;
      var x = width/2 + ((numOfPoints-i)/numOfPoints * length) - length/2;
      var y = height/2 + size;
      targetPoses[i].set(x, y);
    }
    currentPoses[i] = p5.Vector.lerp(currentPoses[i], targetPoses[i], 0.1);
    if (i > 1) {
      stroke( 255 );
      line(prevPos.x, prevPos.y, currentPoses[i].x, currentPoses[i].y);
    }
    prevPos.set(currentPoses[i].x, currentPoses[i].y);
  }
  pop();
}

function mousePressed() {
  isCircleShape = !isCircleShape;
}
