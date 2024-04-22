// Lazy Evaluation and Generators functions
const lazyMap = (array, func) => {
    let index = 0;
    return () => {
        if (index < array.length) {
            return func(array[index++]);
        }
        return 0;
    };
};

const fibonacciGenerator = () => {
    let first = 0, second = 1;
    return () => {
        const nextFibValue = first + second;
        first = second;
        second = nextFibValue;
        return nextFibValue;
    };
};

const array = [10, 22, 34, 44, 50, 72, 30];
const mathFunc = (num) => num * 2 ;

const lazyMapper = lazyMap(array, mathFunc);
console.log(`Lazy Load Mapping ${lazyMapper()}`);
console.log(`Lazy Load Mapping ${lazyMapper()}`);
console.log(`Lazy Load Mapping ${lazyMapper()}`);
console.log(`Lazy Load Mapping ${lazyMapper()}`);
console.log(`Lazy Load Mapping ${lazyMapper()}`);
console.log(`Lazy Load Mapping ${lazyMapper()}`);
console.log(`Lazy Load Mapping ${lazyMapper()}`);
console.log(`Lazy Load Mapping ${lazyMapper()}\n\n`);

const lazyEvalFibonacciGenerator = fibonacciGenerator();
console.log(`Fibonacci: ${lazyEvalFibonacciGenerator()}`);
console.log(`Fibonacci: ${lazyEvalFibonacciGenerator()}`);
console.log(`Fibonacci: ${lazyEvalFibonacciGenerator()}`);
console.log(`Fibonacci: ${lazyEvalFibonacciGenerator()}`);
console.log(`Fibonacci: ${lazyEvalFibonacciGenerator()}`);