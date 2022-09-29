//I am using BFA Zhette Jung'S Homework 2 as an example of how to create 

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(20, 10, 50);
  girl(width/2, height/2);

}

function girl(x, y){
        
  // ears
  stroke(170, 120, 70);
  fill(255, 240, 220);
  ellipse(x-65, y+5, 50);
  ellipse(x+65, y+5, 50);

  
  //face
  ellipse(x, y, 150, 130);
  
  //blush
  noStroke();
  fill(255, 180, 170);
  ellipse(x-45, y+35, 20)
  ellipse(x+45, y+35, 20)

  
  //eyes
  fill(110, 150, 210);
  strokeWeight(3);
  stroke(40, 30, 60);
  rectMode(RADIUS);
  rect(x-50, y+15, 20, 20, 10);
  rect(x+50, y+15, 20, 20, 10);
  
  //pupils
  fill(40, 30, 60);
  ellipse(x+50, y+15, 26);
  ellipse(x-50, y+15, 26);
  
  fill(40, 30, 60);
  ellipse(x+50, y+15, 20);
  ellipse(x-50, y+15, 20);
   
  //mouth
  noFill();
  stroke(205, 15, 25);
  line(x-4, y+10, x+7, y+10);
  
  
  //hair
  stroke(40, 30, 60);
  //buns
  fill(110, 150, 210);
  ellipse(x-60, y-60, 60);
  ellipse(x+60, y-60, 60);
  
  //bangs
  //arc(x, y, w, h, start, stop, [mode])
  arc(x, y-15, 160, 140, 9.4, 0, CHORD);

}
