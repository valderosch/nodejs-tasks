// High order functions and closures functions

function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

function repeatFunction(func, number) {
    if (number < 0) {
        return function() {
            while (true) {
                func();
            }
        };
    } else {
        return function() {
            for (let i = 0; i < number; i++) {
                func();
            }
        };
    }
}

// Closure
const counter = createCounter();
console.log(`Counter closure \n${counter()}`);
console.log(`Counter closure \n${counter()}`);
console.log(`Counter closure \n${counter()}`);


//Closure + High Order
const func1 = createCounter();
const func2 = createCounter();

const numberCall = repeatFunction(func1, 22);
const infinityCall = repeatFunction(func2, -5);


numberCall();
console.log(`\nHigh-Order [regular]: ${func1()}`);

infinityCall();
console.log(`\nHigh-Order [infinite]: ${func2()}`);