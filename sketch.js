let fondo, posX, posY, diam, rad, esp, margen, piso, velX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = windowHeight * 0.2;
  circulo = 255;
  diam = random(10, 50);
  rad = diam / 2;
  rectMode(CENTER);
  esp = 50;
  margen = 40;
  velY = 10;
  acel = 0.98;
  piso = windowHeight - margen - esp / 2;
}

function draw() {
  background(0, 200, 150, 70);

  update();

  noStroke();
  fill(circulo);
  circle(posX, posY, diam);

  fill(100, 50, 0);
  rect(windowWidth / 2, windowHeight - margen, windowWidth, esp);
}

function update() {
  velY += acel;
  posY += velY;

  if (posY >= piso - rad) {
    print("se choco");
    velY *= -1;
    posY += velY;
  }
}
