let allxpoints = [];
let allypoints = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  stroke(10,20);
  smooth(8);
  noLoop();

}

function draw() {

    for (let i=0; i<50; i++){
    allxpoints[i] = int(random(50, width-50));
    allypoints[i] = int(random(50, height-50));
    for(let j=0; j<i; j++){
      line(allxpoints[i], allypoints[i], allxpoints[j], allypoints[j]);
    }

    }
}