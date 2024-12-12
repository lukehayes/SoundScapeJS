/**
 * Base class for all shapes that are being drawn on the canvas.
 *
 * Acts as a generic container for generic data like position.
 */
class Shape
{
	/**
	 * Constructor.
	 *
	 * @param {context} context - The context of a HTML canvas.
	 * @param {number} x        - The x position of the shape.
	 * @param {number} y        - The y position of the shape.
	 * @param {number} size     - The size (length and width) of the shape.
	 * @param {string} color    - (Optional)The color of the shape. Defaults to black.
	*/
	constructor(context, x,y, size, color)
	{
		this.context = context;
		this.x       = x;
		this.y       = y;
		this.size    = size;
		this.color   = color
	}
}

export default Shape;
