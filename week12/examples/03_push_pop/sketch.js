var angle;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, 255);
    rectMode(CENTER);
    angle = 0;
}

function draw() {
    angle += 0.03;
    background(200);
    push();
    translate(width/2, height/2);
    noStroke();
    rotate(angle);
    fill((angle * 20) % 255, 200, 200 );
    rect(0, 0, 100, 100);
    pop();
    
    push();
    fill(0);
    translate(50, 50);
    rotate(angle * 2);
    ellipse(0, 0, 2, 2);
    rect(10, 10, 10, 10);
    pop();

}