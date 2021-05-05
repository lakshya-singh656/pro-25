class Paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.6

			}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x, y, 50, 50 , options);
 		World.add(world, this.body);
         this.image=loadImage("paper.png")

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image (this.image,0,0,50, 50);
			pop()
			
	}

}