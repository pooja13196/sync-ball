var ball;
var database,position;
//ref= refers loct of database
//on=keeps listening to chnges in database
//write
//showerror
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var locOfchild=database.ref("ball/positions")
    locOfchild.on("value",readOp,showerror);
}

function draw(){
    background("black");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/positions").set({
        x:ball.x+x,
        y:ball.y+y
    })
    
}

function readOp(data){
    position=data.val();
        ball.x=position.x;
        ball.y=position.y
  
}

function showerror(){
    console.log("error")
}
