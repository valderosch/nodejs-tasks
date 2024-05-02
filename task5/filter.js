function customFilterUnique(array, callback) {
    const counts = {};

    array.forEach(item => {
        const id = callback(item);
        counts[id] = (counts[id] || 0) + 1;
    });
    return array.filter(item => counts[callback(item)] === 1);
}

// Test
arr1 = [
    {id:1, name: 'Test'},
    {id:2, name: 'Foo'},
    {id:3, boo: 3},
    {id:2, isAdmin: false},
];
arr2 = [1, 2, 'a', 'b', 2, 'b', 3];


console.log(customFilterUnique(arr1, el => el.id))
console.log(customFilterUnique(arr2, el => el))

// [{id:1, name: 'Test'}, {id:3, boo: 3},]
// [1, 3, 'a']