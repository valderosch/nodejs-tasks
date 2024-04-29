const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

Object.defineProperties(person,
    {
    firstName: { writable: false },
    lastName: { writable: false },
    age: { writable: false },
    email: { writable: false }
    }
);

Object.defineProperty(person, 'address', {
    value: {},
    enumerable: false,
    configurable: false
});

person.updateInfo = function(newInfo) {
    for (let objKey in newInfo) {
        if (this.hasOwnProperty(objKey)) {
            Object.defineProperty(this, objKey, {
                value: newInfo[objKey],
                writable: false
            });
        }
    }
};

console.log("Person1:", person);
person.updateInfo({ firstName: "Jane", age: 33 });
console.log("Person2:", person);