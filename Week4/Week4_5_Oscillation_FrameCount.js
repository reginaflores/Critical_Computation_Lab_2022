//https://natureofcode.com/book/chapter-3-oscillation/
//Nature of Code, Chapter 3, Oscillation


function setup() {
  createCanvas(400, 400);
}
 
function draw() {
  background(255);
 
  let period = 200;
  let amplitude = 200;
// Calculating horizontal location according to the formula for simple harmonic motion
  let x = amplitude * cos(TWO_PI * frameCount / period);
  console.log(frameCount);
  stroke(0);
  fill(175);
  translate(width/2,height/2);
  line(0,0,x,0);
  ellipse(x,0,20,20);
}