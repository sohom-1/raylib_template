const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    // prepare the sketch
}

function update() {
    // change the state
}

function draw() {
    // draw the current state
}
s
function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};