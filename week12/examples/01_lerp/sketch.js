var targetX;
var circleX;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 255);
    targetX = 0;
    circleX = 0;
}

function draw() {
    background(200);
    targetX = mouseX;
    targetX += random(-10.0, 10.0);
    //circleX = targetX;
    //circleX += (targetX - circleX) * 0.1;
    circleX = lerp(circleX, targetX, 0.1);
    
    fill(200, 255, 200, 100);
    ellipse(circleX, height/2.0, 60, 60);
}

