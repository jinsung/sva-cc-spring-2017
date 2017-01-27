function setup() {


   canvas = createCanvas(windowWidth, windowHeight);
   background(200);
}

function draw() {
ellipse(mouseX, mouseY,mouseX/3,mouseX/3);
}