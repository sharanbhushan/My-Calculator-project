document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.querySelector('.input-box');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'AC') {
                inputBox.value = '';
            } else if (button.textContent === '=') {
                try {
                    inputBox.value = evaluateExpression(inputBox.value);
                } catch (error) {
                    inputBox.value = 'Error';
                }
            } else if (button.textContent === 's') {
                const inputValue = parseFloat(inputBox.value);
                inputBox.value = inputValue * inputValue;
            } else {
                inputBox.value += button.textContent;
            }
        });
    });

    function evaluateExpression(expression) {
        const operators = ['+', '-', '*', '/'];

        // Checks for two consecutive operators without a number in between
        for (let i = 0; i < expression.length - 1; i++) {
            if (operators.includes(expression[i]) && operators.includes(expression[i + 1])) {
                throw new Error('Invalid expression');
            }
        }

        // Evaluates the expression
        return eval(expression);
    }
});
