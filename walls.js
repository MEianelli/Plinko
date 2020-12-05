function Wall(x,y,w,h){

  options = {
    isStatic: true
  };
  this.w = w;
  this.h = h

  this.body = Bodies.rectangle(x,y,w,h,options);
  World.add(world,this.body);


  this.show = function(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.w,this.h);  
  }
}