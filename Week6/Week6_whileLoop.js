function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let x = 0;
  let y = 0;
  
  while( x <= width){
    ellipse(x, 200, 25, 25);
    x = x +25;
  }
  
  while(y <= height){
    ellipse(200, y, 25, 25);
    y = y +25;
  }
  
}