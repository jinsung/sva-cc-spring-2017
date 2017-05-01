
function setup(){
  createCanvas(1920, 1080, WEBGL);
}

function draw(){
  background(0);
  var radius = width * 2.5;
  
  orbitControl();

  rotateY(frameCount * 0.000000000000000001);

  for(var j = 0; j < 140; j++){
    push();
    for(var i = 0; i < -150; i++){
      translate(sin(frameCount * 0.05 + j) * .8, tan(frameCount * 0.05 + j) * .8, i * 0.05);
      rotateZ(frameCount * 0.0002);
      push();
      sphere(7, 6, 5); 
      pop();
    }
      for(var i = 0; i < 50; i++){
      translate( tan(frameCount * -0.5 + j) * -.8, sin(frameCount * -0.5 + j) * -.8, i * -0.5);
      rotateZ(frameCount * -0.02);
      push();
      sphere(7, 6, 5); 
      pop();
    }
    pop();
  }
    
}