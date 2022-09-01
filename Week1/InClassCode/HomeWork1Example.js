//Homeowrk 2 Example
//Sketch by Heli Moon


function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(153, 200, 0);
  
  //////////////////////////////////////
  
  //Rotated earpiece on top
  
  //We use Push and Pop here to only translate the top ipod and leave the bottom ipod to regular coordinates
  
  push();
 //We move the (0,0) point to be able to easlily rotate the second ipod
  
  translate(width / 2, height / 2); //now (0,0) is in center of canvas
  rotate(-PI/4); //rotate to the left
  
  fill(230, 230, 230);
  //stem
  rect(56, -100, 16, 92, 25);
  //earbud
  rect(25, -115, 50, 40, 50);

  //earbud detail rectangle
  fill(128,128, 128);
  rect(50, -100, 14, 6, 30);
  //earbud detail circle
  circle(40, -98, 7, 6, 30);
  
  //earbud Label  
  textSize(9);
  textFont('Helvetica');
  text('R', 60, -25);
  
   pop(); 
  //End Rotated Earpiece  
//////////////////////////////////////  
  
  
//////////////////////////////////////  
  //Bottom earpiece//
    
  //Shadow detail --notice how you have to put this at the top of the draw function
  fill(76, 153, 0);
  rect(280, 250, 16, 92, 25);

 
  //iPod Stem
  fill(240, 240, 240);
  rect(290, 245, 16, 92, 25);

  //iPod Stem shadow on bottom
  fill(200, 200, 200);
  rect(290, 327, 15, 10, 5);
  
  //iPod Ear Piece
  fill(255, 255, 255);
  rect(288, 235, 50, 40, 50);
  
  //iPod ear detail rectangle
  fill(128,128, 128);
  rect(298, 250, 14, 6, 30);

  //iPod ear detail circle
  circle(324, 253.5, 7, 6, 30);
 
  //iPod label
  fill(120, 120, 120);
  textSize(9);
  textFont('Helvetica');
  text('L', 296, 318);


  
  //End Bottom Earpiece  
//////////////////////////////////////  



}