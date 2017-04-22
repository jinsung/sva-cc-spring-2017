var xPos;
var prevXPos;

function setup () {
    createCanvas (500, 500);
    frameRate (10);
    prevXPos = 0;
    x Pos = 0;
}

function draw () {
    background (200);
    //xPos = mouseX;
    xPos = random (0, width);
    xPos = lerp (prevXPos, xPos, 0.1);
    line (xPos, 0, xPos, height);
    prevXPos = xPos;
}