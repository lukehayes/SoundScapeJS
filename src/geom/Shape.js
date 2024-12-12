class Shape
{
	constructor(context, x,y, size, color)
	{
		this.context = context;
		this.x       = x;
		this.y       = y;
		this.size    = size;
		this.color   = color
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
