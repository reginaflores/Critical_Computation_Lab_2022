//Variables
// we use let to define variables

//var, const ===> not worry about this now

//(c++ int, etc...)

//Variables: 1) define, initialize, use

//User defined Global variable
let x = 0;
let y = 0;

let r, g, b;

//in comuter language '=' does not mean equals
//it means assigning it a value 

//equals ==

//anouther way of writing variables is one line
//let x, y;

//different kinds of variables:
//number - -14324324324, 5
//charcters - f
//strings - "hello"
//boolean - true 1 or false 0 

//quantum computing -- there are more than 2 states

//setup runs only 1 time
function setup() {
  createCanvas(400, 400);
  // frameRate(10); this slows frame rate
    background(0);

}

//draw function runs continously (frame rate)
function draw() {
  
// //   //local variable
//   let l = 0;
//   let eWidth = 200;
//   //system variable
//   ellipse(eWidth, height/2, 40,40);
  
//   //mouseX, mouseY
//   ellipse(mouseX, mouseY, 100);
  
//function is like of a machine that spits out info. you can supply it with information... 
  
  //Random
  //random number between min and max.
//   let r;
//   r = random(-43242, 43542);
//   console.log(r);
   x = random(0,width);
   y = random(0,height); 
  
  noStroke();
  
  r = random(0,255);
  g = random(0, 255);
  b = random(0, 255);
  
  fill(r, g, b);
  ellipse(x, y, 8, 20);
  console.log(x, y);
  
  //Data types num, char, strigs
  textSize(30);
  text("Rain", width/2, height/2);
  
}



