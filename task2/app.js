const Task2Lib = {
    addValues: function (first = "Empty ", second = "Arguments") {
        try{
            if (typeof first === 'number' && typeof second === 'number' && !isNaN(first) && !isNaN(second)) {
                return first + second;
            } else {
                if (typeof first === 'string' && typeof second === 'string') {
                    return first + second;
                } else {
                    console.log("There is a problem with | addValues | Invalid arguments types.\n");
                    return 'Unsupported data types';
                }
            }
        } catch (e) {
            console.log("There is a problem with | AddValues |\n" + e)
        }
    },
    stringifyValue: function (value = "Empty Argument") {
        try {
            if (value === null || typeof value === 'undefined') {
                return "Unsupported value type: " + String(value);
            }
            if (typeof value === 'number' && isNaN(value)) {
                return "Unsupported value type: NaN";
            }
            return (typeof value === 'object' || Array.isArray(value)) ? JSON.stringify(value) : String(value);
        } catch (e) {
            console.log("There is a problem with | stringifyValue |\n" + e);
        }
    }
    ,
    invertBoolean: function (value = "SadEmptyBoolean") {
        if (typeof value !== 'boolean') {
            throw new Error('There is a problem with | invertBoolean |');
        }
        return !value;
    },
    convertToNumber: function (value ) {
        switch (typeof value){
            case "boolean":
                return value ? 1 : 0;
            case "string":
                const number = parseFloat(value);
                if (isNaN(number)) {
                    console.log('There is a problem with | convertToNumber | String value is not a number');
                    return value.length >= 1 ? 1 : 0;
                }
                return number;

            case "undefined":
                return 0;
            case 'number':
                if (isNaN(value)) {
                    throw new Error(`Its not possible to convert [ ${value} ] to number`);
                }
                return Number(value);
            default:
                return 'Unsupported type'
        }
    },
    coerceToType: function (value = 'SadEmptyValue', type = 'string') {
        switch (type) {
            case 'string':
                return String(value);
            case 'number':
                return this.convertToNumber(value);
            case 'boolean':
                return Boolean(value);
            case 'bigint':
                return BigInt(value);
            default:
                throw new Error(`Unsupported type for this value -> [ ${value} ]`);
        }
    }
};

module.exports = Task2Lib;
