let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  x=x+1
  ellipse(x, 200, 20 ,20);
  
  if(x > width){
    x=0;
  }

}