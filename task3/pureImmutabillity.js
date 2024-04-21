// Immutability and pure functions

// Discount per product
function calculateDiscountPrice(products, discountPercent) {
    const discountResult = products.map(product => {
        const result = product.price * (1 - discountPercent / 100);
        return { name: product.name, price: result };
    });
    return discountResult;
}

// Total price for all products
function calculateTotalPrice(products) {
    const totalResult = products.reduce((total, product) => total + product.price, 0);
    return totalResult;
}

const products = [
    { name: 'Printer', price: 260 },
    { name: 'Monitor', price: 200 },
    { name: 'Computer', price: 500 }
];

const discountPercent = 15;

const discountedPrices = calculateDiscountPrice(products, discountPercent);
const itemsFormat = discountedPrices.map(product => `Name: ${product.name}\n Price: ${product.price}\n`);
console.log(`\n\nYour Items\n_______________\n${itemsFormat}`);

const totalPrice = calculateTotalPrice(discountedPrices);
console.log(`===============\nTotal: ${totalPrice} $\n`);