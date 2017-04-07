var r = 255;
var g = 0
var b = 0
var particleSystem;

function setup() {
  background(0);
  createCanvas( 700, 700 );
  stroke(50);


  particleSystem = new ParticleSystem();
  particleSystem.setup();
}

function draw() {
   
   if (mouseIsPressed) {
   particleSystem.addParticle(mouseX, mouseY, 10);
   mouseX = mouseX + 1;
   r = r - 0.25
   g = g + 0.5
   b = b + 1
   if (r > 5) {
      r = r - 0.25}
   else{
      r = r + 1}
   if (g > 5) {
      g = g - 0.2}
   else{
      g = g + 1}
  }
  
  particleSystem.draw();

}


function mousePressed() {
   background(255);
   mouseX = 0;
   stroke(50);
   r = 255
   g = 0

}
