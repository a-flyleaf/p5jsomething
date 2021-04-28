function setup(){
    let myCanvas=createCanvas(500,500);
    myCanvas.parent('snekbox');
}

// starting positions
let x = 50;
let y = 50;

function draw(){
    background(32);

    //3.1.1 setting boundaries
    let leftWall=25;
    let rightWall=475;
    let topWall=25;
    let bottomWall=475;
    //this could theoretically be simplified to two variables but I'm keeping it separate to clarify wall-checking

    //3.1.4 changed these to filled rectangles instead of lines
    fill(238);
    noStroke();
    rect(0,0,leftWall,height);
    rect(0,0,width,topWall);
    rect(rightWall,0,width,height);
    rect(0,bottomWall,width,height);

    if (keyIsDown(LEFT_ARROW)) {x -= 5;}
    if (keyIsDown(RIGHT_ARROW)) {x+=5;}
        //the -/+ signs HAVE to precede the = or it reads it like "x = -5" or "= 5"
    if (keyIsDown(UP_ARROW)) {y-=5;}
    if (keyIsDown(DOWN_ARROW)) {y+=5;}
        //key specification also has to be caps lock, breaks if lowercase
    
    //if the square hits the walls, it turns red
    if (
        (x <= leftWall) ||
        (y <= topWall) ||
        // need to subtract square dimensions for right/bottom
        (x >= rightWall - 25) ||
        (y >= bottomWall - 25)
    ) {
        fill(255,0,0);
        textAlign(RIGHT);
        text('ya done hecked up',475,490);
        noLoop(); //stops movement
    }
    //actually technically the game ENDS when you hit a wall, so you don't need to constrain it at all lol. game over screen would happen here instead

    //noStroke was redundant. moving the fill above the rect overrides the fill set by thewall, but also negates the black fill when it hits a wall. this is supposed to be two-color anyway though so w/e
    //also ended up not needing the clear; putting the bg color directly into draw nuked the trail https://stackoverflow.com/questions/21738483/processing-moving-image-leaving-trail/21816974
    rect(x,y,25,25);
    //creates square
}