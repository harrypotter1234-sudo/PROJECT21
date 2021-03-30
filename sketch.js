var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,58,200,30);
    block2.shapeColor = "orange";

    block3  = createSprite(400,580,400,30)
    block3.shapeColor = "green"

block4 = createSprite(600,30,450,30)
block4.shapeColor="turquoise"
    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
     ball.velocityX = random(2,5);
    ball.velocityY = random(3,6);
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);


    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)) {
        //ball.bounceOff(block1);
        ball.shapeColor = "blue";
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
    }
    



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.play();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        music.play();
    }



    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "turquoise";
        music.play();
        

    }




    drawSprites();
    }
