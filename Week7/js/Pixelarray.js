//============================================================
//In p5js there is a function to get the pixels in the canvas. 
//It is called pixel array. 
//It is a 1D array

//For every pixel there is an RGBA value. So the length of the array is:
//height x width x 4 = length of ppixel array

// To get an individual pixel = (x + (y * width))* 4
//============================================================

function setup(){

	createCanvas(400, 400);
	pixelDensity(1);

}

function draw(){

	background(0);
	loadPixels();

	for(let y=0; y<height; y++){
		for(let x=0;x<width;x++){
			let index = (x+(y*width))*4

			pixels[index+0]=x;
			pixels[index+1]=0;
			pixels[index+2]=y;
			pixels[index+3]=255;

		}
	}

	updatePixels();

}