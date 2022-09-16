let squareSizePixels = 100;
    
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  //Global coordinate system
  translate(width/2, height/2);
  
  //Drawing the Coordinate Line
  push();
    strokeWeight(5);
    //red line
    stroke(255,0,0);
    line(200,0,0,0);
    //green line
    stroke(0,255,0);
    line(0,200,0,0);
    //blue line
    stroke(0,0,255);
    line(0,0,0,-200);
    //brown line 
    stroke(100,0,0);
    line(-200,0,0,0);
  pop();
  
  //Green Square
  push();
    fill(0,255,0);
    rect(0,0,squareSizePixels, squareSizePixels);
    triangle(0, squareSizePixels/2, squareSizePixels, squareSizePixels/2, squareSizePixels/2, 0);    
    triangle(0, squareSizePixels/2, squareSizePixels, squareSizePixels/2, squareSizePixels/2, squareSizePixels);    
  pop();
  
  //Red Square
  push();
    fill(255,0,0);
    rect(0,-squareSizePixels,squareSizePixels,squareSizePixels)
    triangle(0, -squareSizePixels/2, squareSizePixels, -squareSizePixels/2, squareSizePixels/2, 0);    
    triangle(0, -squareSizePixels/2, squareSizePixels, -squareSizePixels/2, squareSizePixels/2, -squareSizePixels);    
  pop();
  
  //Blue Square
  push();
    fill(0,0,255);
    rect(-squareSizePixels,-squareSizePixels,squareSizePixels,squareSizePixels)
    triangle(0, -squareSizePixels/2, -squareSizePixels, -squareSizePixels/2, -squareSizePixels/2, 0);    
    triangle(0, -squareSizePixels/2, -squareSizePixels, -squareSizePixels/2, -squareSizePixels/2, -squareSizePixels);    
  pop();
  
  //Brown Square
  push();
    fill(100,0,0);
    rect(-squareSizePixels,0,squareSizePixels,squareSizePixels)
    triangle(0, squareSizePixels/2, -squareSizePixels, squareSizePixels/2, -squareSizePixels/2, 0);    
    triangle(0, squareSizePixels/2, -squareSizePixels, squareSizePixels/2, -squareSizePixels/2, squareSizePixels);    
  pop();
  
}