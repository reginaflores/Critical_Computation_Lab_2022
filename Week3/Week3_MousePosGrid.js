//ADD CREDIT TO THIS CODE:

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  

    for (var i = 0; i < width; i +=20) {
      stroke(255);
      line(i, 0, i, height);
      line(width, i, 0, i);
    }

    // console.log(mouseX + ',' + mouseY);
    text(mouseX + ',' + mouseY, mouseX, mouseY);
  
}