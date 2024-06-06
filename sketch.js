let cor;
let x;
let y;

function setup() {
  createCanvas(400, 400);
  background(220);
  cor = color(random(0,255), random(0,255), random(0,255), random(0,100));;
  x = 200;
  y = 200;
}

function draw() { 
  fill(cor);
  circle(x, y, 40);
  
  if(mouseX < x){x -= 1}
  else{x += 1}
  if(mouseY < y){y -= 1}
  else{y += 1}
  
  if(mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
}