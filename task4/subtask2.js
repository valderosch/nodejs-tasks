const product = {
    name: "Laptop",
    price: 1200,
    quantity: 5
};


Object.defineProperties(product, {
    price: { enumerable: false, writable: false },
    quantity: { enumerable: false, writable: false }
});

function getTotalPrice(product) {
    const price = Object.getOwnPropertyDescriptor(product, 'price');
    const quantity = Object.getOwnPropertyDescriptor(product, 'quantity');
    return price.value * quantity.value;
}

function deleteNonConfigurable(obj, propName) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, propName);

    if (descriptor === undefined) {
        console.log(`${propName} does not exist in this object.`);
    } else if (!descriptor.configurable) {
        throw new Error(`${propName} cannot be deleted.`);
    } else {
        delete obj[propName];
        console.log(`${propName} has been deleted from the object.`);
    }
}

// Test getTotalPrice function
console.log("Total price:", getTotalPrice(product));

// Test deleteNonConfigurable function
deleteNonConfigurable(product, 'name');
deleteNonConfigurable(product, 'email');
deleteNonConfigurable(product, 'quantity');
deleteNonConfigurable(product, '');
