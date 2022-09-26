//From Gabe Deko -- MFADT '21 
//Union Square Clock

 //Time Passed
 let h;
 let m;
 let s;
  
  //Time Remaining
 let _h;
 let _m;
 let _s;

 //Milliseconds within a second
 let ms = 60;
 let _ms = 0;


 let countdown  = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  textSize(40);
  textFont('Trebuchet MS');
  noStroke();
  
  //Time passed
  h = hour();
  m = minute();
  s = second();
  
  //Time remamining
  _h = 24 - hour();
  _m = 60 - minute();
  _s = 60 -second();
  
  //Milliseconds
  let ms_num = floor(random(0, 999));
    
  //Main clock
  push();
  fill(255);
  blendMode(DIFFERENCE);
  text( h , 21.42, 315);
  text( m , 107.13, 315);
  text( s , 192.84, 315);
  text( ms_num , 270.55, 315);
  text( _s , 365.26, 315);
  text( _m , 449.97, 315);
  text( _h , 545.68, 315);
  pop();
  
 
  //Incrememnt ms every frame
  ms = ms-1.8;
  _ms = _ms+1.8;
  
  //At midnight when the tmie is reset the countdown effect is triggered
  if ( s == 0 && _s == 60 && m == 0 && _m == 60 && h == 0 && _h == 24 ) {
    countdown  = true;
  }

 
}



