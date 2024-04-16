const lib = require("./app");

// //addValues
console.log('===============\n\n [ AddValues ]');
console.log(lib.addValues(55, 15));
console.log(lib.addValues(120, '120'));
console.log(lib.addValues('120', '120'));
console.log(lib.addValues('React+', '+Node'));
console.log(lib.addValues(5, true));
console.log(lib.addValues());
console.log(lib.addValues(NaN, NaN));
console.log(lib.addValues(undefined, undefined));


// //stringifyValue
console.log('===============\n\n [ StringifyValue ]');
console.log(lib.stringifyValue(7070700707070));
console.log(lib.stringifyValue(['one', 'second', 222, 'true']));
console.log(lib.stringifyValue(NaN));
console.log(lib.stringifyValue(undefined));
console.log(lib.stringifyValue());
console.log(lib.stringifyValue({ key: 'value' }));
console.log(lib.stringifyValue(null));

//invertBoolean
console.log('===============\n\n [ InvertBoolean ]');
console.log(lib.invertBoolean(true));
// console.log(lib.invertBoolean('some_text_with_no_sense'));

//convertToNumber
console.log('===============\n\n [ ConvertToNumber ]');
console.log(lib.convertToNumber("168554.44"));
console.log(lib.convertToNumber("99998888444"));
console.log(lib.convertToNumber("some_text"));
console.log(lib.convertToNumber(true));
console.log(lib.convertToNumber(undefined));
console.log(lib.convertToNumber({name: "Albert"}));
console.log(lib.convertToNumber(['row', 'text', 'data', 111]));

//coerceToType
console.log('===============\n\n [ CoerceTypes ]');
console.log(lib.coerceToType("550066", "number"));
console.log(lib.coerceToType("true", "boolean"));
console.log(lib.coerceToType("55555555522222222222229999999999999992222222222225555555551164", 'bigint'));
console.log(lib.coerceToType());
