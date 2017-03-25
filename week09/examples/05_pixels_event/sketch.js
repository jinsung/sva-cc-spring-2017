var myImage;

function preload() {
  myImage = loadImage("assets/cc.png");
}

function setup() {
  createCanvas( 500, 500 );
  image(myImage, 0, 0);
  noStroke();
  loadPixels();

  fill(0);
  rect ( 0, 0, width, height);
  /*var d = pixelDensity();
  //var numOfPixels = 4 * (myImage.width * d) * (myImage.height * d);

  var gap = 4;
  var size = 4;
  for ( var py = 0; py < myImage.height; py += gap ) {
    for ( var px = 0; px < myImage.width; px += gap ) {
      var pixelIndex = ( (px + ((py * myImage.height) * d)) * d ) * 4;
      fill(pixels[pixelIndex], pixels[pixelIndex+1], pixels[pixelIndex+2], pixels[pixelIndex+3]);

      ellipse(px+size/2, py+size/2, size, size);
    }
  }*/
}

function draw() {
  //background(0);
  var d = pixelDensity();
  var pixelIndex = (mouseX + (mouseY * myImage.height) * d) * d * 4;

  fill (pixels[pixelIndex], pixels[pixelIndex+1], pixels[pixelIndex+2], pixels[pixelIndex+3]);
  ellipse(mouseX, mouseY, size, size);
}
