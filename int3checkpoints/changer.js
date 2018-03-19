// creates variables and saves DOM elements to each
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");


// event listener for button. sets the body's background color to the 
// user provided value
colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGColor.value;
})