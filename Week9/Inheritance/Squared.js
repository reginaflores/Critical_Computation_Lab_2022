class Squared extends Ball {
  constructor(_numBalls, _index) {

    super(_numBalls, _index);
    this.length = 1;
  }

  physics(){
    super.physics();
    if(this.pos.x < width/2){
      this.length *= 1/2;
    }else{
      this.length += 1;
    }
  }
  
 display(){
   fill(255, 0,0);
   rect(this.pos.x, this.pos.y, this.length);
 }
 
}
