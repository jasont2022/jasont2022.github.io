function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  var colY =  map(mouseY, 0, 800, 0, 255);
  var colX =  map(mouseX, 0, 800, 0, 255);
  background(0, colX, colY);
  fill("#eec0c6");
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);
}