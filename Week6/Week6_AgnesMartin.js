//Agnes Martin
//https://www.mutualart.com/Artwork/Words/8532594C4142AF05

function setup() {
  createCanvas(500, 500);
  noLoop();

}

function draw() {
  background(255);
  
  let distance = 10;
    strokeWeight(2);

        for(let x = 50; x < width; x+= 100){
          for(let y = 50; y < height; y+=100){
            //triangle(x1, y1, x2, y2, x3, y3)
            if(x==50 && y==50 || x==450 && y==50 ){
              continue;
            }else{
            fill(255);
            triangle(x-30, y+50, x, y, x+30, y+50);
            fill(0);
            triangle(x-18, y+30, x, y, x+18, y+30);
            }
          }
      }
    strokeWeight(1);

      for (let i = 0; i < width ; i += distance) {
          for (let j = 0; j < height; j += distance) {
                       
               line(0, j, width, j);

          }
      }

}

