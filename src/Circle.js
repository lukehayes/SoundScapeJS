import Shape from './Shape'
import gfx from './graphics'

class Circle extends Shape
{
	constructor(context, x,y, size)
	{
		super(context, x,y,size);
	}

	update(dt)
	{
		this.x += 1 * dt;
	}

	render()
	{
		gfx.drawCircle(this.context, this.x,this.y, this.size);
	}
}

export default Circle;
