
let myData; 
let yStart = 0; //starting position of the text wall

function preload(){
  myData = loadJSON('data/history.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(myData[4]);
  console.log(Object.keys(myData).length);

  // noLoop();
  frameRate(10);
  // textFont('Roboto Mono');
  textFont('IBM Plex Mono');
}

function draw() {
  background(0);
  for (let y = yStart; y < height; y +=20) { 
    
  if(myData[y].visitCount > 6){
    textSize(20); 
    fill(58, 196, 81);  
  }else{
    textSize(10);
    fill(255);
  } 
    text(myData[y].title, 0, y); 
    
  }
  yStart++; 
}

// let myData;
// function preload() {
//   myData = loadJSON('data/history.json');

// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // console.log(myData.length);
//   console.log(Object.keys(myData).length);
//   noLoop();
// }

// function draw(){
//   background(0);
//   textFont('Roboto Mono');
//     for(let i=0; i<Object.keys(myData).length; i++){
//       // console.log(myData[i].title);
//         if(myData[i].visitCount > 3){
//           textSize(20);
//           fill(19, 221, 53);
//         } else{
//         textSize(10); 
//         fill(255);
//         }
//       text(myData[i].url, random(0,width), random(0, height));
      
//     }
// }




