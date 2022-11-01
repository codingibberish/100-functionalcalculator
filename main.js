// known bugs

// declare variables
let displayText = "";
let secondNum = "";
let operation = "";

const display = document.querySelector(".displayText");

// refresh display screen
function refreshDisplay() {
    display.textContent = displayText;
}

// reset operator button background colour
function resetOperatorBackground() {
    let operatorButtons = [];
    operatorButtons = document.getElementsByClassName("button");

    for (let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].style.backgroundColor = "#5b2833";
    }
}

// operations
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "1":
            return add(num1, num2);
        case "2":
            return subtract(num1, num2);
        case "3":
            return multiply(num1, num2);
        case "4":
            return divide(num1, num2);
        default:
            return "unknown operator"
    }
}

function performOperation() {
    if (operation.length == 1 && secondNum != "") {
        let result = operate(operation, parseFloat(secondNum), parseFloat(displayText));
        result = (Math.round(result * 1000) / 1000);
        // result = toString(result);
        console.log(result);
        if (result > 100000000000000 || result < -10000000000000) {
            result = "answer too big";
        }
        displayText = result;
        secondNum = "";
        refreshDisplay();
        operation = "";                
    }
}

// return numbers
function addNumToDisplayText(number) {
    if (displayText.length < 10) {
        if (number.id == "one") {
            displayText += "1";
        } else if (number.id == "two") {
            displayText += "2";
        } else if (number.id == "three") {
            displayText += "3";
        } else if (number.id == "four") {
            displayText += "4";
        } else if (number.id == "five") {
            displayText += "5";
        } else if (number.id == "six") {
            displayText += "6";
        } else if (number.id == "seven") {
            displayText += "7";
        } else if (number.id == "eight") {
            displayText += "8";
        } else if (number.id == "nine") {
            displayText += "9";
        } else if (number.id == "zero") {
            displayText += "0";
        } else if (number.id == "decimal") {
            if (displayText.includes(".") || displayText == "") {
            } else {
                displayText += ".";
            }
        } 
    }
}


// press num buttons and add them to screen

let numButtons = [];
numButtons = document.getElementsByClassName("numButton");

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', () => {

        if (operation.length == 0) {
            let number = numButtons[i];
            addNumToDisplayText(number);
            console.log("0");
        } else if (operation.length == 1 && secondNum.length == 0) {
            secondNum = displayText;
            displayText = "";
            refreshDisplay();
            let number = numButtons[i];
            addNumToDisplayText(number);
            console.log("1");
        } else {
            let number = numButtons[i];
            addNumToDisplayText(number);
            console.log("2");
        }

       // this is just the clear button 
        
        if (numButtons[i].id == "clearAll") {
            displayText = "";
            secondNum = "";
            operation = "";
            resetOperatorBackground()
        } 
        
        refreshDisplay();
    })
}

// operation buttons
let operationButtons = [];
operationButtons = document.getElementsByClassName("button");

for (let i = 0; i < operationButtons.length; i++) {
    
    operationButtons[i].addEventListener('click', () => {

        if (operationButtons[i].id == "add") {  
            
            performOperation();

            resetOperatorBackground()
            operation = "1";
            operationButtons[i].style.backgroundColor = "#8b6374";
            console.log(operation);
        } 

        if (operationButtons[i].id == "subtract") {

            performOperation();

            resetOperatorBackground();
            operation = "2";
            operationButtons[i].style.backgroundColor = "#8b6374";
            console.log(operation);
        } 

        if (operationButtons[i].id == "multiply") {

            performOperation();

            resetOperatorBackground();
            operation = "3";
            operationButtons[i].style.backgroundColor = "#8b6374";
            console.log(operation);
        } 

        if (operationButtons[i].id == "divide") {
            performOperation();
            resetOperatorBackground();
            operation = "4";
            operationButtons[i].style.backgroundColor = "#8b6374";
            console.log(operation);
        } 

        if (operationButtons[i].id == "equals") {
            performOperation();
            resetOperatorBackground()
            operationButtons[i].style.backgroundColor = "#8b6374";
        }  

    })
}