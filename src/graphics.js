// ----------------------------------------------------------------------------
// Simple rendering helper functions.
// ----------------------------------------------------------------------------

/**
 * Clear the current frame of the canvas.
 *
 * @param {context} context - The context of a HTML canvas.
 * @param {canvas}  canvas  - The HTML canvas instance.
 */
function clear(context, canvas)
{
	context.clearRect(0,0, canvas.width, canvas.height);
}

/**
 * Draw a square to the canvas.
 *
 * @param {context} context - The context of a HTML canvas.
 * @param {number} x        - The x position of the square.
 * @param {number} y        - The y position of the square.
 * @param {number} size     - The size (length and width) of the square.
 * @param {string} color    - (Optional)The color of the square. Defaults to black.
 */
function drawSquare(context, x, y, size, color)
{
	//context.clearRect(0,0, 200,200);
	context.fillStyle = color;
	context.fillStyle = color ?? 'black';
	context.fillRect(x,y, size, size);
}

/**
 * Draw a circle to the canvas.
 *
 * @param {context} context - The context of a HTML canvas.
 * @param {number} x        - The x position of the circle.
 * @param {number} y        - The y position of the circle.
 * @param {number} radius   - The radius of the circle.
 * @param {string} color    - (Optional)The color of the circle. Defaults to black.
 */
function drawCircle(context, x, y, radius, color)
{
	context.beginPath();
	context.arc(x,y, radius, 0, Math.PI * 2);
	context.fillStyle = color ?? 'black';
	context.fill();
}

/**
 * Draw an square with an outline to the canvas.
 *
 * @param {context} context - The context of a HTML canvas.
 * @param {number} x        - The x position of the square.
 * @param {number} y        - The y position of the square.
 * @param {number} size     - The size (length and width) of the square.
 * @param {string} color    - (Optional)The color of the square. Defaults to black.
 */
function drawSquareStroke(context, x, y, size, color)
{
	context.strokeStyle = color ?? 'black';
	context.strokeRect(x,y, size, size);
}

/**
 * Draw an circle with an outline to the canvas.
 *
 * @param {context} context - The context of a HTML canvas.
 * @param {number} x        - The x position of the circle.
 * @param {number} y        - The y position of the circle.
 * @param {number} radius   - The radius of the circle.
 * @param {string} color    - (Optional)The color of the circle. Defaults to black.
 */
function drawCircleStroke(context, x, y, radius, color)
{
	context.beginPath();
	context.arc(x,y, radius, 0, Math.PI * 2);
	context.strokeStyle = color ?? 'black';
	context.stroke();
}

export default { drawSquare,
	drawCircle,
	drawSquareStroke,
	drawCircleStroke,
	clear }
