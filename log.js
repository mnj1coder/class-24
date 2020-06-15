class log{

    constructor(x,y,height,angle){
        var options={
            'friction':0.8
        }
        
       this.body = Bodies.rectangle(x,y,20,height,options);
        
      Matter.Body.setAngle (this.body,angle);

       this.width=20;
this.height=height;

       World.add(world, this.body);
     }
    
     display(){
         var pos= this.body.position;
    
         var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);

    angleMode(DEGREES);

    rotate(angle);
    rectMode(CENTER);
    
    fill("brown");
    rect(0, 0, this.width, this.height);
    pop();
         
     }
}