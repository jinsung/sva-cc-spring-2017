var allParticles = [];
var maxLevel = 3;
var useFill = false;
var colorChange =160;

var data = [];


// Moves to a random direction and comes to a stop.
// Spawns other particles within its lifetime.
function Particle(x, y, level) {
  this.level = level
  this.life = 0;
  
  this.pos = new p5.Vector(x, y);
  this.vel = p5.Vector.random2D();
  this.vel.mult(map(this.level, 0, maxLevel, 3, 2));
  
  this.move = function() {
    this.life++;
    
    // Add friction.
    this.vel.mult(0.93);
    
    this.pos.add(this.vel);
    
    // Spawn a new particle if conditions are met.
    if (this.life % 10 == 0) {
      if (this.level > 0) {
        this.level -= 2;
        var newParticle = new Particle(this.pos.x, this.pos.y, this.level-2);
        allParticles.push(newParticle);
      }
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight); 
  
  colorMode( HSB, 400);
  
  textAlign(CENTER);
  
  background(0);

} 


function draw() {
  // Create fade effect.
  noStroke();
  fill(0, 50);
  rect(0, 0, width, height);
  
  // Move and spawn particles.
  // Remove any that is below the velocity threshold.
  for (var i = allParticles.length-1; i > -1; i--) {
    allParticles[i].move();
    
    if (allParticles[i].vel.mag() < 0.01) {
      allParticles.splice(i, 1);
    }
  }
  
  if (allParticles.length > 0) {
    // Run script to get points to create triangles with.
    data = Delaunay.triangulate(allParticles.map(function(pt) {
      return [pt.pos.x, pt.pos.y];
    }));
  	
    strokeWeight(0.05);
    
    // Display triangles individually.
    for (var i = 0; i < data.length; i += 3) {
      // Collect particles that make this triangle.
      var p1 = allParticles[data[i]];
      var p2 = allParticles[data[i+1]];
      var p3 = allParticles[data[i+2]];
      
      // Don't draw triangle if its area is too big.
      var distThresh = 700;
      
      if (dist(p1.pos.x, p1.pos.y, p2.pos.x, p2.pos.y) > distThresh) {
        continue;
      }
      
      if (dist(p2.pos.x, p2.pos.y, p3.pos.x, p3.pos.y) > distThresh) {
        continue;
      }
      
      if (dist(p1.pos.x, p1.pos.y, p3.pos.x, p3.pos.y) > distThresh) {
        continue;
      }
      
      // Base its hue by the particle's life.
      if (useFill) {
        noStroke();
        fill(colorChange+p1.life*1.5, 360, 360);
      } else {
        noFill();
        stroke(colorChange+p1.life*1.5, 360, 360);
      }
      
      triangle(p1.pos.x, p1.pos.y, 
               p2.pos.x, p2.pos.y, 
               p3.pos.x, p3.pos.y);
    }
  }
  
  noStroke();
  fill(255);
  text("Move your mouse in the window\nPress any key to change to fill/stroke\nClick to change colors", width/2, height-40);
    
    

}


function mouseMoved() {
  allParticles.push(new Particle(mouseX, mouseY, maxLevel));
}


function keyPressed() {
  useFill = ! useFill;
}

function mousePressed(){
   colorChange++;
    if (colorChange < 360){
        colorChange = 0;
    } else {
        colorChange = 205;
    }
    
    //return colorChange;
    
}



