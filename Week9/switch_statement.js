let mode = 0;



function setup() {
  createCanvas(400, 400);

}

function draw() {
  switch (mode) {
    case 0:
      background(255);
      textSize(30);
      text("ENTER", width/2, height/2);
      text("use keys to move scenes", width/2-150, height/2+30);

      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
      
      //to go back to beginning
      case 4:
      mode = 0;
      break;

  
  }
}

function keyPressed() {
  mode++;
  console.log(mode);
}
function scene1() {
  background(255, 0, 0);
  text("Scene 1", width/2, height/2);

}

function scene2() {
  background(255, 255, 0);
  rect(100, 100, 100, 100);
  text("Scene 2", width/2, height/2);
  
}

function scene3() {
  background(255, 0, 255);
  ellipse(width / 2, height / 2, 100, 100);
  text("Scene 3 - END GAME", width/2-100, height/2);
  
}


