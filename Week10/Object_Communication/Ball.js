
class Ball {
  constructor(_numBalls, _index, img) {
    this.img = img;
    this.numBalls = _numBalls;
    this.index = _index;
    this.pos = createVector(random(1, width), random(1, height));
    this.vel = createVector(random(1, 5), random(1, 2));
    this.r = 10;
  }

  physics() {

    this.pos.x = this.pos.x + this.vel.x;
    this.pos.y = this.pos.y + this.vel.y;

    if (this.pos.x > width || this.pos.x < 0) {
      // fill(255, 0,0)
      this.vel.x = -this.vel.x;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.vel.y = -this.vel.y;
    }
  }
 
  collision(ballsArray) {

    for (var i = 0; i < this.numBalls; i++) {
      var d = dist(
        this.pos.x,
        this.pos.y,
        ballsArray[i].pos.x,
        ballsArray[i].pos.y
      );

      if (d < this.r + ballsArray[i].r && i !== this.index) {
        fill(255, 0, 0);
          this.vel.x = -this.vel.x;
          this.vel.y = -this.vel.y;
 
        break;
      } else {
        fill(0, 255, 0);
      }
    }
  }

  display() {
    // noStroke();
    // fill(255, 0,0, 80);
    // textSize(20);
    // stroke(0);
    // ellipse(this.pos.x, this.pos.y, this.r * 2);
    // text(this.index, this.pos.x, this.pos.y);
    image(this.img, this.pos.x, this.pos.y, 2*this.r, 2*this.r);
    
  }
  
  
}
