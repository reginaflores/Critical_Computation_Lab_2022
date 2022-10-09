let video;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // webcam capture (at the size of the window)
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() { 
  background(255);

  let ballDist = 10;

  // the video has pixels just like an image
  video.loadPixels();
  for (let y=0; y<video.height; y+=ballDist) {
    for (let x=0; x<video.width; x+=ballDist) {
      
      // at the current position, get the red
      // value (an approximation for brightness)
      // and use it to create the diameter
      let index = (y * video.width + x) * 4;
      let r = video.pixels[index];
    

      let dia = map(r, 0,255, ballDist,5);
      
      // draw a circle at the current location
      // using the diameter we calculated
      fill(255, 0, 255);
      ellipse(x, y, dia, dia);
    }
  }
  
}

