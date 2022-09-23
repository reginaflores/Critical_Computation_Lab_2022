//What is the Perlin Noise?
//https://en.wikipedia.org/wiki/Perlin_noise


//random() vs noise()

//what is noise? it is kind of like random but in this case we are talking about Perlin Noise

//Ken Perlin --> Tron Movie in 1980's

//I have an astrophysics background... so I have an intimate relationship with noise

//think about Contact scene searching the skies... 

//for us we can use them to make textures in computer graphics

//So the noise function in P5js gives you Perlin Noise 

//1D Perlin Noise:
//Gives you "smooth random" numbers between 0 and 1 over time. Meaning there is some coorelation between the number before and after... don't worry about the math so much

//Remember:
//random(min, max)

//noise() ranges between 0 and 1 and you want a time value as an input

let x = 0; //positiion of ellipse's x values
let xoffset = 0;

function setup(){
  createCanvas(400,400);  

}

function draw(){
  background(255);

  //x = random(width);
  //x = noise(10); ----> this needs to be between 0 and 1!
  
  
  //1D Perlin Noise
  //map(value, start1, stop1, start2, stop2)
  x = map(noise(xoffset), 0,1,0,width); //noise is calmer

  // x = random(0, width); //again notice how random is too wild
  xoffset += 0.01;
  
  fill(0);
  ellipse(x, 200, 20, 10);
  

  
  
}