function deepCloneObject(obj, objClonesArr = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        console.log('Object is not valid for this operation');
        return obj;
    }

    if (objClonesArr.has(obj)) {
        return objClonesArr.get(obj);
    }

    let objClone;

    if (Array.isArray(obj)) {
        objClone = [];
    } else {
        objClone = {};
    }
    objClonesArr.set(obj, objClone);
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            objClone[key] = deepCloneObject(obj[key], objClonesArr);
        }
    }
    return objClone;
}

const originalObj = {
    a: 1,
    b: [2, 3, { c: 4 }],
    d: { e: { f: 5 } }
};

const originalObj2 = {
    team: ['Rogue', 'RevoX', 'Ly'],
    nums: [2, 3, { c: 4 }],
    words: { car: { color: 'yellow' }, plane: {weight: 'light'}}
};

const originalObjEmpty = {
    team: [],
    nums: [],
    words: {}
};

originalObj.circularRef = originalObj;

const clonedObj = deepCloneObject(originalObj);

console.log("Cloned: ", originalObj);
console.log("Cloned: ", clonedObj);

const clonedObj2 = deepCloneObject(originalObj2);

console.log("Cloned: ", originalObj2);
console.log("Cloned: ", clonedObj2);

const clonedObjEmpty = deepCloneObject(originalObjEmpty);

console.log("Cloned: ", originalObjEmpty);
console.log("Cloned: ", clonedObjEmpty);