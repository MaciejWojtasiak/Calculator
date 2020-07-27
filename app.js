//variables

// let equationDisplay = '';
let result = '';
let operationPressed = false;

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const cleanButton = document.querySelector('[data-clean]');
const clearButton = document.querySelector('[data-clear]');
// const equationValue = document.querySelector('.equation');
const resultValue = document.querySelector('.result');


//calculator functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) alert("can't divide by 0!")
    else return a / b;
}

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            updateDisplay();
            break;
        case '-':
            result = subtract(firstNumber, secondNumber);
            updateDisplay();
            break;
        case 'X':
            result = multiply(firstNumber, secondNumber);
            updateDisplay();
            break;
        case '/':
            result = divide(firstNumber, secondNumber);
            updateDisplay();
            break;
        default:
            alert("Wrong operator");
    }
}

function calculate() {
    const values = result.split(' ');
    operate(values[1], parseInt(values[0], 10), parseInt(values[2], 10));
}

//display functions


function updateDisplay() {
    // equationValue.innerHTML = `${equationDisplay}`;
    resultValue.innerHTML = `${result}`;
}
function cleanDisplay() {
    // equationValue.innerHTML = '';
    resultValue.innerHTML = '';
    // equationDisplay = '';
    result = '';
}

//buttons listeners

Array.from(numberButtons).forEach(number =>
    number.addEventListener('click', () => {
        result += number.textContent;
        operationPressed = false;
        updateDisplay();
    }))


Array.from(operationButtons).forEach(operation => {
    operation.addEventListener('click', () => {
        if (operationPressed === true) return;
        result += ` ${operation.textContent} `;
        operationPressed = true;
        updateDisplay();
    })
})



equalsButton.addEventListener('click', calculate)
cleanButton.addEventListener('click', cleanDisplay)
// clearButton.addEventListener('click', clearOneValue)