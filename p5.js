//creates canvas
function setup(){
    let myCanvas=createCanvas(500,500);
    myCanvas.parent('snekbox');
}

//starting position
let x = 50;
let y = 50;

//overlap checker
let hitPoint = false;

//whoops these should be defined up here
let pointX = 100;
let pointY = 100;
//surely there is a way to do the following in the actual hitPoint checker but for now:
let pointXcalc = pointX - pointX/4;
let pointYcalc = pointY - pointY/4;
//^this is because ellipses are measured from the center, and gives a quarter leeway in every direction; square shouldn't have to be dead center since that's tricky to pin down
//note that the quarter calculation was based on a "test" position of 100,100; it'll be fluky if you move it. could use variables for that too; at that point might as well figure out object-oriented programming

//defining HSV colors
    //sticking with RGB real quick for variable testing
let colorBG = 32;
let colorFG = 238;

//will be run continuously unless stopped
function draw(){
    background(colorBG);

    //setting boundaries
    let leftWall=25;
    let rightWall=475;
    let topWall=25;
    let bottomWall=475;
        //this could probably be simplified to two variables but I'm keeping it separate to clarify wall-checking

    //visible boundaries
    fill(colorFG);
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

    //note: you have to use TWO equal signs for a real "equals", otherwise it force-moves the thing
    if (
        (x >= pointXcalc) && (x <= pointX) &&
            //<the && means "and"
        (y >= pointYcalc) && (y <= pointY)
        //this is such a hacky way to make it work But It Works and collisions don't
    ) {
        hitPoint = true;
        changeColor();
    } else {
        hitPoint = false;
    }

    //creates square
    rect(x,y,25,25);

    //creating a single point
    fill(0,255,0);
    /*
    let pointX = random(25,475);
    let pointY = random(25,475);
    */
    ellipse(pointX,pointY,25,25); //should use variables for the location but for now I just wanna get it working

    //score counter
    let score = 0;
    textAlign(LEFT);
    text('score: ' + score,30,470);

    //overlap checker
    fill(colorFG);
    text('hit point? ' + hitPoint,30,40);

    //position tracker
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

function changeColor() {
    //success validator
    text('hell yea',30,55);

    //using HSB to make sure the FG stays lighter than the BG, it'd be jarring otherwise
}