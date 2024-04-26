function observeObject(obj, callback) {
    return new Proxy(obj, {
        get(target, prop, receiver) {
            callback(prop, 'get');
            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, value, receiver) {
            callback(prop, 'set');
            return Reflect.set(target, prop, value, receiver);
        }
    });
}

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {}
};

function callback(property, action) {
    console.log(`Property "${property}" ${action} accessed.`);
}

const observedPerson = observeObject(person, callback);

console.log(observedPerson.firstName);
observedPerson.age = 35;
console.log(observedPerson.age);
console.log(observedPerson.email);