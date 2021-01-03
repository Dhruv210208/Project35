var ball,dogImage,dogImage1;

function preload(){
    dogImage=loadImage("dogImg.png")
    dogImage1=loadImage("dogImg1.png")
}
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball.addImage(dogImage)
ball.scale=0.1
}

function draw(){
    FOODREMAINING =20
    background("green");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
        ball.addImage(dogImage1)
        text("FOOD REMAINING=0: ", 100,100);

    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    text("FOOD REMAINING=20: ", 100,100);

    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
