//variables

let displayValue = '';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const equationValue = document.querySelector('.equation');
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
            displayValue = add(firstNumber, secondNumber);
            updateDisplay();
            break;
        case '-':
            displayValue = subtract(firstNumber, secondNumber);
            updateDisplay();
            break;
        case 'X':
            displayValue = multiply(firstNumber, secondNumber);
            updateDisplay();
            break;
        case '/':
            displayValue = divide(firstNumber, secondNumber);
            updateDisplay();
            break;
        default:
            alert("Wrong operator");
    }
}



function updateDisplay() {
    equationValue.innerHTML = `${displayValue}`;
}
function clearDisplay() {
    equationValue.innerHTML = '';
    resultValue.innerHTML = '';
    displayValue = '';
}

Array.from(numberButtons).forEach(number =>
    number.addEventListener('click', () => {
        displayValue += number.textContent;
        updateDisplay();
    }))


Array.from(operationButtons).forEach(operation => {
    operation.addEventListener('click', () => {
        displayValue += ` ${operation.textContent} `;
        updateDisplay();
    })
})

function calculate() {
    const values = displayValue.split(' ');
    operate(values[1], parseInt(values[0], 10), parseInt(values[2], 10));
}

equalsButton.addEventListener('click', calculate)
clearButton.addEventListener('click', clearDisplay)