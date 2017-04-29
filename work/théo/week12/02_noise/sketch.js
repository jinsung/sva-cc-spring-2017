var xPos;
var prevXPos;
function setup (){
    createCanvas( 500, 500 )
    frameRate(12);
    prevXPos = 0;
    xPos = 0;
    
}

function draw (){
    background(150);
    //xPos = mouseX;
    xPos += random(0, width);
    xPos = lerp(prevXPos, xPos, 0.1);
    stroke(200, 50, 0);
    line (xPos, 0, xPos, height);
    prevXPos = xPos;

}