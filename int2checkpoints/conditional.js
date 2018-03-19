/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
draw = function() {

var redColor = (random(255, 0, 0));
var blueColor = (random(0, 0, 255));
var greenColor = (random(0, 255, 0));

// changes the background color to green
    background(50, 205, 50);
    
// has a gray circle follow your mouse if it's on the right half
    if(mouseX > 200){
        fill(153);
        strokeWeight(4);
        stroke(57, 20, 14);
        ellipse(mouseX, mouseY, 30, 30);
    }
// has a red square follow your mouse on the top left  
    if(mouseX < 200 && mouseY < 200){
        fill(255, 0, 0, 150);
        strokeWeight(2);
        stroke(57, 20, 14);
        rect(mouseX, mouseY, 40, 40);
    }
    
// adds a circle on the bottom right side that changes color  
    if(mouseX < 200 && mouseY > 200){
        fill(redColor, blueColor, greenColor);
        ellipse(mouseX, mouseY, 20, 20);
    }
    



};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
