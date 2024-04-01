// Round value before returning result
function roundValue(inputValue) {
    let string = inputValue.toString();
    let value = string.split('.');
    let head = parseInt(value[0]);
    let tail = parseFloat('0.' + value[1]);

    if (tail >= 5) {
        head += 1;
    }

    return head.toString();
}

// Math operations function
function operate (value1, operator, value2) {
    try {
        let first = parseInt(value1);
        let second = parseInt(value2);
        let result = '0';
        switch (operator){
            case '+':
                result = first + second;
                break;
            case '-':
                if (first > second){
                    result = first - second;
                }
                else {
                    console.log('Error! First number must be bigger than second to operate this.');
                    result = '0';
                }
                break;
            case '/':
                if (first > second){
                    result = first / second;
                }
                else {
                    console.log('Error! First number must be bigger than second to operate this.');
                    result = '0';
                }
                break;
            case '*':
                result = first * second;
        }

        return roundValue(result);
    } catch (e) {
        console.log(`Error while operating numbers. \n ${e}`);
    }
}

// Prototypes for calling method properly
String.prototype.plus = function(value) {
    return operate(this, '+', value);
}
String.prototype.minus = function(value) {
    return operate(this, '-', value);
}
String.prototype.multiply = function(value) {
    return operate(this, '*', value);
}
String.prototype.divide = function(value) {
    return operate(this, '/', value);
}

// Tests
console.log("Plus: " + "140".plus("450"));
console.log("Minus: " + "1000".minus("120"));
console.log("Multiply: " + "5".multiply("6"));
console.log("Divide: " + "1000".divide("25"));