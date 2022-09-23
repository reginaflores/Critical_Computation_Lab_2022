let x, x2;
let y, y2; 

let xspeed;
let yspeed;


function setup(){
    createCanvas(400,400);
  	x = 100;
	y = 100;
	xspeed = -10;
	yspeed = 5;

    noStroke();
}

function draw(){
  background(255);	
  
	x = x + xspeed;
	y = y + yspeed;

	if(x > width || x < 0){
		xspeed = -xspeed;
	} 
	if(y > height || y < 0){
		yspeed = -yspeed;
    }

    fill(255, 0,0);
	ellipse(x, y, 20, 20);
   
}
