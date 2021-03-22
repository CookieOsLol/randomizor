let luck = ['very good','good','average','bad','very bad'];
let enounter = ['the lottery','a date','a class','a meetup','a project','this month','this year'];
let cause = ['do something good','do something bad','try something new','try something old','talk to someone new','talk to someone you know'];

let lk;
let et;
let ce;
let circle1
let circle2
let fate;
let DogeT;
let FortT;
let button;
//let checkbox;

function preload(){

img = loadImage('assets/DogeT.png');
img2 = loadImage('assets/FortT.png');

}

function setup() {
var canvas =  createCanvas(400, 400);
canvas.parent('sketch-holder');
    background(0);
  frameRate(60);
circle1 = new Circle();
  button = createButton("BORK BORK");
  button.parent('button-holder');
button.mousePressed(buttonPressed);
//checkbox = createCheckbox('label', false);
//checkbox.changed(myCheckedEvent);
console.log(circle1);
}



function draw() {


}

function buttonPressed(){
  lk = int(random(luck.length));
  et = int(random(enounter.length));
  ce = int(random(cause.length));
  fate = 'your luck is ' + luck[lk] + ' for ' + enounter[et] + ' you should ' + cause[ce] + '.';
  fateText();
  console.log(fate);


}

function fateText(){
background(0);
fill(255);
  textAlign(CENTER);
  textSize(12);
  fill(0,255,255);
  text(fate, width*0.5, height *0.99);
  fill(random(1,255),random(1,255),random(1,255));

  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
  ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
    ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
    ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
    ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
    ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
    ellipse(random(1,400),random(1,300),random(1,10),random(1,10));
    ellipse(random(1,400),random(1,300),random(1,10),random(1,10));


  image(img,width * 0.13,height * 0.13,300,300);
}



//function Doge(){
  //image(img,width * 0.13,height * 0.13,300,300);

//}


//function Fort(){
  //image(img2,width * 0.00001,height * 0.00001,400,400);


//}

//function myCheckedEvent(){
//if(this.checked()){
  //image(img,width * 0.13,height * 0.13,300,300);
//} else {
//  image(img2,width * 0.00001,height * 0.00001,400,400);

//}


//}
