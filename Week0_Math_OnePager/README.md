# Math Formula One Pager -- Programming for Creative Coding

[MFA Design and Technology](http://www.newschool.edu/parsons/mfa-design-technology/), [Parsons School of Design](http://www.newschool.edu/parsons/).

---
* **Simple Moving Equations:** 

 location = location + velocity
 velocity = velocity + acceleration

 Change direction by multiplying velocity by -1.

---
* **Polar Coordinates:**  
 
 x = r * cos(theta);
 y = r * sin(theta);

---
* **Simple Harmonic Motion/Oscillations:** 

x = amplitude * cos(TWO_PI * frameCount / period);

---
* **Lines:** 

*let lineDist be the distance between the lines*

```

 for (let x = 0; x < width ; x += lineDist) {
  for (let y = 0; y < height; y += lineDist){

	//vertical lines:
	line(x, 0, x, height);  

	//horizontal lines:
	line(0, y, width, y);

	//Diagonal lines:
	//right diagonal: 
	line(x, y, x - lineDist, y + lineDist) 

	//left diagonal: 
	line(x, y, x + lineDist, y + lineDist);

```


---
* **Individual Pixel:** 

pixel = (x + (y * width))* 4
 
---



