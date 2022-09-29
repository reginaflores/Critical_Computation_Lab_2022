let a = 200;
let b = 200;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  
  fill(0);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  translate(width/2, height/2);
  triangle(0, 0, b, 0, 0,-a);
    
  // let temp = doMath(a, b);
  // console.log(temp);
  
  let temp2 = doMath(a, b);
  calculateC(a, b, temp2)
  textSize(30);
  text('c is ' + round(temp2), a/2, -b);
  
}

function doMath(a, b){
  
  let c = sqrt(a*a + b*b);
  return c;
  
}

function calculateC(a, b, c){
  let temp = doMath(a, b);
  console.log("Pythagorian theorem states:", temp);
}

