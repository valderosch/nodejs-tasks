function customFilterUnique(array, keyExtractor) {
    const uniqueElements = [];
    const checkedElements = new Set();

    array.forEach(item => {
        const key = keyExtractor(item);
        if (!checkedElements.has(key)) {
            checkedElements.add(key);
            uniqueElements.push(item);
        }
    });

    return uniqueElements;
}

const getId = obj => obj.id;


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

const uniqueObjects = customFilterUnique(objectsArray, getId);
console.log(uniqueObjects);