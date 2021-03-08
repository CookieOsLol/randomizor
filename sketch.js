let collar3 = 0
let collar2 = 255
let collar = 255
let value = 10;
let hat = 10;


function setup() {
  createCanvas(400, 400);
}
//  fill(255,207,124); brown reg
// fill(244,183,80);  shade
//fill(51,51,51); black


function draw() {
  background(random(1,225));
  drawBg();
  drawLBody();
  drawHead();
  drawEars();
  drawHeadInside();
  drawEye();
  drawNose();
  drawMouth();
  drawSunglasses();
  drawChefHat();
}
  function drawBg(){
fill(63,143,178);
//lower corner
rect(width * 0.90, height * 0.90,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.90,width * 0.045, height * 0.045);
//top layer
rect(width * 0.80, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.15, height * 0.05,width * 0.045, height * 0.045);
//second top layer
rect(width * 0.70, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.10,width * 0.045, height * 0.045);
//middle layer
rect(width * 0.05, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.70,width * 0.045, height * 0.045);



    
    
    
  }  
function drawLBody(){
//black arms right
fill(20,20,20);
rect(width * 0.90, height * 0.85,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.90,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.90,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.85,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.80,width * 0.045, height * 0.045);


//black arms left
fill(20,20,20);
rect(width * 0.05, height * 0.85,width * 0.045, height * 0.045);  
rect(width * 0.05, height * 0.80,width * 0.045, height * 0.045);  
rect(width * 0.05, height * 0.75,width * 0.045, height * 0.045);  
rect(width * 0.15, height * 0.90,width * 0.045, height * 0.045);  
rect(width * 0.10, height * 0.90,width * 0.045, height * 0.045);  
rect(width * 0.20, height * 0.85,width * 0.045, height * 0.045);  
rect(width * 0.15, height * 0.80,width * 0.045, height * 0.045);  

//body white, bottom middle
fill(255,255,255);
rect(width * 0.35, height * 0.90,width * 0.045, height * 0.045);  
rect(width * 0.40, height * 0.90,width * 0.045, height * 0.045);  
rect(width * 0.45, height * 0.90,width * 0.045, height * 0.045);  
rect(width * 0.50, height * 0.90,width * 0.045, height * 0.045);  
rect(width * 0.55, height * 0.90,width * 0.045, height * 0.045);  
rect(width * 0.60, height * 0.90,width * 0.045, height * 0.045);  

//second top middle
rect(width * 0.40, height * 0.85,width * 0.045, height * 0.045);  
rect(width * 0.45, height * 0.85,width * 0.045, height * 0.045);  
rect(width * 0.50, height * 0.85,width * 0.045, height * 0.045);  
rect(width * 0.55, height * 0.85,width * 0.045, height * 0.045); 
  
//white arms
fill(255,255,255);
rect(width * 0.15, height * 0.85,width * 0.045, height * 0.045);  
rect(width * 0.80, height * 0.85,width * 0.045, height * 0.045);  

//brown arms right
fill(244,183,80);
rect(width * 0.85, height * 0.85,width * 0.045, height * 0.045);  
rect(width * 0.85, height * 0.80,width * 0.045, height * 0.045);  
rect(width * 0.85, height * 0.75,width * 0.045, height * 0.045);  
  
//brown arms left
fill(244,183,80);
rect(width * 0.10, height * 0.85,width * 0.045, height * 0.045);  
rect(width * 0.10, height * 0.80,width * 0.045, height * 0.045);  
rect(width * 0.10, height * 0.75,width * 0.045, height * 0.045);  
  
//shades body
fill(244,183,80);
rect(width * 0.20, height * 0.90,width * 0.045, height * 0.045);  
rect(width * 0.25, height * 0.85,width * 0.045, height * 0.045);  
rect(width * 0.70, height * 0.85,width * 0.045, height * 0.045); 
rect(width * 0.75, height * 0.90,width * 0.045, height * 0.045); 
  
//brown body
fill(255,207,124);
rect(width * 0.70, height * 0.90,width * 0.045, height * 0.045); 
rect(width * 0.65, height * 0.90,width * 0.045, height * 0.045); 
rect(width * 0.25, height * 0.90,width * 0.045, height * 0.045); 
rect(width * 0.30, height * 0.90,width * 0.045, height * 0.045); 

//top brown body
fill(255,207,124);
rect(width * 0.65, height * 0.85,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.85,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.85,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.85,width * 0.045, height * 0.045);
  
//collar red
fill(255,68,68);
rect(width * 0.15, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.75,width * 0.045, height * 0.045);
  
//collar yellow
fill(collar,collar2,collar3);
rect(width * 0.45, height * 0.80,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.80,width * 0.045, height * 0.045);
  
  //first color 
if (key === 'q'){
  collar = 255;
} else if (key === 'w'){
  collar = 50;
}
  else if (key === 'e'){
  collar = 150;
}
  else if (key === 'r'){
  collar = 200;
}
  else if (key === 't'){
  collar = 0;
}
  
  
  //second color
  if (key === 'a'){
  collar2 = 255;
} else if (key === 's'){
  collar2 = 50;
}
  else if (key === 'd'){
  collar2 = 150;
}
  else if (key === 'f'){
  collar2 = 200;
}
  else if (key === 'g'){
  collar2 = 0;
}

  
//third collar
  if (key === 'z'){
  collar3 = 0;
} else if (key === 'x'){
  collar3 = 50;
}
  else if (key === 'c'){
  collar3 = 150;
}
  else if (key === 'v'){
  collar3 = 200;
}
  else if (key === 'b'){
  collar3 = 255;
}

}

