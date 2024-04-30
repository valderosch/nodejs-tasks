function measureArrayPerformance(func, array) {
    const startTime = performance.now();
    func(array);
    const endTime = performance.now();
    return endTime - startTime;
}


function MapFunction(array) {
    let result = array.map(item => item * 2);
    console.log(result);
    return result;
}

function ReduceFunction(array) {
    let result = array.reduce((acc, curr) => acc + curr, 0);
    console.log(result);
    return result;
}

function FilterFunction(array) {
    let result = array.filter(item => item % 2 === 0);
    console.log(result);
    return result;
}

//Tests
const smallArray = [20, 30, 60, 100, 50];
const largeArray = [122, 222, 322, 422, 522, 122, 222, 322, 422, 522, 122, 222, 322, 422, 522, 122, 222, 322, 422, 522];

const execTimeSmallArrMap = measureArrayPerformance(MapFunction, smallArray);
console.log("Map | Execution time (s):", execTimeSmallArrMap.toFixed(5), "milliseconds");
const execTimeLargeArrMap = measureArrayPerformance(MapFunction, largeArray);
console.log("Map | Execution time (l):", execTimeLargeArrMap.toFixed(5), "milliseconds");

const executionTimeReduce = measureArrayPerformance(ReduceFunction, smallArray);
console.log("Reduce | Execution time (s):", executionTimeReduce.toFixed(5), "milliseconds");
const executionTimeReduceLarge = measureArrayPerformance(ReduceFunction, largeArray);
console.log("Reduce | Execution time (l):", executionTimeReduceLarge.toFixed(5), "milliseconds");

const executionTimeFilter = measureArrayPerformance(FilterFunction, smallArray);
console.log("Filter | Execution time (s):", executionTimeFilter.toFixed(5), "milliseconds");
const executionTimeFilterLarge = measureArrayPerformance(FilterFunction, largeArray);
console.log("Filter | Execution time (l):", executionTimeFilterLarge.toFixed(5), "milliseconds");