// This is a JavaScript file
function setup() {
    var canvas = createCanvas(displayWidth, displayHeight);
    canvas.parent("p5Canvas");
}
function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}
