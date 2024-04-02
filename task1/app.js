// Round value before returning result
function roundValue(inputValue) {
    let stringValue = inputValue.toString();
    let decimalIndex = stringValue.indexOf('.');

    if (decimalIndex === -1) {
        return stringValue;
    }

    let head = parseInt(stringValue.substring(0, decimalIndex));
    let tail = parseInt(stringValue.substring(decimalIndex + 1));

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
                console.log('Success plus');
                break;
            case '-':
                if (first >= second){
                    result = first - second;
                    console.log('Success minus');
                }
                else {
                    console.log('Error! First number must be bigger than second to operate this.');
                    result = '0';
                }
                break;
            case '/':
                if (first >= second){
                    result = first / second;
                    console.log('Success divide');
                }
                else {
                    console.log('Error! First number must be bigger than second to operate this.');
                    result = '0';
                }
                break;
            case '*':
                result = first * second;
                console.log('Success mult');
        }

        return roundValue(result.toString());
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
console.log("Minus: " + "10".minus("10"));
console.log("Multiply: " + "5".multiply("6"));
console.log("Divide: " + "5".divide("5"));
//MORE
console.log("Plus2: " + "900899999999999999999999999999999999999999999999999999999999999999999".plus("1"));
console.log("Minus2: " + "30000000000000000000000000000000000000000000000000000000000000000000".minus("3"));
console.log("Multiply2: " + "999999999999999999999999999999999999999999995655555555555659".multiply("8"));
console.log("Divide2: " + "26666666666666666666666666666666666666666666666666666666666666".divide("2"));


