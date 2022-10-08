////Waves Lines from: https://editor.p5js.org/learodrigo/sketches/hUkaCv821

let f=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
	background(0);
    stroke(255, 20)

  for (let i = 0; i < 10; i ++) {
    strokeWeight(random(1.618))
    drawNoiseLines(i * 0.1 + f, noise(i * 0.1 + f) * 180, 90)
  }
    
  f += 0.1
}

function drawNoiseLines(f, py, h) {
  push()
    translate(0, height / 2 + cos(f) * py)

    for (let x = 0; x < width; x ++) {
        let y = noise(x * 0.002 + f) * h * 2 - h
        line(x, y, x + 1, y + 1)
    }
  pop()  


}