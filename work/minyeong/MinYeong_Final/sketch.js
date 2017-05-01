var particleSystem;
var watertap;

function setup() {
  createCanvas( 400, 400 );
  noStroke();

  particleSystem = new ParticleSystem();
  particleSystem.setup();


  watertap = new Watertab();
  watertap.setup();

}

function draw() {

  background(0);
 
  if (mouseIsPressed) {
      if (mouseY > 100 && mouseY < 200 && mouseX < 130) {
        particleSystem.addParticle(105, 120, 30);
      }
  }
  particleSystem.draw();  
  watertap.draw();
}
