class SlingShot{
    constructor(object1,pointB){
        var options={
            bodyA:object1,
            pointB:pointB,
            length:10,
            stiffness:0.04,
        }
        this.slingShot=Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.slingShot)

    }
    
    fly(){
        this.slingShot.bodyA=null;
    }

    display(){
        if (this.slingShot.bodyA!==null){

        
        var pointA=this.slingShot.bodyA.position;
        var pointB=this.pointB;
        push();

        strokeWeight(7)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }

}