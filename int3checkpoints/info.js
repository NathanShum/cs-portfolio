var left = document.getElementById("left");
var right = document.getElementById("right");
var display = document.getElementById("display");

// makes "left" clickable
left.addEventListener("click", function(){
    // makes this text appear after clicking on "left"
   display.innerHTML = "left hand is red. the left side of your body is controlled by your right brain" 
});

// makes "right" clickable
right.addEventListener("click", function(){
    // makes this text in quotes appear after clicking on "right"
    display.innerHTML = "right hand is blue. the right side of your body is controlled by your left brain"
})