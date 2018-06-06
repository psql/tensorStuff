var pts = [];
var diam = 10;
var coords;

function setup() {
  createCanvas(800, 800);

  coords = [
    [width/8, height/4*3],
    [width/8*3, height/4],
    [width/8*5, height/4],
    [width/8*7, height/4*3]
  ];

  for (var i = 0; i < coords.length; i++) {
    pts.push( new Point(coords[i][0], coords[i][1]) );
  }
}

function draw() {
  background(220);

  noFill();
  stroke(0);
  strokeWeight(4);
  curve(pts[0].x, pts[0].y, pts[1].x, pts[1].y, pts[2].x, pts[2].y, pts[3].x, pts[3].y);

  strokeWeight(1);
  stroke(200, 0, 200);
  line(pts[0].x, pts[0].y, pts[1].x, pts[1].y);
  line(pts[2].x, pts[2].y, pts[3].x, pts[3].y);

  for (var i = 0; i < pts.length; i++) {
    pts[i].move();
    pts[i].display();
  }
}

function mousePressed() {
  for (var i = 0; i < pts.length; i++) {
    if ( dist(mouseX, mouseY, pts[i].x, pts[i].y) <= diam ) {
      pts[i].pressed = true;
    }
  }
}

function mouseReleased() {
  for (var i = 0; i < pts.length; i++) {
    pts[i].pressed = false;
  }
}

function keyPressed() {
  for (var i = 0; i < pts.length; i++) {
    pts[i].reset();
  }
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.origX = this.x;
  this.origY = this.y;
  this.pressed = false;

  this.reset = function() {
    this.x = this.origX;
    this.y = this.origY;
  }

  this.display = function() {
    if (this.pressed) {
      fill(0, 255, 255);
    } else {
      fill(200, 0, 200);
    }
    noStroke();
    ellipse(this.x, this.y, diam, diam);
  }

  this.move = function() {
    if (this.pressed) {
      this.x = mouseX;
      this.y = mouseY;
    }
  }
}
