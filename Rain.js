class Drop{
    constructor(x,y,radius){
     
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
          }
          this.radius=radius;
       
          this.rain = Bodies.circle(x,y,radius,options);
          World.add(world, this.rain)
        
    }
   
    display(){
        var pos=this.rain.position
       
        push(); 
       ellipseMode(RADIUS);
        fill ("blue");
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
        pop() ;
    }
       
    rainPosition(){

        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,650),y:random(0,400)}) 
        }
        
    }
}