function drawHead(){

  fill(255,207,124);//brown reg
  fill(244,183,80); // shade

//mouth bottom layer
fill(20,20,20);
rect(width * 0.20, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.75,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.75,width * 0.045, height * 0.045);

//mouth going up left
fill(20,20,20);
rect(width * 0.15, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.10, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.10, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.30,width * 0.045, height * 0.045);

  
//mouth going up right
fill(20,20,20);
rect(width * 0.80, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.30,width * 0.045, height * 0.045);

//ear left
fill(20,20,20);
rect(width * 0.05, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.05, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.10, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.15, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.15,width * 0.045, height * 0.045);

//ear right
fill(20,20,20);
rect(width * 0.90, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.90, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.05,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.15,width * 0.045, height * 0.045);
  
//head middle "right to left"
fill(20,20,20);
rect(width * 0.70, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.20,width * 0.045, height * 0.045);
  









}

function drawEars(){
  //ear white "left to right"
fill(255,255,255);
rect(width * 0.10, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.10, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.20,width * 0.045, height * 0.045);
  
//ear shade "left to right"
fill(244,183,80); // shade
rect(width * 0.10, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.15, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.20,width * 0.045, height * 0.045);
fill(244,183,80);
rect(width * 0.85, height * 0.10,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.20,width * 0.045, height * 0.045);
//regular ear shade"left to right"
fill(255,207,124);
rect(width * 0.80, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.15, height * 0.20,width * 0.045, height * 0.045);

  
}

function drawHeadInside(){
//top head shade
fill(244,183,80); // shade
rect(width * 0.30, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.15,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.20,width * 0.045, height * 0.045);

//side of head shade left
fill(244,183,80); // shade
rect(width * 0.10, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.10, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.10, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.10, height * 0.40,width * 0.045, height * 0.045);

//side of head shade right
fill(244,183,80); // shade
rect(width * 0.85, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.40,width * 0.045, height * 0.045);

//shade mouth "left to right"
fill(244,183,80); // shade
rect(width * 0.15, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.45,width * 0.045, height * 0.045);

  
//inside head reg top
fill(255,207,124);//brown reg
rect(width * 0.35, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.20,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.20,width * 0.045, height * 0.045);

  
//top second
fill(255,207,124);//brown reg  
rect(width * 0.15, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.25,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.25,width * 0.045, height * 0.045);

//top third layer
fill(255,207,124);//brown reg  
rect(width * 0.15, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.30,width * 0.045, height * 0.045);
  
  
//top fourth layer
fill(255,207,124);//brown reg  
rect(width * 0.15, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.35,width * 0.045, height * 0.045);
  
  
//top fifth layer
fill(255,207,124);//brown reg  
rect(width * 0.15, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.40,width * 0.045, height * 0.045);
  

//top sixth layer
fill(255,207,124);//brown reg  
rect(width * 0.30, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.45,width * 0.045, height * 0.045);

}

