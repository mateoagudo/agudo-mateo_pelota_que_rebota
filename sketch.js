let fondo, posX, posY, diam, rad, esp, margen, piso, velY, velX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = 100;
  circulo = 255;
  diam = 50;
  rad = diam / 2;
  rectMode(CENTER);
  esp = 34;
  margen = 50;
  velY = 10;
  velX = 5;
  piso = windowHeight - margen - esp / 2;
}

function draw() {
  background(0, 200, 150, 10);
  noStroke();

  posX += velX;
  if (posX > windowWidth * 0.9 - rad) {
    velX *= -1;
  }

  if (posX < windowWidth * 0.1 + rad) {
    velX *= -1;
  }

  posY += velY;
  if (posY > piso - rad) {
    velY *= -1;

    print("se choco");
  }

  if (posY < 100) {
    velY *= -1;
  }

  fill(circulo);
  circle(posX, posY, diam);

  fill(255, 0, 0);
  rect(windowWidth / 2, 100 - esp / 2 - rad, windowWidth * 0.8, esp);
  rect(windowWidth / 2, windowHeight - margen, windowWidth * 0.8, esp);
}
