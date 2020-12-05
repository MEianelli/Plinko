function Ball(x,y,r){

  option = {
    friction: 0.2,
    restitution: 0.5
  }
  this.body = Bodies.circle(x,y,r,option);
  this.r = r;

  World.add(world,this.body);


  this.show = function(){
    var pos = this.body.position;
    // var angle = this.body.angle;

    // push();
    // translate(pos.x,pos.y);
    // rotate(angle);

    strokeWeight(1);
    circle(pos.x,pos.y,this.r*2)  
    //pop();

  }
}