//Physics
//We can use some simple physics to give the ball some "dampening" effects
//as if gravity is working
//NOTE: DONT GET CAUGHT UP IN THE PHYSICS HERE... THIS IS NOT A REAL SIMULATION
//THIS IS JUST FUN GRAPHICS. 

//Basic idea:
// location = location + velocity
// velocity = velocity + acceleration

//If you want to learn more please refer to:
//https://natureofcode.com/book/chapter-1-vectors/


let x = 0;
let y = 0;

let diameter = 20;

let velocity = 10;//note this is just speed. It is not meant to be a vector. 

let gravity = 0.5;

let friction = 0.8;//air resistance

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = 40;
}

function draw() {
  background(0);

  velocity += gravity;
  y = y + velocity;
  
  if(y > height){
      y = height;
      velocity *= -1*friction;    
    
  }
  console.log(x, y);
  ellipse(x, y-diameter/2, diameter, diameter);
  
}

