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

originalObj.circularRef = originalObj;

const clonedObj = deepCloneObject(originalObj);

console.log("Cloned: ", originalObj);
console.log("Cloned: ", clonedObj);