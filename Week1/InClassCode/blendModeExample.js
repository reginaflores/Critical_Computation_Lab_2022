
function setup() {
  createCanvas(400, 400);
// blendMode(LIGHTEST);
blendMode(MULTIPLY);
  
}

function draw() {
  
  //Placing clear() at the beginning of the draw() function will clear the pixels within a buffer. This lets you use blendMode(MULTIPLY) without your overlapping shapes turning black after the first few frames.
  clear(); 
  //Recall that the draw function runs continuously
  console.log("Draw function frames");
  background(220);
  
  

  strokeWeight(30);//thickness of line
  stroke(80, 150, 255);//color
  line(25, 25, 75, 75);//x1, y1, x2, y2 
  stroke(255, 50, 50);
  line(75, 25, 25, 75);
  
}
