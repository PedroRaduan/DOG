img = '';

function preload(){
    img = loadImage('dog.jpg');
}

function setup(){
    canvas = createCanvas(800,500);
    canvas.center();
    
}

function draw(){
    image(img,0,0,800,500);
    fill('red');
    text('Dog', 150, 130);
    noFill();
    stroke('red');
    rect(70, 70, 600, 420)

}