// Lazy Evaluation and Generators functions
function lazyMap(array, func) {
    let index = 0;
    return {
        next: function() {
            if (index < array.length) {
                return func(array[index++]);
            } else {
                console.log('Finished LazyMapping');
                return 0;
            }
        }
    };
}

function fibonacciGenerator() {
    let first = 0, second = 1;
    return {
        next: function() {
            const nextFibValue = first + second;
            first = second;
            second = nextFibValue;
            return nextFibValue;
        }
    };
}

const array = [10, 22, 34, 50];
const mapFunc = num => num * 2;

const LazyGenerator = lazyMap(array, mapFunc);
console.log('LazyMap Generator\n___________________');
console.log(LazyGenerator.next());
console.log(LazyGenerator.next());
console.log(LazyGenerator.next());
console.log(LazyGenerator.next());
console.log(LazyGenerator.next());


const LazyFibonacci = fibonacciGenerator();
console.log('Fibonacci Generator\n___________________');
console.log(LazyFibonacci.next());
console.log(LazyFibonacci.next());
console.log(LazyFibonacci.next());
console.log(LazyFibonacci.next());
console.log(LazyFibonacci.next());
