var video;

var vScale = 3;
// var slider;

function setup(){
	createCanvas(480,360);
	pixelDensity(1);
	video = createCapture(VIDEO);
	video.size(width/vScale, height/vScale);
	// slider = createSlider(0, 255, 127);
}

function draw(){
	background(51);

	video.loadPixels();
	loadPixels();


	for (y = 0; y < video.height; y ++){
		for (x = 0; x < video.width; x ++){
			var index = (x + y*video.width) * 4;
			var r = video.pixels[index+0];
			var g = video.pixels[index+1];
			var b = video.pixels[index+2];

			var bright = (r+g+b)/3;

			//var threshold = slider.value();

			var thresholdA = 170;
			var thresholdB = 85;

			if (bright > thresholdA) {
				fill(255, 244, 7); //blue
			} else if (bright > thresholdB) {
				fill(140, 178, 30); //yellow
			} else {
				fill(32, 31, 124); //red
			}

			noStroke();
			rectMode(CENTER);

			rect(x, y, vScale, vScale);


			//second

			if (bright > thresholdA) {
				fill(3, 121, 234); //blue
			} else if (bright > thresholdB) {
				fill(254, 251, 2); //yellow
			} else {
				fill(236, 1, 123); //red
			}

			rect(x + width/vScale, y, vScale, vScale);



			// third

			if (bright > thresholdA) {
				fill(41, 31, 128); //blue
			} else if (bright > thresholdB) {
				fill(246, 147, 194); //yellow
			} else {
				fill(233, 7, 29); //red
			}

			rect(x + width*2/vScale, y, vScale, vScale);



			// forth

			if (bright > thresholdA) {
				fill(237, 135, 11); //blue
			} else if (bright > thresholdB) {
				fill(125, 187, 244); //yellow
			} else {
				fill(125, 66, 146); //red
			}

			rect(x, y + height/vScale, vScale, vScale);



			// fifth

			if (bright > thresholdA) {
				fill(230, 13, 32); //blue
			} else if (bright > thresholdB) {
				fill(252, 250, 251); //yellow
			} else {
				fill(34,33,38); //red
			}

			rect(x + width/vScale, y + height/vScale, vScale, vScale);


			// six

			if (bright > thresholdA) {
				fill(145, 183, 10); //blue
			} else if (bright > thresholdB) {
				fill(251, 255, 168); //yellow
			} else {
				fill(237, 108, 6); //red
			}

			rect(x + width*2/vScale, y + height/vScale, vScale, vScale);


			// seven

			if (bright > thresholdA) {
				fill(32, 109, 99); //blue
			} else if (bright > thresholdB) {
				fill(246, 255, 163); //yellow
			} else {
				fill(227, 3, 125); //red
			}

			rect(x, y + height*2/vScale, vScale, vScale);


			// eight

			if (bright > thresholdA) {
				fill(252, 243, 14); //blue
			} else if (bright > thresholdB) {
				fill(147, 191, 54); //yellow
			} else {
				fill(231,31,33); //red
			}

			rect(x + width/vScale, y + height*2/vScale, vScale, vScale);



			// nine

			if (bright > thresholdA) {
				fill(227, 3, 125); //blue
			} else if (bright > thresholdB) {
				fill(236,120,7); //yellow
			} else {
				fill(41, 25, 149); //red
			}

			rect(x + width*2/vScale, y + height*2/vScale, vScale, vScale);



		}
	}

}
