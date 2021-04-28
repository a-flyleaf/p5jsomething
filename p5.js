//creates canvas
function setup(){
    let myCanvas=createCanvas(500,500);
    myCanvas.parent('snekbox');
}

//starting position
let x = 50;
let y = 50;

//will be run continuously unless stopped
function draw(){
    //rgba background color
        //must be set here (NOT css) or the square leaves a trail
    background(32);

    //setting boundaries
    let leftWall=25;
    let rightWall=475;
    let topWall=25;
    let bottomWall=475;
        //this could probably be simplified to two variables but I'm keeping it separate to clarify wall-checking

    //visible boundaries
    fill(238);
    noStroke();
    rect(0,0,leftWall,height);
    rect(0,0,width,topWall);
    rect(rightWall,0,width,height);
    rect(0,bottomWall,width,height);

    //controls
        //the -/+ signs HAVE to precede the = or it reads it like "x = -5" or "= 5"
        //key specification also has to be caps lock, breaks if lowercase
    if (keyIsDown(LEFT_ARROW)) {x -= 5;}
    if (keyIsDown(RIGHT_ARROW)) {x+=5;}
    if (keyIsDown(UP_ARROW)) {y-=5;}
    if (keyIsDown(DOWN_ARROW)) {y+=5;}

    /*doesn't seem to work for some reason, skipping for now
    //new controls
    function keyPressed() {
        if (keyCode === LEFT_ARROW) {
            fill(0);
        } else if (keyCode === RIGHT_ARROW) {
            fill(255,0,0);
        }
    }
    */
    
    //checks if square hits walls
    if (
        (x <= leftWall) ||
        (y <= topWall) ||
        (x >= rightWall - 25) ||
        (y >= bottomWall - 25)
        //subtraction based on square dimensions, measured from top left
    ) {
        //turn square red
        fill(255,0,0);

        //lose messae
        textAlign(RIGHT);
        text('ya done hecked up',475,490);
        
        //stops all movement
        noLoop();
    }

    //creates square
    rect(x,y,25,25);

    //creating a single point
    fill(0,255,0);
    /*
    let pointX = random(25,475);
    let pointY = random(25,475);
    */
    let pointX = 100;
    let pointY = 100;
    ellipse(pointX,pointY,25,25); //should use variables for the location but for now I just wanna get it working

    //score counter
    let score = 0;
    textAlign(LEFT);
    text('score: ' + score,30,470);

    //position tracker
    fill(238); //next update: change this and the square/ellipse to objects with variables so I don't have to keep changing this per-item
    text('X ' + x + '\n' + 'Y ' + y,30,440);

    /*attempts to detect collisions/overlap; always returned true for some reason??
    //detecting overlap?
    if (
        (rect.x = pointX) ||
        (rect.y = pointY)
    ) {
        //red??
        fill(255,0,0);
    } else {
        fill(0,255,255);
    }

    //attempting to calculate distance for collision detection https://www.youtube.com/watch?v=uAfw-ko3kB8
    var d = dist(rect.x,rect.y,ellipse.x,ellipse.y);
    */
}