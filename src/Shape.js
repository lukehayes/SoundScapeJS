import gfx from './graphics'

class Shape
{
	constructor(context, x,y, size)
	{
		this.context = context;
		this.x = x;
		this.y = y;
		this.size = size;
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

export default Shape;
