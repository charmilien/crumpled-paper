class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.width=200;
		this.heightt=100;
		this.thickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.width/2, this.y-this.heightt/2, this.thickness, this.heightt, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.width/2, this.y-this.heightt/2, this.thickness, this.heightt, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			fill("blue")
			rect(posBottom.x,posBottom.y,this.width, this.thickness);
			rect(posLeft.x,posLeft.y,this.thickness, this.heightt);
			rect(posRight.x,posRight.y,this.thickness, this.heightt);
			
		/*
			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.thickness, this.heightt);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.thickness, this.heightt);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.width, this.thickness);
			pop()
			*/
			
	}

}