var r = 0;
var time = 0;
function setup() {
    createCanvas(400, 400);
}

function draw() {
  time += 0.01;
  //if (time > 1) {
  //  time = 0;

    background(0)
    stroke(255);
    //r = Math.random() * width;
    r = noise(time) * width;
    line(r, 0, r, height);
  //}

}
