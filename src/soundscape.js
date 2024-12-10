// ----------------------------------------------------------------------------
// Setup initial configuration and HTML Canvas.
// ----------------------------------------------------------------------------

const baseWidth  = 320
const baseHeight = 180
const baseScale  = 2.5

let canvas = document.getElementById('soundscape_canvas');
canvas.width  = baseWidth * baseScale;
canvas.height = baseHeight * baseScale;

const context = canvas.getContext("2d");



