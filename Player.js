class Player1  {
    constructor(x, y){

        this.body = Matter.Bodies.rectangle(x, y,20,20)
      this.image = loadImage("images/player1.png");
//
     // World.add(world,this.body)
    }
    
    display(){
      image (this.image,this.body.position.x,this.body.position.y,160,160)
    }
  };