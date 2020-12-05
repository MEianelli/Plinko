function Plinko(x,y,r){

  options = {
    isStatic: true
  };

  this.body = Bodies.circle(x,y,r,options);
  this.r = r;

  World.add(world,this.body);


  this.show = function(){
    var pos = this.body.position;
    strokeWeight(1);
    circle(pos.x,pos.y,this.r*2)  


  }
}