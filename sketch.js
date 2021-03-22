let luck = ['very good','good','average','bad','very bad'];
let enounter = ['the lottery','a date','a class','a meetup','a project','this month','this year'];
let cause = ['do something good','do something bad','try something new','try something old','talk to someone new','talk to someone you know'];

let lk;
let et;
let ce;

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
  createCanvas(400, 400);
    background(0);
  frameRate(60);

  button = createButton("BORK BORK")
button.mousePressed(buttonPressed);
//checkbox = createCheckbox('label', false);
//checkbox.changed(myCheckedEvent);


}



function draw() {
  image(img,width * 0.13,height * 0.13,300,300);


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
  textSize(10)
  text(fate, width*0.5, height *0.95);



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
