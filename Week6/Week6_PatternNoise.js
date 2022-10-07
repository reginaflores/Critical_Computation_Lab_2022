//Source:
//https://www.youtube.com/watch?v=ig0q6vfpD38

function setup() {
  createCanvas(windowWidth,windowHeight);
  strokeWeight(1);
  noLoop();
}

function draw() {
  background(255);
  size = 30;

  for (i = 0; i < width; i += size) {
    for (j = 0; j < height; j += size) {
      n = noise(i , j );
      if (n <0.5) {
         stroke(255, 0, 0);
         line(i, j, i + size, j + size);
      } else {
        stroke(0);
        line(i + size, j, i, j + size);
      }

    }
  }
}

