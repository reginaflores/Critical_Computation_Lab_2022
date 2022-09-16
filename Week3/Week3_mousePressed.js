  var x=0; 
  var mY=0;
  var mX=0;
//note these are just different ways of declaring variables. "Let" or "var".
let d = 0;
let s = "hello";
let k = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  

  //Let x be the X position of the ellipse
  fill(255, 0,0);
  ellipse(x, 120, 16, 16);
  x = x +1;

  
  //Let mX and mY be the x and y mouse positions
  mY = mouseY;
  mX = mouseX;
  fill(0,255,0);
  ellipse(mX, mY, 40, 40);
  
  // console.log(mX,mY);
  
  //Now lets make a ball every time the mouse is pressed
  fill(0,0,255);
  ellipse(x,200, d, d);
  
  //stop the ball from going off screen
  if(x>width){
    x=0;
  }
  
  //key Pressed
  textSize(30);
  text(s, k,300);
}

function mousePressed() {
  d = d + 10;
}

function keyPressed(){
  k+=40;
  // console.log(k);
}