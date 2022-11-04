

let balls = [];
let squares = [];
let numBalls = 10;

let square;

let rocket;
let asteroid;

function preload(){
  rocket = loadImage("assets/rocket.png");
  asteroid = loadImage("assets/moon.jpeg");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  square = new Squared(numBalls, 0, rocket);
  
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(numBalls, i, asteroid);
  }
}

function draw() {
  background(255);

  square.physics();
  square.display();
  square.collisioinWithBall(balls);
  
  
  for (let i = 0; i < balls.length; i++) {
    
    balls[i].collision(balls);
    balls[i].physics();
    balls[i].display();
    

  }
}

