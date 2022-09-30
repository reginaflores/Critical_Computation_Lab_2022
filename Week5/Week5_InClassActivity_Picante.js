
function setup() {
  createCanvas(600, 350);
  img = loadImage('assets/nyc.jpg'); // Load the image
    kingkong = loadImage('kingkong.png')


}

function draw() {
  background(220);
  
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  
  groupOne(1475,250);
  groupTwo();
  groupThree(mouseX, mouseY);
  groupFour();
  groupFive(100,100);
  groupFive(200,200);
  groupFive(100,300);


}

function groupOne(a, b){
  //make some graphics
  push();
  scale(0.3)
  image(kingkong,a,b)
  pop();

}

function groupTwo(){
    //make some graphics
let c=20;
let d=50;
  for(let i = 0; i<300; i++) {
    //lego man
  push();
  translate(random(0, 600),random(200, 350))
  scale(0.2)
  fill(255);

    ellipse(width/2,height/2,c)
  rect(width/2,height/2+15,c/2,d)
  rect(width/2-10,height/2+15,c/2,d)
  rect(width/2-10,height/2+10,c,d/2)
  rect(width/2-20,height/2+15,c/2,d/2)
  rect(width/2+10,height/2+15,c/2,d/2)

  pop();
  
  } 
}

function groupThree(posX,posY){
    //make some graphics
  //light
  linearGradient(posX-100, posY, 200, 50, 245, 244, 171);

  //lines
  stroke(0);
  strokeWeight(10);
  line(posX,posY+20,posX,posY+40);
  line(posX-50,posY+20,posX-60,posY+40);
  line(posX+50,posY+20,posX+60,posY+40);

  //body flat
  fill(102,126,173);
  stroke(0);
  strokeWeight(6);
  ellipse(posX,posY,200,50);

  //top
  fill(32,225,250);
  arc(posX,posY-10,80,80,PI,PI*2);
  line(posX-40,posY-10,posX+40,posY-10);

  //dots
  fill(250,246,2);
  noStroke();
  ellipse(posX,posY+10,10);
  ellipse(posX-50,posY+5,10);
  ellipse(posX+50,posY+5,10);
}

function linearGradient(posX, posY, w, h, r, g, b) {
  let step = 0;
  for (let i = posY; i < posY + h; i++) {
    let alpha = map(i, posY, posY + h, 200, 0);
    stroke(r, g, b, alpha);
    strokeWeight(1);
    step++;
    line(posX - step, i, posX + w + step, i);
  }
}

function groupFour(){
    //make some graphics
//make some graphics
noFill();
  stroke(29);
  strokeWeight(2);
ellipse(460,83,20,50);
  line(460,58,517,62);
  line(460,108,517,104);
  arc(516,83,50,42,1.5*PI,0.5*PI);
  console.log(mouseX,mouseY);
  noStroke();
  fill(204, 0, 0,190);
  rect(460,83,50,17,20);
  ellipse(438,130,20,20);
  triangle(450,129,431,129,438,100);

    ellipse(438,180,20,20);
  triangle(446,179,431,179,438,150);
  
}

function groupFive(x, y){
    //make some graphics
  noStroke();
  fill(255,255,255);
  triangle(x, y -10, x + 20, y, x, y +10);
  rect(x-50,y-10, 50, 20);
  triangle(x-10, y+10, x-10, y+40, x-30, y+10);
   triangle(x-10, y-10, x-10, y-40, x-30, y-10);
  fill(255,0,0);
  quad(x-50, y-10,  x-70, y-20, x -70, y, x-50, y+10);
 
}