

let myData;

function preload(){
  myData = loadJSON('data/history.json');
}

function setup() {
  createCanvas(400, 400);
  noLoop();

}

function draw() {
  background(220);


  for(let i=0;i<Object.keys(myData).length;i+=200){
      text(myData[i].url, random(0,width), random(0, height));
  }
}