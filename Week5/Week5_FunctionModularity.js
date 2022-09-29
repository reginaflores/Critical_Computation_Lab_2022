//Functions:

//When we use something like ellipse(width/2, height/2, 50, 50) -- this is a function, "calling" a function internal to the p5 library.

//Also when we use the setup function:
//function setup(){

//} -- this is "defining" a function within the p5 library. 

//p5.js is a library of functions. 
//the definintion of the ellipse function is part of the p5 library
//the setup function is left to the user to define it. So all the code we write inside the setup function is, user defined. 

//User Defined Function are functions we make up ourselves. We think of this for two reasons:
//1) Modularity -- a way to organize your code, put into modules
//2) Reusability -- if you want to draw somethign more than one time, you can put it in a function and call it again and again. You can have arguments and parameters.  

//Remember the ball dropping example from last week?

let x = 0;
let y = 0;

let diameter = 20;

let velocity = 10;//note this is just speed. It is not meant to be a vector. 

let gravity = 0.5;

let friction = 0.8;//air resistance

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = 40;
}

function draw() {
  background(0); //ARGUMENT!!
  
  moveBall(); //NO ARGUMENTS
  windowConstrain();
  display();
  
}

function windowConstrain(){
  
    if(y > height){
      y = height;
      velocity *= -1*friction;    
    }
}

function moveBall(){
  
  velocity += gravity;
  y = y + velocity;  
  
}

function display(){
  
    ellipse(x, y-diameter/2, diameter, diameter);  

}


