class Rock{

    constructor(x,y,width,height)
{
    var options = {
        'restitution' :0,
        'friction' :1.0,
        'density' :0.5,
        'isStatic' :false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("polygon.png")
    World.add(world, this.body);
}

display(){
    
    var pos  = this.body.position;
    push();
    translate(pos.x, pos.y);
    stroke(48,22,8);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    }
}

