let ball = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  //push the object into the arrays
  if (mouseIsPressed) {
    if (random(1.5) > 0.2) {
      ball.push(new Ball(mouseX, mouseY));

    }
  }

  for (let i = 0; i < ball.length; i++) {
    ball[i].update();
    ball[i].display();
  }

  while (ball.length > 80) {
    ball.splice(0, 1);
  }
}
class Ball {
  constructor(intX, intY) {
    this.x = intX;
    this.y = intY;
    this.dia = random(1, 10);
    this.spd = 1
    this.rdm = random(1)
    this.r = random(255)
    this.g = random(255)
    this.b = random(255)
  }
  update() {
    this.spd += 0.001
    this.x += this.spd * sin(this.rdm * frameCount * 0.1);
    this.y += this.spd * cos(this.rdm * frameCount * 0.1);

  }
  display() {
    push();
    fill(this.r, this.g, this.b);
    translate(this.x, this.y);
    circle(0, 0, this.dia);
    pop();
  }
}

