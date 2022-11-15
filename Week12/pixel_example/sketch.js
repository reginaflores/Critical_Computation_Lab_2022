
let video;

function setup() {

  createCanvas(400, 400);
  video = createCapture(VIDEO); 
  video.size(400, 400);
  video.hide();
}

function draw() {
  background(220);

  video.loadPixels();
  for (let y=0; y<video.height; y+=10) {
    for (let x=0; x<video.width; x+=10) {
    
      //this is the index of the pixels[] array
      let p = (x + (y * video.width))* 4;
      //this is the value inside the index
      let rchannel = video.pixels[p]; //this is just an R value between 0 and 255
      
      //here you can just see what is going on a little more clearly:
      //console.log('this is the index '+p+' .'+'this is value '+rchannel+' this is x and y '+ x+'  '+ y);
      //notice that the size of this array is 400x400x4 = 640,000
      // console.log(video.pixels.length);

      //map the R value to a size to use in an object
      //let size = map(rchannel, 0, 255, 5, 10);

      let r = video.pixels[rchannel+0];
      let g = video.pixels[rchannel+1];
      let b =  video.pixels[rchannel+2];

      fill(r, g, b);
      rect(x, y, 25, 25);

  }
}

}
