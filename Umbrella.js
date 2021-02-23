class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
                
        this.umbrella = Bodies.circle(x,y,75,options);
        World.add(world, this.umbrella)
    }
}