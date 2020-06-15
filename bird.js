class bird{
    constructor(x,y){
        var options={
            'friction':0.8
        }

       this.body = Bodies.rectangle(x,y,50,50,options);

       this.width=50;
       this.height=50;

       World.add(world, this.body);
     }
    
     display(){
         var pos= this.body.position;
         rectMode(CENTER);

         this.body.position.x=mouseX;
         this.body.position.y=mouseY;

         fill("red");
         rect(pos.x,pos.y,this.width,this.height);
         
     }
}