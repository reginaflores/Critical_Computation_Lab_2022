//In Class Function Activity

let x = 0;
let y = 0;
function setup() {
  createCanvas(600, 350);
  img = loadImage('assets/nyc.jpg'); // Load the image

}

function draw() {
  background(220);
  
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  
  groupOne(x, y);
  groupTwo();
  groupThree();
  groupFour();
}

function groupOne(x, y){
  //make some graphics

  fill  (0)
  ellipse(x+300,y+200,200,200);

  fill (255,213,198);
  ellipse(x+300,y+200,190,190);

  fill  (0)
  ellipse(x+260,y+180,55,55);
  ellipse(x+340,y+180,55,55);

 
  fill  (255)
  ellipse(x+340,y+180,50,50);
  ellipse(x+260,y+180,50,50);

  fill(191,0,55);
  arc(x+300, y+210, 80, 80, 0, PI, OPEN);

  fill  (0)
  ellipse(x+260,y+180,20,50);
  ellipse(x+340,y+180,20,50);
  rect(x+320,y+140,50,10,10);
  rect(x+230,y+140,50,10,10);


}

function groupTwo(){
    //make some graphics
  noStroke();
  fill(80, 209, 248);
    // ellipse(0,height/2, 300, 200);

    translate(width/2, height/2);
    rotate(35);
    rect(80,-50, 80,80, 10);
    rotate(15);
    rect(80, -50, 80, 80, 10);


  //   push();
  // fill(0);
  //   // ellipse (-20, 50, 50);
  //   pop();
  
}

function groupThree(){
    //make some graphics
  noStroke();
  fill(255, 100)
  rect(90, 90, 300, 300);

  fill(255, 255, 255);
  textSize(40);
  text('unfortunately this is the fashion capital of the world', 1, -1, 200);
  
}

function groupFour(){
  translate(CENTER)


    fill(250)
  blendMode(DIFFERENCE)

  textSize(90)
  textStyle(BOLD)

  text('NEW', 380, 100)
  text('YORK', 320, 170)
  text('CITY', 320, 240)
  ellipse(320, 170, 20, 20)
  
}
