

let ball = [];


function setup() {
  createCanvas(400, 400);
  for(let i=0; i<10; i++){
    let x = int(random(0, width))
    let y = random(10, 60);
    ball[i] = new Ball(x, y);
    console.log(ball[i]);
  } 
  //console.log(ball.length);

}

function draw() {
  background(0);

  for(let i=0;i<ball.length;i++){
      ball[i].physics();
      ball[i].display();
      }
  
}




class Ball {
  
    constructor (_x, _y){
      this.x = _x;
      this.y = _y;
      this.diameter = random(15,40);
      this.velocity = random(2, 20);
      this.gravity = 0.5;
      this.friction = 0.8;
    }

    physics () {
        this.velocity += this.gravity;
        this.y = this.y + this.velocity;

        if(this.y > height){
            this.y = height;
            this.velocity *= -1*this.friction;    

        }
    }


     display(){
         fill(6, 141, 199, 65);
        ellipse(this.x, this.y-this.diameter/2, this.diameter);

    }
  
}






