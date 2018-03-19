    /* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(0, 0, 255);

var colorOne = color(34, 220, 214);
var colorTwo = color(34, 172, 220);
var colorThree = color(34, 93, 220);

draw = function() {
    
// sets the background to change randomly whenever you refresh the page
    for(var i = 0; i < width; i+=30){
    for(var j = 0; j < height; j+=30){
        var size = random(30);
        fill(random(255), random(255), 255)
        ellipse(i, j, 50, 50);
        }
    }
    
    
// allows the triangles to rotate between 3 selected colors randomly  
    if(mouseX <= 400 && mouseY <= 400){
        var randomNum = random(3);
        
        if(randomNum > 2){
            fill(colorOne);
        }
        
        else if(randomNum < 1 ){
            fill(colorTwo);
        }
        
        else {
            fill(colorThree);
        }
        
        triangle(mouseX, mouseY, 50, 55, 5, 100, 5, 10);
    }
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
