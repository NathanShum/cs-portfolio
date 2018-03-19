/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0; 
var weight = 7;


draw = function() {
    // draws a large white circle covering the intersection of the lines
    fill();
    ellipse(200, 200, 200, 200);
    
    // draws circles starting from the top left corner to the bottom right hand corner
    strokeWeight(3) 
    stroke(57, 0, 214);
    fill(153,153,255);
    ellipse(xPos, yPos, 50, 50);
    xPos = xPos+20
    yPos = yPos+20
    
    // draws circles starting from the top right corner to the bottom left hand corner
    strokeWeight(3) 
    stroke(57, 0, 214);
    fill(153,153,255);
    ellipse(height - xPos, yPos, 50, 50);
    
    // draws circles starting from the top of the screen to the bottom 
    strokeWeight(weight) 
    stroke(57, 0, 214);
    fill(0, 210, 247);
    ellipse(200, yPos, 50, 50);
    weight;
    
    // draws circles from the middle of the left side to the middle of the right side
    strokeWeight(weight) 
    stroke(57, 0, 214);
    fill(0, 210, 247);
    ellipse(xPos, 200, 50, 50);
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
