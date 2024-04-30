function customShuffle(array) {
    const shuffledArray = [...array];
    //Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

const arr = [33, 'not apple', 42, 'apple', 'bananas', 222];
const shuffled = customShuffle(arr);
console.log(shuffled);





