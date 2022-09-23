//IF ELSE 
//AND OR
//EQUALS 



let x = 0;
let y = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  

  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  if(mouseX > width/2 && mouseY < height/2){
    fill(255, 0 , 0);
    rect(width/2, 0, 200,200);
  } else if(mouseX < width/2 && mouseY<height/2){
    fill(255, 0 , 0);
    rect(0, 0, 200,200);
  } else if(mouseX<width/2 && mouseY>height/2){
    fill(255, 0, 0);
    rect(0, height/2, 200,200);
  } else if(mouseX>width/2 && mouseY > height/2){
    fill(255, 0, 0);
    rect(width/2, height/2, 200,200);
  }
  
  if(mouseX == width/2 || mouseY == height/2){
    strokeWeight(10);
    stroke(255, 0, 0);
    line(0, height/2, width, height/2);
  }else{
    stroke(0);
    strokeWeight(1);
  }
  

  
}