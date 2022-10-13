
let img;


function preload(){
  img = loadImage('assets/statue.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img.loadPixels();
  img.resize(windowWidth, windowHeight);
  img.updatePixels();

}

function draw() {
  background(220);

  for(let x=0; x<img.width; x+=20){
    for(let y=0; y<img.height; y+=20){

        let pindex = (x+ (y * img.width))*4;

        let r = img.pixels[pindex+0];
        let g = img.pixels[pindex+1];
        let b = img.pixels[pindex+2];

        fill(r, g, b);

        rect(x, y, 20, 20);

    }
  }

}