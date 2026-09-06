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

        if (buttons[r][c] == 'c') {
            // implement clear button behavior
        } else if (!Number.isNaN(buttons[r][c])){
            // implement digit button behavior
        } else {
            // implement operator button behavior
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

updateDisplay();