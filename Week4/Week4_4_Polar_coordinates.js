//https://natureofcode.com/book/chapter-3-oscillation/
//Nature of Code, Chapter 3, Oscillation


let r = 50;
let theta = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //Polar coordinates (r,theta) are converted to Cartesian (x,y) for use in the ellipse() function.
  
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  let x = r * cos(theta);
  let y = r * sin(theta);
 
  fill(0);
  ellipse(x+width/2, y+height/2, 16, 16);
  noFill();
  console.log(r*2);
  circle(width/2, height/2, 2*r);
 
  theta += 0.03;
  
}


 

 


 
