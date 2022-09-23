//map the background of the screen to the mouse


let bCol = 0;
let r = 0;
let g = 0;
let b = 0;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  
//Notice how random is really too random  
//   r = random(0,240);
//   g = random(0,240);
//   b = random(0,240);
  
//   background(r, g, b);

//Using map() gives a nicer, calmer effect  
  r = map(mouseX, 0, 600, 0, 255);
  g = 0;
  b = map(mouseY, 0, 600, 0, 255);;
  
  background(r, g, b);
 

  
}