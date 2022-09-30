//**************p5js code***********//
//Created: Sep 2022
//Author: Regina Flores
//Language: p5.js
//////////////////////////////////////


let y;

function setup(){
	createCanvas(windowWidth,windowHeight);
	textFont('Roboto Mono');

	y = 0;

}

function draw(){
	background(255);
	fill(0);
	ellipse(windowWidth/2, y, 200, 200);
	
	y = y + 5;	
	console.log(y);
	if(y>height){
		y = windowHeight;
		fill(252, 142, 172);
		textSize(30);
		textAlign(CENTER);
		text("Welcome to my Website", windowWidth/2, windowHeight/2);	
		// ellipse()		

	}	
	
}










