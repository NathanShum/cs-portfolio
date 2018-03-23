var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operator = document.getElementById("operator");
var calculate = document.getElementById("calculate");
var display = document.getElementById("display");

// makes it so that the button allows num1 and num2 to do a function together
calculate.addEventListener("click", function() {
    var number1 = +num1.value;
    var number2 = +num2.value;
    var op = operator.value;

    // number1 and number2 would add
    if (op === "+") {
        display.innerHTML = number1 + number2;
    }

    // number1 and number 2 would subtract
    if (op === "-") {
        display.innerHTML = number1 - number2;
    }

    // number1 and number 2 would divide
    if (op === "/") {
        display.innerHTML = number1 / number2;
    }

    // number 1 and number 2 would multiply
    if (op === "*") {
        display.innerHTML = number1 * number2;
    }
});
