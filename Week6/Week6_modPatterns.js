function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
    for(let i=0; i<16; i++){
      for(let j=0; j<16; j++){
          if(i%2 == 0){
               fill(255);
             }else{
               fill(0);
             } 
          if(j%2){
               fill(220);
             }
          rect(i*25, j*25, 25, 25); 
    
      }
    }
}