
//Inheritance 

//class Square extends Ball
//inherints the "methods" - good practie to rewrite constructor
//can be the child or subclass


//vs the parent or Super Class

//Classes can only inherent from one other class

let balls = [];
let squares = [];
let numBalls = 10;


function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(numBalls, i);
    squares[i] = new Squared(numBalls, i);
  }
}

function draw() {
  background(255);

  for (let i = 0; i < squares.length; i++) {
    
    squares[i].collision(squares);
    squares[i].physics();
    squares[i].display();
  }
}

