let ball;
let balls = [];

function setup() {
  createCanvas(400, 400);
  ball = new Ball(width / 2, 40, 20);
  console.log(ball);
  for (let i = 0; i < 20; i++) {
    balls[i] = new Ball(random(0, width), random(40, height), random(5, 40));
  }
  console.log(balls);
}

function draw() {
  background(0);

  fill(255, 0, 0);
  ball.physics(200);
  ball.drawBall();

  fill(0, 255, 0);
  for (let i = 0; i < balls.length; i++) {
    balls[i].physics(height);
    balls[i].drawBall();
  }
  console.log(balls.length);
}

function mousePressed() {
  let b = new Ball(mouseX, mouseY, 20);
  balls.push(b);
  console.log(balls.length);
}

function keyPressed() {
  balls.splice(0, 1);
  console.log(balls.length);
}
