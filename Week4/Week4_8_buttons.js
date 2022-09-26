//Showing Nikunj Bafta's sketch without "Button Class"
//not a great UI but this is a quick example of how to use buttons with just if statements

let rectW = 50;
let rectH = 50;
let posX = 10;
let posY = 10;
let squareButton = false;

let rectW2 = 50;
let rectH2 = 50;
let posX2 = 80;
let posY2 = 10;

let circleButton = false;

let x = 0;


function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {

//Draw Squares Button:  
  if (squareButton==false){    
    fill(0);
  } else if (squareButton==true){    
    fill(255,0,0);    
  }

  rect(posX, posY, rectW, rectH, 10);
////////////////////////
  
//Draw Circles Betton:
  
  if (circleButton==false){    
   fill(0);
  } else if (circleButton==true){    
    fill(0,255,0);    
 }

  rect(posX2, posY2, rectW2, rectH2, 10);
  fill(0);
  textSize(10);
  text("press the button to draw, press space to clear", 150, 40);
  

}

function mousePressed(){

  //Square Button
  if (mouseX > posX - rectW  && mouseY > posY - rectH && mouseX < posX + rectW && mouseY < posY + rectH ) {    
    squareButton = !squareButton;
    x=1;
    console.log(x);
      
    if(squareButton==true){
      circleButton=false;
    }
  }
  
  // //Circle Button

    if (mouseX > posX2  && mouseY > posY2 - rectH2 && mouseX < posX2 + rectW2 && mouseY < posY2 + rectH2 ) {        
    circleButton = !circleButton;   
    x=2;
    console.log(x);
      
      if(circleButton==true){
        squareButton=false;
      }  
  }

}

function mouseDragged() {
  fill(random(150,255), 0, 0);

  if (x == 1) {
    console.log("i am here");
    fill(255, 0, 0);
    noStroke();
    rect(mouseX, mouseY, 30, 30);
  }

  if (x == 2) {
    fill(0, 255, 0);
    noStroke();
    circle(mouseX, mouseY, 30);
  }

}
 
function keyPressed(){
  background(255)  
  x=0;
  squareButton = false;
  circleButton = false;
}

