function setup() {
  createCanvas(5000, 5000, SVG);
  background(233, 203, 130);
  step = width / 20

}

function draw() {
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      push()
        strokeWeight(5)
        stroke(158, 122, 70)
        noFill()
        translate(x, y)
        circle( step / 2, step / 2, step )
        arc( 0, 0, step, step, 0, HALF_PI)
        arc( step, 0, step, step, HALF_PI, PI)
        arc( step, step, step, step, PI, PI + HALF_PI)
        arc( 0, step, step, step, PI + HALF_PI, TWO_PI)
      pop()
    }
  }
  // save("hoshishippou_01.svg");
  // print("saved svg");
  // noLoop();
}