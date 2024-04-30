function getArrayIntersection(array1, array2) {
    const intersectionArr = [];
    for (const el of array1) {
        if (array2.includes(el) && !intersectionArr.includes(el)) {
            intersectionArr.push(el);
        }
    }

    return intersectionArr;
}

function getArrayUnion(array1, array2) {
    let unique1 = array1.filter((o) => array2.indexOf(o) === -1);
    let unique2 = array2.filter((o) => array1.indexOf(o) === -1);

    return unique1.concat(unique2);
}


const arr1 = [1, 2, 22, 33, 'apple', 'banana', 'union',24];
const arr2 = [33, 4, 5, 'banana', 'orange', 'mix', 33, 'union'];

const intersection = getArrayIntersection(arr1, arr2);
console.log("Intersection:", intersection);

const union = getArrayUnion(arr1, arr2);
console.log("Union:", union);