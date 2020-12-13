class Box {
  constructor(x, y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
}
  this.visibility = 225;
  this.body = Bodies.rectangle(x, y, 30, 40, options);
  this.width = 30;
  this.height = 40;
  
  World.add(world, this.body);
    
    
  }
  display(){
    if (this.body.speed<3){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
} else{
  World.remove(world,this.body)
  push()
  this.visibility = this.visibility -5;
  tint(255,this.Visiblity);
  image(this.image, this.body.position.x, this.body.position.y, 30, 40);
  pop();

}


}
};
