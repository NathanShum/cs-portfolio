/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var lcloudSize = 125;
var rcloudSize = 240;
var tcloudX = 150;
var tcloudY = 65;
var sunSize = 100;
var x = -100;
var colorOne = color(59, 230, 62);
var colorTwo = color(255, 40, 0);
var colorThree = color(42, 96, 165);

// a function that draws the code that draws clouds out of the draw = function
function drawClouds(){
    // color of clouds
    fill(169, 163, 160);
    
    // left cloud size
    ellipse(lcloudSize, 155, 125, 100);
    ellipse(lcloudSize + 60, 155, 70, 60);
    ellipse(lcloudSize - 60, 155, 70, 60);
    
    // right cloud size
    ellipse(rcloudSize + 10, 75, 120, 95);
    ellipse(rcloudSize + 70, 75, 70, 60);
    ellipse(rcloudSize - 55, 75, 70, 60);
    
    // top cloud size
    ellipse(tcloudX - 5, tcloudY, 100, 75);
    ellipse(tcloudX - 50, tcloudY+10, 75, 50);
    ellipse(tcloudX + 35, tcloudY-10, 70, 55);   
}


// a function that takes code used to draw colored clouds out of the draw = function 
function drawCars(){
    // body and wheels of car 1 after the sun is out
        fill(59, 230, 62);
        rect(x - 100, 350, 100, 20);
        rect(x - 85, 328, 70, 40);
        fill(77, 66, 66);
        ellipse(x - 75, 371, 24, 24);
        ellipse(x - 25, 371, 24, 24);
    
        // body and wheels of car 2 after the sun is out
        fill(255, 40, 0);
        rect(x + 15, 350, 100, 20);
        rect(x + 30, 328, 70, 40);
        fill(77, 66, 66);
        ellipse(x + 40, 371, 24, 24);
        ellipse(x + 90, 371, 24, 24);
        
        // body and wheels of car 3 after the sun is out
        fill(42, 96, 165);
        rect(x + 130, 350, 100, 20);
        rect(x + 145, 328, 70, 40);
        fill(77, 66, 66);
        ellipse(x + 155, 371, 24, 24);
        ellipse(x + 205, 371, 24, 24);
}

background(102, 178, 255);

draw = function() {
    // makes the clouds go away faster
    frameRate(max);
    
    background(102, 178, 255);
    
    noStroke();

    // sun color and size
    fill(255, 170, 0);
    ellipse(200, 100, sunSize, sunSize);
    
    drawClouds();
    
    // draws cars that are gray moving from left to right while the clouds are still on the screen or covering the sun
    do{
        // body and wheels of car 1
        fill(104, 101, 98);
        rect(x - 100, 350, 100, 20);
        rect(x - 85, 328, 70, 40);
        fill(77, 66, 66);
        ellipse(x - 75, 371, 24, 24);
        ellipse(x - 25, 371, 24, 24);
    
        // body and wheels of car 2
        fill(104, 101, 98);
        rect(x + 15, 350, 100, 20);
        rect(x + 30, 328, 70, 40);
        fill(77, 66, 66);
        ellipse(x + 40, 371, 24, 24);
        ellipse(x + 90, 371, 24, 24);
        
        // body and wheels of car 3
        fill(104, 101, 98);
        rect(x + 130, 350, 100, 20);
        rect(x + 145, 328, 70, 40);
        fill(77, 66, 66);
        ellipse(x + 155, 371, 24, 24);
        ellipse(x + 205, 371, 24, 24);
        
        // moves the cars forward when the sun is covered by clouds
        x += .5;
        
        // moves the clouds away from the sun
        lcloudSize -= .4;
        rcloudSize += .2;
        tcloudX -= .2;
        tcloudY -= .1;
    }
    while(lcloudSize > 0 && rcloudSize < 400 && tcloudY > 0 && tcloudX > 0);
    
    
    // makes the sun grow to a certain size when the clouds move out of the way
    if(sunSize <= 150){
        sunSize += .2;
    }
    
    
    // gives the sun a smile whenever the clouds are away
    if(lcloudSize <= 0 && rcloudSize >= 400 && tcloudY <= 0  && tcloudX <= 0){
        
        // head of the sun
        fill(255, 170, 0);
        ellipse(200, 100, 150, 150);
        
        // eyes of the sun
        fill(0, 0, 0);
        ellipse(175, 75, 40, 40); //left
        ellipse(225, 75, 40, 40); //right
        fill(255, 170, 0);
        ellipse(200, 125, 90, 90);
        
        // blushes
        fill(237, 134, 76);
        ellipse(150, 120, 30, 20);
        ellipse(250, 120, 30, 20);
        
        //draws the cars inside this draw = function using a drawCars function
        drawCars();
        
    }
    
    
    // moves the cars back to the front when they reach the end of the screen
    if(x > 400){
        x=0;
    }
    
    
    // makes a car follow your mouse if the cursor is below 300 on the y-axis
    if(mouseY > 300){
        
        fill(227, 170, 18);
        rect(mouseX - 25, mouseY + 25, 100, 20);
        rect(mouseX - 10, mouseY, 70, 40);
        fill(77, 66, 66);
        ellipse(mouseX, mouseY + 45, 24, 24);
        ellipse(mouseX + 50, mouseY + 45, 24, 24);
        }
};
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
