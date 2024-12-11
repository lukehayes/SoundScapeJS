// ----------------------------------------------------------------------------
// Simple rendering helper functions.
// ----------------------------------------------------------------------------

/**
 * Draw a square to the canvas.
 *
 * @param {context} context - The context of a HTML canvas.
 * @param {number} x        - The x position of the square.
 * @param {number} y        - The y position of the square.
 * @param {number} size     - The size (length and width) of the square.
 * @param {string} color    - The color of the square.
 */
function drawSquare(context, x, y, size, color)
{
	//context.clearRect(0,0, 200,200);
	context.fillStyle = color;
	context.fillRect(x,y, size, size);
}

/**
 * Draw a circle to the canvas.
 *
 * @param {context} context - The context of a HTML canvas.
 * @param {number} x        - The x position of the circle.
 * @param {number} y        - The y position of the circle.
 * @param {number} radius   - The radius of the circle.
 * @param {string} color    - The color of the circle.
 */
function drawCircle(context, x, y, radius, color)
{
	console.dir(color);
	context.beginPath();
	context.arc(x,y, radius, 0, Math.PI * 2);
	context.fillStyle = color ;
	context.fill();
}

export { drawSquare, drawCircle }
