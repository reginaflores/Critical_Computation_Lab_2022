//global variables
let x;
let y;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  background(0);

}

function draw() {

  // random(min, max); 
  // x = random(-3892747,54905328420);
  // console.log(x);
  //Xmin = random(0,400);
  //Xmax = random(200, 255);
  //ellipse(Xmin, Xmax, 40, 40);
  x = random(0,400);
  y = random(0,400);
  //local variables
  let r, g, b;
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  fill(r,g,b);
  ellipse(x, y, 40, 40);
  
}