import Shape from './Shape'
import gfx from '../graphics'

class Circle extends Shape
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
	constructor(context, x, y, radius, color)
	{
		super(context, x, y, radius, color);
	}

	/**
	 * Draw the circle to the HTML Canvas using its context.
	*/
	render()
	{
		gfx.drawCircle(this.context, this.x,this.y, this.radius, this.color);
	}
}

export default Circle;
