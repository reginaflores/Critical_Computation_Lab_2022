// let ar = ["cat", "dog", "turtle"];
let arx=[];//declare array
let ary=[];//declare array


function setup() {
  createCanvas(400, 400);
  noLoop();
  for (let i = 0; i < width; i++) { 
    arx[i] = random(0, width); // assign array
    ary[i] = random(0, width); // assign array
  }
}

function draw() {
  background(220);
  
//   console.log("array lenght is " + ar.length);
  
//   for(let i = 0; i < ar.length; i++ ){
//     console.log(ar[i]);
//   }
  
  
  
  for(let x = 0; x <=width; x++){
    ellipse(arx[x], ary[x], 25, 25);
  }
  
  
  
}