//Sol Lewitt Representations
//Source:
//https://massmoca.org/event/walldrawing56/
///////////////////////////////////////////

let lineDist = 20;//distace between the lines

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(255);
  strokeWeight(0.2);

  lewittSquare();

  noLoop();
}

function lewittSquare(){
  
  for (let i = 0; i < width ; i += lineDist) {
      for (let j = 0; j < height; j += lineDist) {
                       
         line(i, 0, i, height);  
             if(i>=width/2 && j>=height/2){        
               line(0, j, width, j);
             } else if(i >= width/2 && j <= height/2){
                  line(width/2, j, width, j)
             } 
             if(i >=0 && j >= height/2){
                line(i, j, i - lineDist, j + lineDist);
             }
            if(i >= width/2 && j >= height/2){
              line(i, j, i + lineDist, j + lineDist);
            }
      }
  }
  
  
}