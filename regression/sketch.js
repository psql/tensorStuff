function setup() {
    createCanvas(1000,1000);
    background(51);
}

function mousePressed() {
    let x = map(mouseX, 0, width, 0, 1);
    let y = map(mouseY, 0, height, 1, 0);
    console.log(x , y)
}
