let pelota, pelota1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  pelota = new Bounce(windowWidth / 2, windowHeight * 0.2);
  pelota1 = new Bounce(windowWidth / 2, windowHeight * 0.2);
}

function draw() {
  background(0, 200, 150);

  pelota.update();
  pelota.display();
  pelota1.update();
  pelota1.display();
}

class Bounce {
  constructor(_posX, _posY) {
    this.posX = random(windowWidth * 0.1, windowWidth * 0.9);
    this.posY = _posY;
    this.velY = 10;
    this.acel = 0.98;
    this.diam = random(10, 50);
    this.rad = this.diam / 2;
    this.esp = 50;
    this.margen = 40;
    this.piso = windowHeight - this.margen - this.esp / 2;
  }
  update() {
    this.velY += this.acel;
    this.posY += this.velY;

    if (this.posY >= this.piso - this.rad) {
      print("se choco");
      this.velY *= -1;
      this.posY += this.velY;
    }
  }

  display() {
    noStroke();
    fill(255);
    circle(this.posX, this.posY, this.diam);

    fill(100, 50, 0);
    rect(windowWidth / 2, windowHeight - this.margen, windowWidth, this.esp);
  }
}
