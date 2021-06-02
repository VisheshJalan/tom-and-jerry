var bgImg, cat1,cat2,cat3;
var mouse1,mouse2,mouse3;
var tom, jerry, canvas
function preload() {
    bgImg=loadImage("images/garden.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadAnimation("images/cat4.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadAnimation("images/mouse4.png")
}

function setup(){
    canvas=createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(850,600)
    tom.addAnimation("tomsleeping",cat1)
    tom.scale=0.2

    jerry=createSprite(200,600)
    jerry.addAnimation("jerrystanding",mouse1)
    jerry.scale=0.15

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
