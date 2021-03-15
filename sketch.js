let luck = ['very good','good','average','bad','very bad'];
let enounter = ['the lottery','a date','a class','a meetup','a project','this month','this year'];
let cause = ['do something good','do something bad','try something new','try something old','talk to someone new','talk to someone you know'];
  
let lk;
let et;
let ce;

let fate;
  

function setup() {
  createCanvas(400, 400);
    background(220);
  frameRate(60);
  
  
  
  lk = int(random(luck.length));
  et = int(random(enounter.length));
  ce = int(random(cause.length));
  fate = 'your luck is ' + luck[lk] + ' for ' + enounter[et] + ' you should ' + cause[ce] + '.';
  
  console.log(fate);
}

function draw() {
}