function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  drawCircle(400,300,mouseX);
  textSize(32);
  text('Sierpinski triangle  - Recusion Visualization',150,50)
  // noLoop();
}



function drawCircle(x,y,d){
  if(d>2){ 
    // Comment this base case to see the max call stack size exceeded
    ellipse(x,y,d);
    drawCircle(x+d*0.5,y,d*0.5);
    drawCircle(x-d*0.5,y,d*0.5);
    drawCircle(x,y+d*0.5,d*0.5);
    
    
  }
}
