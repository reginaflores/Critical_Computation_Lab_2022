class Ball {
  //constructor that is like the set up of the class
  constructor(_x, _y, _diameter) {
    this.x = _x;
    this.y = _y;
    this.diameter = _diameter;
    this.velocity = 10;
    this.gravity = 0.5;
    this.friction = 0.8;
  }

  //methods of our class
  physics(maxheight) {
    this.velocity += this.gravity;
    this.y = this.y + this.velocity;

    if (this.y > maxheight) {
      this.y = maxheight;
      this.velocity *= -1 * this.friction;
    }
  }

  drawBall() {
    ellipse(this.x, this.y - this.diameter / 2, this.diameter);
  }
}
