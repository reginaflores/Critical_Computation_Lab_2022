//Object exmaple



let ball = {
   x: 200,
   y: 40,
  diameter: 20,
  velocity: 10
}

let gravity = 0.5;
let friction = 0.8;//air resistance

function setup() {
  createCanvas(400, 400);

  console.log(ball);

}

function draw() {
  background(0);

  ball.velocity += gravity;
  ball.y = ball.y + ball.velocity;
  
  if(ball.y > height){
      ball.y = height;
      ball.velocity *= -1*friction;    
    
  }
  ellipse(ball.x, ball.y-ball.diameter/2, ball.diameter);
  
}

