class Squared extends Ball {
  constructor(_numBalls, _index, _img) {
    
    super(_numBalls, _index, _img);
    this.length = 50;
  }

  physics() {
    super.physics();
    // if (this.pos.x < width / 2) {
    //   this.length *= 1 / 2;
    // } else {
    //   this.length += 1;
    // }
  }

  display() {
    // fill(255, 0, 0);
    // rect(this.pos.x, this.pos.y, this.length);
    image(this.img, this.pos.x, this.pos.y, this.length, this.length);
    
  }

  collisioinWithBall(ballArray) {
    for (let balls_i = 0; balls_i < ballArray.length; balls_i++) {
      let distFromBall = dist(
        ballArray[balls_i].pos.x,
        ballArray[balls_i].pos.y,
        this.pos.x,
        this.pos.y
      );
      if (distFromBall <= 40) {
        background(0);
        textSize(30);
        text("CRASH", width/2-30, height/2)
      }
    }
  }
}
