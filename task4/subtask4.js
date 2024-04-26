const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {}
};

function createImmutableObject(obj) {
    const immutableObj = {};
    Object.keys(obj).forEach(key => {
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);

        if (descriptor.value && typeof descriptor.value === 'object') {
            immutableObj[key] = createImmutableObject(descriptor.value);
        } else {
            Object.defineProperty(immutableObj, key, {
                value: obj[key],
                writable: false,
                enumerable: true,
                configurable: false
            });
        }
    });

    return immutableObj;
}

const immutablePerson = createImmutableObject(person);
console.log("Before Mutation", immutablePerson);
immutablePerson.firstName = "Jane";
console.log("After mutation",immutablePerson);
