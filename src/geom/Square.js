import Shape from './Shape'
import gfx from './graphics'

class Square extends Shape
{
	/**
	 * Constructor.
	 *
	 * @param {context} context - The context of a HTML canvas.
	 * @param {number} x        - The x position of the circle.
	 * @param {number} y        - The y position of the circle.
	 * @param {number} radius   - The radius of the circle.
	 * @param {string} color    - (Optional)The color of the circle. Defaults to black.
	*/
	constructor(context, x,y, size)
	{
		super(context, x,y,size);
	}

	/**
	 * Draw the square to the HTML Canvas using its context.
	*/
	render()
	{
		gfx.drawSquare(this.context, this.x,this.y, this.size, this.color);
	}
}

export default Square;
