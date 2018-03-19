/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


// allows me to draw a fish of random color in the middle of the screen and changes background color at the same time
drawFish = function(x, y){
    background(random(255), random(255), random(255));
    fill(random(255), 255, random(255));
    noStroke();
    triangle(x,y, x,y+55, x+40, y+28);
    ellipse(x+60, y+28, 5+65, 5+45);
    fill(0, 0, 0);
    ellipse(x+75, y+15, 5+15, 5+15);
};


//  draws a fish at wherever I click instead
mouseClicked = function(){
    drawFish(mouseX, mouseY);

};


draw = function() {

};

    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);

// counter++;
    // if (counter === 5){
    // counter = 0;
    // }
