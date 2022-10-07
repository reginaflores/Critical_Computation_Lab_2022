function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  
  for(let x=50; x< width; x+=100 ){
      for(let y = 50; y < height; y+=100 ){
        strokeWeight(0.5);
        ellipse(x, y, 50, 50);
      }  
   }
  
  for(let x=50; x<= width; x+=100 ){
    for(let y = 50; y <= height; y+=100 ){
      textSize(10);
      text(' '+ x + ', '+ y+ '', x-20, y);
    }  
 }
  
//Break Down this nested loop:
//  x | y  | ellipse(x, y, 50, 50)
//================================  
//  50  | 50   | ellipse(50, 50, 50, 50)
//  50  | 150  | ellipse(50, 150, 50 50)
//  50  | 250  | ellipse(50, 250, 50 50)
//  50  | 350  | ellipse(50, 350, 50 50)
//  150 | 50   | ellipse(150, 50, 50 50)
//  150 | 150  | ellipse(150, 150, 50 50)
//  150 | 250  | ellipse(150, 250, 50 50)
//  150 | 350. | ellipse(150, 150, 50 50)
//   etc etc etc
//  350 | 250  | ellipse(350, 250, 50 50)
//  350 | 350  | ellipse(350, 3


}