
var baground

var truck1,truck2,truck3
var gt,pt
var box
var point
var point
var car
var m,o,v,e,s
var gameState = 1

var bg
var truckb
function preload() {
   gt = loadImage("images/truck.png")
   pt = loadImage("images/player1.png")
   point = loadImage("images/point1.png")
  // car = loadImage("images/car.png")
    baground= loadImage("images/baground1.jpg");
    box = loadImage("images/wood1.png")
m = loadImage("images/m.png")
o = loadImage("images/o.png")
v = loadImage("images/v.png")
e = loadImage("images/e.png")
s = loadImage("images/s.png")
truckb = loadImage("images/truckb.png")
//play = loadImage("images/play.png")

}

function setup(){
 





 //  car1  = createSprite(500,300,70,70)
 //car1.addImage("car1",car)
// car1.scale = 0.25






}
   
   function draw(){
    var  canvas= createCanvas(displayWidth,displayHeight-146);
  
if (gameState ===1){
game1()


}

    drawSprites()
 
  
   }
    function game1(){
bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
bg.addImage("bg",baground)
bg.scale = 1.5
 play = createSprite(500,500,50,50)
//play.addImage("play",play)
    }
    function game2(){
      background(baground)
      box1 = createSprite(500,300,70,70); 
      box1.addImage("box1",box)
          box1 = createSprite(420,300,70,70); 
     box1.addImage("box1",box)
         box1 = createSprite(340,300,70,70); 
      box1.addImage("box1",box)
          box1 = createSprite(260,300,70,70); 
      box1.addImage("box1",box)
          box1 = createSprite(180,300,70,70); 
      box1.addImage("box1",box)
         box1 = createSprite(100,300,70,70); 
      box1.addImage("box1",box)
          box1 = createSprite(500,380,70,70); 
     box1.addImage("box1",box)
         
         box1 = createSprite(420,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(340,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(260,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(180,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(100,460,70,70); 
         box1.addImage("box1",box)
  
  
         box1 = createSprite(100,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(180,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(260,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(340,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(420,380,70,70); 
         box1.addImage("box1",box)
     
         box1 = createSprite(500,460,70,70); 
      box1.addImage("box1",box)
         box1 = createSprite(500,540,70,70); 
      box1.addImage("box1",box)
         box1 = createSprite(500,620,70,70); 
      box1.addImage("box1",box)
         box1 = createSprite(500,700,70,70); 
      box1.addImage("box1",box)
  
      box1 = createSprite(100,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(180,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(260,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(340,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(420,540,70,70); 
         box1.addImage("box1",box)
         
         box1 = createSprite(420,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(340,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(260,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(180,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(100,620,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(420,700,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(340,700,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(260,700,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(180,700,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(100,700,70,70); 
         box1.addImage("box1",box)
    
  
  
    
  
         box1 = createSprite(1070,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(990,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(910,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(830,620,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(1070,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1070,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1070,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1070,380,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(990,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(910,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(830,540,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(990,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(910,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(830,460,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(990,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(910,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(830,380,70,70); 
         box1.addImage("box1",box)
         
         
         
         
  
  
  
  
  
  
  
         box1 = createSprite(1400,700,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1480,700,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1560,700,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1640,700,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1720,700,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1800,700,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(1800,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1800,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1800,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1800,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1800,300,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(1720,300,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1640,300,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1560,300,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1480,300,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1400,300,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(1800,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1720,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1640,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1560,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1480,380,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1400,380,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(1800,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1720,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1640,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1560,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1480,460,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1400,460,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(1720,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1800,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1640,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1560,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1480,540,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1400,540,70,70); 
         box1.addImage("box1",box)
  
         box1 = createSprite(1720,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1800,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1640,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1560,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1480,620,70,70); 
         box1.addImage("box1",box)
         box1 = createSprite(1400,620,70,70); 
         box1.addImage("box1",box)
  
  
  
  
  
         Truck1 = createSprite(460,300,10,10)
       
         Truck1.addImage("truck",gt)
         Truck1.scale = 0.6
         Truck2 = createSprite(370,710,98765,-09876)
         Truck2.addImage("truckb",truckb)
  Truck2.scale = 0.52
  Truck3 = createSprite(500,410,01,01)
  Truck3.addImage("truck",gt)
  Truck3.scale = 0.6
   Truck3.rotation = 90
   Truck4 = createSprite(420,410,01,01)
   Truck4.addImage("truck",gt)
   Truck4.scale = 0.6
    Truck4.rotation = 90
    Truck5 = createSprite(328,570,01,01)
    Truck5.addImage("truckb",truckb)
    Truck5.scale = 0.52
     Truck5.rotation = 90
     Truck5.Width = 400
     Truck6 = createSprite(420,580,01,01)
   Truck6.addImage("truck",gt)
   Truck6.scale = 0.6
   Truck6.rotation = 90

    Truck7 = createSprite(260,500,01,01)
   Truck7.addImage("truck",gt)
   Truck7.scale = 0.6
   Truck7.rotation = 90
   Truck7 = createSprite(100,663,01,01)
   Truck7.addImage("truck",gt)
   Truck7.scale = 0.6
   Truck7.rotation = 90
   Truck8 = createSprite(140,540,98765,-09876)
   Truck8.addImage("truck",gt)
Truck8.scale = 0.6
         point1 = createSprite(530,425)
     point1.addImage("point",point)
     point2 = createSprite(1100,500)
     point2.addImage("point",point)
     point3 = createSprite(530,500)
     point3.addImage("point",point)
     point4 = createSprite(1100,425)
     point4.addImage("point",point)
    point5 = createSprite(1370,425)
     point5.addImage("point",point)
     point6 = createSprite(1370,350)
     point6.addImage("point",point)
     
  m1 = createSprite(70,100)
  m1.addImage("m1",m)
  o1 = createSprite(180,100)
  o1.addImage("o1",o)
  v1 = createSprite(260,100)
  v1.addImage("v1",v)
  e1 = createSprite(340,100)
  e1.addImage("e1",e)
  s1 = createSprite(420,100)
  s1.addImage("s1",s)
  o2 = createSprite(480,150)
  o2.addImage("o1",o)
  o3 = createSprite(480,60)
  o3.addImage("o1",o)
  m1.scale  = 0.3
  o1.scale  = 0.3
  v1.scale  = 0.3
  e1.scale  = 0.3
  s1.scale  = 0.4
  o2.scale = 0.1
  o3.scale = 0.1
     point1.scale = 0.07
     point2.scale = 0.07
     point3.scale = 0.07
     point4.scale = 0.07
    point5.scale = 0.07
     point6.scale = 0.07
     drawSprites()

    }
   // function mousePressed(){
//game2()
//console.log(gameState)
   // }
   function keyPressed(){
      if(keyCode === 32&&gameState===1){
        game2()
         bg.visible = false
         play.visible = false
         gameState = 2
      }
  }
    
          
    




