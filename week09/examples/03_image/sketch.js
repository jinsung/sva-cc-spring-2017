var myImage;

function preload() {
  myImage = loadImage("assets/image.png");
}

function setup() {
  createCanvas( 500, 500 );
  image(myImage, 0, 0, 500, 500);
}
