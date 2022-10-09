//=======================================
//createCapture() Function Notes:
//createCapture creates a video element onto your screen. 

//Syntax: createCanvas(width, height) puts a canvas onto the screen. 

//Connects to the default camera of your computer 

//Part of the p5 DOM library

//Note: https vs http 
//https is secure make sure that youre on an https site so that the browser asks permission to use the camera
//=======================================


let video;

function setup() {
  createCanvas(400, 300);
  video = createCapture(VIDEO); //640x480 == DEFAULT RESOLUTION OF YOUR CAMERA
  video.size(400, 400);
  video.hide();

}

function draw() {
  background(220);
  image(video, 0, 0);
}
