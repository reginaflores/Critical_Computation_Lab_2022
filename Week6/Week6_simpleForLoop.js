function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for(let x = 0; x <= width; x+=50){
    ellipse(x, 200, 50, 50);
    ellipse(x, 50, 50, 50);
    ellipse(x, 350, 50, 50);

    
  }
}