function drawEye(){
  //eye left
fill(255,255,255); //white
rect(width * 0.20, height * 0.40,width * 0.045, height * 0.045);
fill(20,20,20); //black eye left
rect(width * 0.25, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.45,width * 0.045, height * 0.045);

//eye right
fill(255,255,255); //white
rect(width * 0.70, height * 0.40,width * 0.045, height * 0.045);
fill(20,20,20); //black eye left
rect(width * 0.75, height * 0.40,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.45,width * 0.045, height * 0.045);
  
//eyebrow left
fill(255,255,255); //white
rect(width * 0.30, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.30,width * 0.045, height * 0.045);
  
//eyebrow right
fill(255,255,255); //white
rect(width * 0.65, height * 0.35,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.30,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.30,width * 0.045, height * 0.045);
  
}

function drawNose(){
//nose top light
fill(50,50,50); //light gray
rect(width * 0.40, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.50,width * 0.045, height * 0.045);
  
//nose top dark
fill(20,20,20);
rect(width * 0.45, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.50,width * 0.045, height * 0.045);
  
//bottom nose
fill(20,20,20);
rect(width * 0.40, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.55,width * 0.045, height * 0.045);
  
//nose line
fill(20,20,20);
rect(width * 0.45, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.60,width * 0.045, height * 0.045);

}

function drawMouth(){
//mouth left to right black
fill(20,20,20);
rect(width * 0.25, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.60,width * 0.045, height * 0.045);
  
//mouth white left to right "left side"
fill(255);
rect(width * 0.10, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.10, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.15, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.10, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.15, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.10, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.15, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.15, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.20, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.25, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.30, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.35, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.40, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.45, height * 0.70,width * 0.045, height * 0.045);
  
  //mouth right to left "right side"
fill(255);
rect(width * 0.85, height * 0.45,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.50,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.55,width * 0.045, height * 0.045);
rect(width * 0.85, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.60,width * 0.045, height * 0.045);
rect(width * 0.80, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.65,width * 0.045, height * 0.045);
rect(width * 0.75, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.70, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.65, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.60, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.55, height * 0.70,width * 0.045, height * 0.045);
rect(width * 0.50, height * 0.70,width * 0.045, height * 0.045);



  
  
}

function drawSunglasses(){
fill(20,20,20);
//left part of sunglasses
rect(width * value, height * 0.30,width * 0.045, height * 0.045);
rect(width * value, height * 0.35,width * 0.045, height * 0.045);
rect(width * (value + 0.05), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.05), height * 0.35,width * 0.045, height * 0.045);
rect(width * (value + 0.10), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.20), height * 0.45,width * 0.045, height * 0.045);
rect(width * (value + 0.15), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.15), height * 0.45,width * 0.045, height * 0.045);
rect(width * (value + 0.10), height * 0.45,width * 0.045, height * 0.045);
rect(width * (value + 0.20), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.25), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.10), height * 0.50,width * 0.045, height * 0.045);
rect(width * (value + 0.15), height * 0.50,width * 0.045, height * 0.045);
rect(width * (value + 0.20), height * 0.50,width * 0.045, height * 0.045);
rect(width * (value + 0.25), height * 0.45,width * 0.045, height * 0.045);
rect(width * (value + 0.30), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.35), height * 0.40,width * 0.045, height * 0.045);
  
//right part of sunglasses
rect(width * (value + 0.40), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.45), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.50), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.55), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.60), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.70), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.55), height * 0.45,width * 0.045, height * 0.045);
rect(width * (value + 0.50), height * 0.45,width * 0.045, height * 0.045);
rect(width * (value + 0.65), height * 0.45,width * 0.045, height * 0.045);
rect(width * (value + 0.65), height * 0.40,width * 0.045, height * 0.045);
rect(width * (value + 0.60), height * 0.45,width * 0.045, height * 0.045);
rect(width * (value + 0.55), height * 0.50,width * 0.045, height * 0.045);
rect(width * (value + 0.60), height * 0.50,width * 0.045, height * 0.045);
rect(width * (value + 0.65), height * 0.50,width * 0.045, height * 0.045);
rect(width * (value + 0.75), height * 0.35,width * 0.045, height * 0.045);
rect(width * (value + 0.70), height * 0.35,width * 0.045, height * 0.045);
rect(width * (value + 0.75), height * 0.30,width * 0.045, height * 0.045);




