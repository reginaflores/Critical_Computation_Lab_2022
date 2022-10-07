
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  //nested for loops
  for(let x = 0; x <= width; x+=50){
    for(let y = 0; y <=  height; y+=50){
        fill(0,y, x);
        ellipse(x, y, 25, 25);
    }
  }
  
  
}