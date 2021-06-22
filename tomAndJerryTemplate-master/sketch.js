var cat
var mouse
var catImage1
var catImage2
var mouseImage1
var mouseImage2
var backgroundImage
function preload() {
    //load the images here
    catImage1=loadAnimation("images/cat1.png" );
    catImage2=loadAnimation("images/cat2.png","images/cat3.png " );
    catImage3=loadAnimation("images/cat4.png")
    mouseImage1=loadAnimation("images/mouse1.png" );
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3=loadAnimation( "images/mouse4.png")
    backgroundImage=loadImage("images/garden.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    mouse = createSprite(200, 600);
    cat.scale=0.2;
    mouse.scale=0.2;
    mouse.addAnimation("mouse1",mouseImage1);
    cat.addAnimation("cat1",catImage1);

    mouse.addAnimation("mouse2",mouseImage2);
    cat.addAnimation("cat2",catImage2);
   
    mouse.addAnimation("mouse3",mouseImage3);
    cat.addAnimation("cat3",catImage3);
   
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.changeAnimation("cat3",catImage3);
        cat.velocityX=0;
        cat.X=300;
        mouse.changeAnimation("mouse3",mouseImage3);
    }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.changeAnimation("cat2",catImage2);
    mouse.changeAnimation("mouse2",mouseImage2);
    cat.velocityX= -5;
}   
  //For moving and changing animation write code here


}
