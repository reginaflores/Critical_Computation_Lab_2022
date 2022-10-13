let img = [];

function preload() {
  // preload() runs once
  for(let i=0;i<8;i++){
    img[i] = loadImage('assets/'+i+'.jpg'); // Load the image
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  // image(img[0], 0, 0, 100, 100);
  // image(img[1], 100, 0, 100, 100);
  // image(img[2], 200, 0, 100, 100);
  // image(img[3], 300, 0, 100, 100);
  // image(img[4], 400, 0, 100, 100);

  for(let i =0; i < 8; i++){
      image(img[i], i*100, 0, 100, 100);

  }
}