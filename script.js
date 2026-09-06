let num1 = 0;
let num2 = 0;
let operator;
let buttons = [
        [7, 8, 9, '/'],
        [4, 5, 6, 'x'],
        [1, 2, 3, '-'],
        [0, 'c', '=', '+']
    ];

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'x':
            return num1 * num2;
        case '/':
            if (num2 == 0) return 'ERROR';
            return num1 / num2;
        default:
            return "ERROR";
    }
}
const display = document.querySelector("#display");

const container = document.querySelector(".container");

for (let r = 0; r < buttons.length; r++) {

    const row = document.createElement("div");
    
    for (let c = 0; c < buttons[r].length; c++) {
        const curr = document.createElement("button");

        curr.classList.add(r);
        curr.classList.add(c);

        curr.textContent = buttons[r][c];

        row.appendChild(curr);

        if (typeof buttons[r][c] === 'number'){
            curr.addEventListener('click', e => digitBehavior(Number(e.target.textContent)));
        } else if (buttons[r][c] === 'c') {
            curr.addEventListener('click', clearBehavior);
        } else if (buttons[r][c] === '=') {
           curr.addEventListener('click', e => calculateBehavior(e.target.textContent));
        } else {
           curr.addEventListener('click', operatorBehavior);
        }
    }
    container.appendChild(row);
}


function formatNum(num) {
    return num.toFixed(2);
}

function updateDisplay() {
    if (operator == undefined) {
        display.textContent = `${formatNum(num1)}`; 
    } else {
        display.textContent = `${formatNum(num1)} ${operator} ${formatNum(num2)}`; 
    }
}

function calculateBehavior() {
    if (operator != undefined) {
        num1 = operate(num1, num2, operator);
    }
    operator = undefined;
    num2 = 0;
    updateDisplay();
}

function clearBehavior() {
    num1 = num2 = 0;
    operator = undefined;
    updateDisplay();
}

function operatorBehavior(op) {
    operator = op;
    updateDisplay();
}

function digitBehavior(digit) {
    const append = digit / 100;
    if (operator == undefined) {
        num1 *= 10;
        num1 += append
    } else {
        num2 *= 10;
        num2 += append;
    }
    updateDisplay();
}

document.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) {
        digitBehavior(Number(e.key));
    } else if (e.key == '-' || e.key == '+' || e.key == 'x' || e.key == '/') {
        operatorBehavior(e.key);
    } else if (e.key == '=' || e.key == 'Enter') {
        calculateBehavior();
    } else if (e.key == 'Backspace') {
        clearBehavior();
    }
});


updateDisplay();