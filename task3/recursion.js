// Recursion and Tail Call Optimization functions

function calculateFactorial(number, currentValue = BigInt(1)) {
    number = BigInt(number);
    if (number === BigInt(0)) {
        console.log('Number = 0. Returning result');
        return currentValue;
    }
    return calculateFactorial(number - BigInt(1), currentValue * number);
}

function power(base, exponent) {
    try {
        if (exponent === 0) {
            console.log('Exponent = 0. Returning result');
            return 0;
        }
        let result = BigInt(1);
        for (let i = 0; i < exponent; i++) {
            result *= BigInt(base);
        }
        return result;
    } catch (e) {
        throw new Error("There is a problem with power function");
    }
}


console.log(`Result = ${calculateFactorial(7)}\n`);
console.log(`Result = ${calculateFactorial(0)}\n`);
// console.log(`Result = ${calculateFactorial(11122233311122233311122233)}\n\n`);
console.log(`exponent: ${power(5, 3)}`);
console.log(`exponent: ${power(5111111111111222222222222888888888999999999999, 8)}`);
console.log(`exponent: ${power(5, 0)}`);