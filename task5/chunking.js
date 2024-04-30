function chunkArray(array, chunkSize) {
    const resultArray = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        resultArray.push(chunk);
    }

    return resultArray;
}

const arr1 = [122, 222, 311, 40, 54, 67, 75, 877, 999];
const arr2 = ['first', 'second', 'thirf', 'fourth', 'fifth', 'sixth', 'seventh', 'eight', 'last'];
const chunked1 = chunkArray(arr1, 3);
const chunked2 = chunkArray(arr2, 3);
const arrMerged = chunked1.concat(chunked2);
const chunked3 = chunkArray(arrMerged, 2);


console.log(chunked1);
console.log(chunked2);
console.log(chunked3);

