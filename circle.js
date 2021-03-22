class Circle{
constructor(_xPos,_yPos,_rotation){
this.xPos = _xPos;
this.yPos = _yPos;
this.rotation = _rotation;


}
display(){
  noStroke();
  fill(155);
  push();
  translate(this.xPos,this.yPos);
  rotate(this.rotation);
  ellipse(10,10,10,10);

}


move(){

  //if (this.yPos<= height){

this.yPos += 2;
//} else //if (this.yPos > height){
//this.yPos = 0;
}

}




//function drawCircle(xPos,yPos,rotation){
//noStroke();
//fill(155);
//push();
//translate(xPos,yPos);
//rotate(rotation);
//ellipse(10,10,10);
//}
