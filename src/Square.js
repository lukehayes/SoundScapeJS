import Shape from './Shape'
import gfx from './graphics'

class Square extends Shape
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
		gfx.drawSquare(this.context, this.x,this.y, this.size);
	}
}

export default Square;
