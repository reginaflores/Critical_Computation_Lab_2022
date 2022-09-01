function setup() {
  createCanvas(400, 400);
}

function draw() {
  // RGB red gren blue
  background(52, 235, 192);
  
  /////////////////////////////////////////
  //This is the angled airpod

  /////
  push();//Execute a framework only within these lines of push and pop
  translate(width/2, height/2);
  rotate(-PI/4);
  fill(255);
  rect(56,-100,16,92,25);
  pop();
  /////
  
  
/////////////////////////////////////////
  //This is the straight airpod
  //Stem of the Airpod
  noStroke();//take away the hard black outline
  
  //this moves the coordinate system to the center of the screen. We are talking about pixels!
  translate(width/2, height/2);
  fill(25,155,255);
  rect (0, 0, 16, 92, 25);  //x, y, w, h, rounded corner angle
  
  //Earpiece
  noStroke();
  fill(255, 45, 255);
  rect(0,-10,50,40,25);

  //Write
  // textSize(50);
  // text('AIRPOD', -150,-150);
/////////////////////////////////////////

}


