
let img;

function preload() {
  // preload() runs once
  img = loadImage('assets/statue.jpg'); // Load the image
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  img.loadPixels(); // loads image
  img.resize(windowWidth, windowHeight); // resizes image to canvas size
  img.updatePixels(); // updates image

}

function draw() {
  // clear();
  background(220);

  // image(img, 0, 0, 400, 500);

    let size = map(mouseX, 0, width, 0, 30);

    for (let x=0; x < img.width; x+=20) {
      for (let y=0; y < img.height; y+=20) {
      
        //this is the index of the array
        let pindex = (x + (y * img.width))* 4;
        //this is the rbg value inside the index        
        let r = img.pixels[pindex + 0];
        let g = img.pixels[pindex + 1];
        let b = img.pixels[pindex + 2];

        fill(r,g,b);
        
        rect(x, y, size, size);

    }
  }
}