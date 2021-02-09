let theShader;

function preload(){
  theShader = loadShader('sketch.vert', 'sketch.frag');
}

function setup() {
let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.parent("myContainer");

}

function draw() {

  shader(theShader);

  theShader.setUniform("resolution", [width, height]);
  theShader.setUniform("time", millis() / 1000.0);

  quad(-1, -1, 1, -1, 1, 1, -1, 1);



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
