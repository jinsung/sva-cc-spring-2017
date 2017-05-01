var numOfPoints = 100;
var numOfCircles = 1;
var prevPos;
var time;

var targetPoses;
var currentPoses;

var toggleCircle;

function Circles ()
{
    this.setup() {
        this.time = 0;

        this.targetPoses = [];
        this.currentPoses = [];
        for (var i = 0; i < numOfPoints; i++) {
          targetPoses.push(createVector(0,0));
          currentPoses.push(createVector(0,0));
        }
        isCircleShape = true;
    }

    this.draw(noiseIndex, isSoundPlaying) {
      noFill();
      stroke(255);
      var size = width * 0.45;
      prevPos = createVector(0,0);
      if ( isSoundPlaying ) {
          noiseScale = 0.1;
      } else {
          noiseScale = 0.03;
      }
      
      //var noiseXScale = mouseX/width * 0.2;
      //var noiseYScale = mouseY/height * 0.2;
      time+= 0.01;
      push();
      strokeWeight(1);
      size = width * 0.1;
      for (var i = 0; i < numOfPoints; i++) {
          if (i == soundIndex) {
              console.log(soundIndex + " is playing");
          }
          var x = width/2 + Math.cos(-Math.PI/2 + Math.PI * 2.0 * i/(numOfPoints-2)) * size;
          var y = height/2 + Math.sin(-Math.PI/2 + Math.PI * 2.0 * i/(numOfPoints-2)) * size;
          var noiseVal = noise(time, x*noiseScale, y*noiseScale);
          var noisePos = map(noiseVal, 0, 1, -5, 5);
          targetPoses[i].set(x+noisePos, y+noisePos);

        
        if (i > 1) {
          stroke( 255 );
          line(prevPos.x, prevPos.y, currentPoses[i].x, currentPoses[i].y);
        }
        prevPos.set(currentPoses[i].x, currentPoses[i].y);
      }
      pop();
    }
}
