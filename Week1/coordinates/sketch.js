function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  //Global coordinate system
  translate(width/2, height/2);
  
  //Drawing the Coordinate Lines
  push();
    strokeWeight(5);
    //red line
    stroke(255,0,0);
    line(100,0,0,0);
    //green line
    stroke(0,255,0);
    line(0,100,0,0);
    //blue line
    stroke(0,0,255);
    line(0,0,0,-100);
    //brown line 
    stroke(100,0,0);
    line(-100,0,0,0);
  pop();
  
  //Green Square
  push();
    fill(0,255,0);
    rect(0,0,50,50)
    triangle(0, 25, 50, 25, 25, 0);    
    triangle(0, 25, 50, 25, 25, 50);    
  pop();
  
  //Red Square
  push();
    fill(255,0,0);
    rect(0,-50,50,50)
    triangle(0, -25, 50, -25, 25, 0);    
    triangle(0, -25, 50, -25, 25, -50);    
  pop();
  
  //Blue Square
  push();
    fill(0,0,255);
    rect(-50,-50,50,50)
    triangle(0, -25, -50, -25, -25, 0);    
    triangle(0, -25, -50, -25, -25, -50);    
  pop();
  
  //Brown Square
  push();
    fill(100,0,0);
    rect(-50,0,50,50)
    triangle(0, 25, -50, 25, -25, 0);    
    triangle(0, 25, -50, 25, -25, 50);    
  pop();
  
}