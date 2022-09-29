Use a Terminal Window to set-up your own Simple Server:

You can look for further detail here:
* https://github.com/processing/p5.js/wiki/Local-server
* https://github.com/lmccart/itp-creative-js/wiki/SimpleHTTPServer

First set up a folder somewhere on your computer where you have an html file, a css file and a js file. 

In Terminal type 'cd' and drag the folder into Terminal. That will provide the correct file path. Then in Terminal you can type: 

python3 -m http.server 8000

(Note that this is using python3. You can read more about setting up Python 3 here: https://ehmatthes.github.io/pcc/chapter_01/osx_setup.html).

Then go to a Chrome web-browser and type: http://localhost:8000/

You should see your sketch there! Congrats you just made a webpage!