if (keyCode === LEFT_ARROW){
  value = 10;
} else if (keyCode === RIGHT_ARROW){
  value = 0.10;
}
  

  
}

function drawChefHat(){
fill(20,20,20);
//top of hat "left to right"
rect(width * (hat + 0.15), height * 0.05,width * 0.045, height * 0.045);
rect(width * (hat + 0.15), height * 0.10,width * 0.045, height * 0.045);
rect(width * (hat + 0.20), height * 0.05,width * 0.045, height * 0.045);
rect(width * (hat + 0.25), height * 0.05,width * 0.045, height * 0.045);
rect(width * (hat + 0.30), height * 0.05,width * 0.045, height * 0.045);
rect(width * (hat + 0.35), height * 0.05,width * 0.045, height * 0.045);
rect(width * (hat + 0.40), height * 0.05,width * 0.045, height * 0.045);
rect(width * (hat + 0.45), height * 0.05,width * 0.045, height * 0.045);
rect(width * (hat + 0.50), height * 0.05,width * 0.045, height * 0.045);
rect(width * (hat + 0.55), height * 0.05,width * 0.045, height * 0.045);
rect(width * (hat + 0.60), height * 0.05,width * 0.045, height * 0.045);
rect(width * (hat + 0.60), height * 0.10,width * 0.045, height * 0.045);


//second layer of hat "left to right" white
fill(255);
rect(width * (hat + 0.20), height * 0.10,width * 0.045, height * 0.045);
rect(width * (hat + 0.25), height * 0.10,width * 0.045, height * 0.045);
rect(width * (hat + 0.30), height * 0.10,width * 0.045, height * 0.045);
rect(width * (hat + 0.35), height * 0.10,width * 0.045, height * 0.045);
rect(width * (hat + 0.40), height * 0.10,width * 0.045, height * 0.045);
rect(width * (hat + 0.45), height * 0.10,width * 0.045, height * 0.045);
rect(width * (hat + 0.50), height * 0.10,width * 0.045, height * 0.045);
rect(width * (hat + 0.55), height * 0.10,width * 0.045, height * 0.045);

//third layer of hat "left to right" white
fill(255);
rect(width * (hat + 0.25), height * 0.15,width * 0.045, height * 0.045);
rect(width * (hat + 0.30), height * 0.15,width * 0.045, height * 0.045);
rect(width * (hat + 0.35), height * 0.15,width * 0.045, height * 0.045);
rect(width * (hat + 0.40), height * 0.15,width * 0.045, height * 0.045);
rect(width * (hat + 0.45), height * 0.15,width * 0.045, height * 0.045);
rect(width * (hat + 0.50), height * 0.15,width * 0.045, height * 0.045);

//forth layer "left to right" black
fill(20,20,20);
rect(width * (hat + 0.20), height * 0.20,width * 0.045, height * 0.045);
rect(width * (hat + 0.25), height * 0.20,width * 0.045, height * 0.045);
rect(width * (hat + 0.30), height * 0.20,width * 0.045, height * 0.045);
rect(width * (hat + 0.35), height * 0.20,width * 0.045, height * 0.045);
rect(width * (hat + 0.40), height * 0.20,width * 0.045, height * 0.045);
rect(width * (hat + 0.45), height * 0.20,width * 0.045, height * 0.045);
rect(width * (hat + 0.50), height * 0.20,width * 0.045, height * 0.045);
rect(width * (hat + 0.55), height * 0.20,width * 0.045, height * 0.045);



  
if (keyCode === LEFT_ARROW){
  hat = 10;
} else if (keyCode === UP_ARROW){
  hat = 0.10;
}
  
}