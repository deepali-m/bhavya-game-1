class Box  {
  constructor(x, y, width, height){
   // super(x,y,width,height);
      this.body = Matter.Bodies.rectangle(x, y, width, height)
    this.image = loadImage("images/wood1.png");
   
  }
  
  display(){
    image (this.image,this.body.position.x,this.body.position.y)
  }
};
