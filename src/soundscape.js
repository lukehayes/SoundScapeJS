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

// ----------------------------------------------------------------------------
// Main Loop
// ----------------------------------------------------------------------------
const FPS = 1000 / 60; // 16ms per frame, so 60 frames a second.
let deltaTime = 0;
let lastTime  = 0;

function update(timestamp) {

    requestAnimationFrame(update);
    deltaTime = (timestamp - lastTime) / FPS;
    lastTime = timestamp;

    gfx.clear(context, canvas);
}

requestAnimationFrame(update);

