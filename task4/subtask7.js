function validateObject(obj, schema) {
    for (let key in schema) {
        if (schema[key].required && !obj.hasOwnProperty(key)) {
            return false;
        }
        if (obj.hasOwnProperty(key) && typeof obj[key] !== schema[key].type) {
            return false;
        }
        if (schema[key].hasOwnProperty('min') && obj[key] < schema[key].min) {
            return false;
        }
        if (schema[key].hasOwnProperty('max') && obj[key] > schema[key].max) {
            return false;
        }
    }

    return true;
}

// Schema (BluePrint)
const validationSchema = {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    age: { type: 'number', required: true, min: 18 , max: 99},
    email: { type: 'string', required: true},
    city: {type: 'string', required: false}
};

// Input object
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

console.log('Validator Machine\n==================');
console.log("User: ", user);
console.log(`Access: ${validateObject(user, validationSchema) ? 'User accepted': 'User denied'}`)