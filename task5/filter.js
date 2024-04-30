function customFilterUnique(array, isUnique) {
    const uniqueElements = [];

    for (let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        let isDuplicate = false;

        for (let j = 0; j < array.length; j++) {
            if (i !== j && isUnique(currentItem, array[j])) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            uniqueElements.push(currentItem);
        }
    }

    return uniqueElements;
}


function isUnique(item, newItem) {
    if (typeof item === 'object' && typeof newItem === 'object') {
        return item.id === newItem.id;
    }
    return item === newItem;
}

// test data
const objectsArray = [
    { id: 1, name: 'One' },
    { id: 6, name: 'One' },
    { id: 1, name: 'One' },
    { id: 2, name: 'Second' },
    { id: 3, name: 'Fifty' },
    { id: 4, name: 'Twenty' },
    { id: 5, name: 'One' },
    { id: 2, name: 'Some' },
    { id: 4, name: 'Last' },

];
const numArray = [54, 34, 33, 54, 11];
const wordArray = ['apple', 'not apple', 'bones', 'apple', 'bananas'];

const uniqueObjects = customFilterUnique(objectsArray, isUnique);
console.log(uniqueObjects);
const uniqueNumbers = customFilterUnique(numArray, isUnique);
console.log(uniqueNumbers);
const uniqueWords = customFilterUnique(wordArray, isUnique);
console.log(uniqueWords);