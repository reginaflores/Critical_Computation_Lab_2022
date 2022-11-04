let fruitArray = ['🍒', '🥝', '🍑', '🥭', '🍋', '🍉', '🍈', '🥥', '🍏', '🍌', '🍇', '🍍'];

function setup() {
  createCanvas(600, 600);
  noLoop();

}

function draw() {
  background(40);

  
  // fruitArray.pop(); //takes off last element of the array 
  // fruitArray.shift(); //takes off first element of the array
  // fruitArray.shift();
  // fruitArray.pop();
  // fruitArray.pop();
  // fruitArray.splice(3, 1); //takes off the third element of array 
  // fruitArray.splice(0, 2); //take the first element off, two times
  // fruitArray.splice(1); //takes off all the elements and leaves only one which is the first elemnt

  
  textAlign(CENTER, CENTER);
  textSize(30);
  text(fruitArray.join(' '), 0, height/2, width);
}