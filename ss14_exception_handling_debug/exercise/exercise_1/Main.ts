function calculator(number1, number2, operator) {
    if (['+', '-', '*', '/'].indexOf(operator) == -1) {
        throw new RangeError('The operator must be an +,-,*,/');
    }
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }
    return result;
}

try {
    calculator(3, 9, '%')
} catch (e) {
    if (e instanceof RangeError) {
        console.log(e.message)
    }
}
