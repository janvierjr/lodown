'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @returns n/a
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Function takes in any value as an argument and returns that value unchanged.
 * @param { any value } value: Function takes in any value as an input value
 * @returns { any value } value: Function returns the input values unchanged
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeof: function takes in any value as an argument and returns the data type of that value as a string
 * @param { any value } value: function takes in any values as an input value 
 * @returns { string } value: function returns a string of the data type of the input value 
 */


function typeOf(value) {
    if (typeof value !== "object") {
        return typeof value;
    } else if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if (value === undefined) {
        return "undefined";
    } 
    return "object";

 }

 module.exports.typeOf = typeOf;

/**
 * first: function takes in two inputs of an array and a number and returns the first <number> items of <array>
 * @param { array }: function takes input of an array 
 * @param { number }: function takes input of a number that determines how many of the first <number> elements of the array to output to array
 * @returns { array }: returns the first <number> items of the array if the input number is greater than length of the array, the entire
 * array is returned; if the input number is less than zero an empty array is returned.
 * 
 */

 function first(array, number) {
    var result = [];
        if (!Array.isArray(array)) {
            return result;
             } else if (typeof number !== "number" || number === "undefined") {
                  return array[0];
             } else if (number > array.length) {
                  return array;
        } else {
            for (var i = 0; i < number; i++) {
            result.push(array[i]);
        }   
        return result;
    }
}

module.exports.first = first;


/**
 * last: function takes in two inputs of an array and a number and returns the last <number> items of <array>
 * @param { array }: function takes input of an array 
 * @param { number }: function takes input of a number that determines how many of the last <number> elements of the array to output to array
 * @returns { array }: returns the last <number> of the array if input number is greater than length of the array, the entire array is returned;
 * if the input number is less than zero an inpty array is returned.
 * 
 */



function last(array, number) {
    let result = [];
    if (!Array.isArray(array)) {
    return result;
        } else if (typeof number !== "number" || number === "undefined") {
            return array[array.length - 1];
        } else if (number > array.length) {
            return array;
    } else {
        for (let i = 0; i < number; i++) {
            result.unshift(array[number - i])
        }
    }
    return result;
}

module.exports.last = last;


 /**
  * indexOf: function takes inputs of an array and any value as arguments and returns index of value in array
  * @param { array }: function takes the input of an array to iterate through
  * @param { any value }: function takes the input of any value
  * @returns { any value }: function returns the index of value in array
  */

function indexOf(array, value) {
    let results = -1;
    for (var i = 0; i < array.length - 1; i++) {
        if (Array.isArray(value)) {
            results;
        } else if (array[i] === value) {
            results = i;
        } 
    }
    return results;
}

module.exports.indexOf = indexOf;

/**
 * contains: function takes two inputs of an array and value and returns true if value is in array
 * @param { array }: function takes the input of an array to iterate through
 * @param { any value }: function takes the input of any value
 * @returns { boolean }: function returns true if value is in array or false if not
 */

function contains(array, value) {
    for (var i = 0; i < array.length; i++) {
        return (array.includes(value) ? true : false);
    }
}

module.exports.contains = contains;

/**
 * each: function that takes in a collection and action as arguments to determines whether collection is an Array or Object
 * @param { array or object } collection: function takes the input of an array or an object to iterate through
 * @param { Function }: the function to be applied to each value in the collection
 * @returns requires function call, no returns
 */

 function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;


/**
 * unique: function takes in arguments of an array to remove duplicate values and return a new array
 * @param { array }: function takes the input of an array to iterate through
 * @returns { array }: returns a new array without duplicate values
 */

function unique(array) {
    let newArray = [];
    for (var i = 0; i < array.length; i++) {
        if(newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

module.exports.unique = unique;


/**
 * filter: function takes in two arguments of an array and a tester function. Filter returns a new array of items from the input array that return 
 * true when passed into the tester function.
 * @param { array }: function takes the input of an array to iterate through
 * @param { Function }: The tester function to be applied to each item in the collection
 * @returns { array }: returns a new array of items from the input array that return true when passed into the tester function.
 */

 function filter(array, func) {
    let newArray = [];
    for (var i = 0; i < array.length; i++) {
        let element = array[i];
        if (func(element, i, array) == true) {
            newArray.push(element);
        }
    }
    return newArray;
}

module.exports.filter = filter;


/**
 * reject: function takes in two arguments of an array and a tester function. Reject returns a new array of items from the input array that return
 * false when passed into the tester function.
 * @param { array }: function takes the input of an array to iterate through
 * @param { Function }: The test function to be applied to each item in the collection
 * @returns { array }: returns a new array of items from the input array that return false when passed into the tester function. 
 */

 function reject(array, func) {
    let newArray = [];
    for (var i = 0; i < array.length; i++) {
        let element = array[i];
        if (func(element, i, array) !== true) {
            newArray.push(element);
        }
    }
    return newArray;
}

module.exports.reject = reject;


/**
 * partition: function takes in two arguments of an array and a tester function which returns 2 subarrays: 1 with truthy items and 1 with falsy items
 * @param { array }: function takes the input of an array to iterate through
 * @param { Function }: The tester function to be applied to each item in the collection
 * @returns { array }: returns 2 subarrays: 1 subarray for items in which the tester fuction evaluates array items as truthy and 1 subarray for array items evaluated as falsy.
 */

function partition(array, func) {
    let result = [[],[]];
        for (let i = 0; i < array.length; i++) {
            var collection = func(array[i], i, array);
            if (!!collection) {
                result[0].push(array[i]);
            } else {
                result[1].push(array[i]);
            }
        }
    return result;
}

module.exports.partition = partition;

/**
 * map: iterates through an input collection and passes each item into a callback function. Map returns a new array populated by the return values of each function call.
 * @param { array or object } collection: function takes the input of an array or object to iterate through
 * @param { Function }: A callback function to be applied to each item in the collection
 * @returns { array }: returns a new array populated with the results of each callback function call.
 */

function map(collection, func) {
    let mapped = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            let element = collection[i];
            var result = func(element, i, collection); // invoke the callback function, passing in the current valueof the array, the current index, and the array itself
            mapped.push(result);
        }
    } else {  // else it's an object
        for (let key in collection) {
            mapped.push(func(collection[key], key, collection));
        }
    }
    return mapped;
}

module.exports.map = map;

/**
 * pluck: function takes in an array of objects and an object property to return an array of every value of the input object property for every object from input array;
 * @param { array }: function takes the input of an array of objects to iterate through
 * @param { object property }: an object property/key from array of objects
 * @returns { array }: returns an array containing every value of the input property for every object from input array 
 */

function pluck(array, key) {
    for (let i = 0; i < array.length; i++) {
        var output = _.map(array, function(object) {
            for (key in object) {
                return object[key];
            }
        });
    }
    return output;
}

module.exports.pluck = pluck;

/**
 * every: function takes in arguments of a collection and a tester function. Every returns true if ALL items of the input collection are evaluated as true by the input tester function.
 * @param { array or object } collection: function takes the input of an array or object to iterate through
 * @param { Function }: The tester function to be applied to each value in the collection
 * @returns { boolean }: returns true if the tester function evaluates All items in collection to be true.
 */

function every(collection, func) {
    // determine if func is defined
    if (func === undefined) {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) { // if the current value in the array is FALSY
                    return false;
                } 
            } 
        } else { 
            for (let key in collection) {
                if (!collection[key]) {
                    return false;
                }
            } 
        }

    } else {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                let element = collection[i];
                if (func(element, i, collection) === false) {
                    return false;
                }
            }
        } else {
            for (let key in collection) {
                if(!collection[key]) {
                    return false;
                }
            }
        }
    }
    return true;
}

module.exports.every = every;

/**
* some: function takes in arguments of a collection and a function and returns true if ANY values in collection pass input function evaluation
 * @param {array or object} collection: function takes the input of an array or object to iterate through
 * @param {Function} action: The Function to be applied to each value in the collection
 * @returns {boolean} value: returns true if function evaluates ANY element in collection to be true
 */

function some(collection, func) {
        if (func === undefined) {
            if (Array.isArray(collection)) {
                for (let i = 0; i < collection.length; i++) {
                    if (collection[i]) { // if the current value in the array is FALSY
                        return true;
                    } 
                } 
            } else { 
                for (let key in collection) {
                    if (collection[key]) {
                        return false;
                    }
                } 
            }
    
     } else {
         if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                let element = collection[i];
                if (func(element, i, collection) === true) {
                    return true;
                }
            }
        } else {
            for (let key in collection) {
                if(collection[key]) {
                    return true;
                }
            }
        }
    }
    return false;
}

module.exports.some = some;

/**
 * reduce: function takes the arguments an array, a function, and a seed (initial state of reduction). Reduce iterates over an array and accumulates a signle return value.
 * @param { array }: function takes the input of an array to iterate through
 * @param { Function }: The Function to be applied to each value in the collection will take in an accumulator, element, index, and/or array.
 * @param { seed } any value: the inital state/value of the reduction
 * @returns { any value }: returns a single accumulated value resulting from each Function call
 */

function reduce(array, func, seed) {
    // create accumulator variable
    let accumulator;
    if (seed === undefined) {
        accumulator = array[0];
        for (let i = 1; i < array.length; i++) {
            accumulator = func(accumulator, array[i], i, array);
        }
    } else {
        accumulator = seed;
        for (let i = 0; i < array.length; i++) {
            accumulator = func(accumulator, array[i], i, array);
        }
    }
    return accumulator;
}

module.exports.reduce = reduce;


 /**
 * extend: function takes in mulitple objects as arguments and returns the destination object that includes a copy of the contents of the other parameter objects
 * @param { object }: function takes the input of first parameter object as destination object
 * @param {...objects}: function takes in additional input objects whose contents are copied into the destination/first parameter object
 * @returns { object }: returns an object that includes a copy of the contents from the other parameter objects
 */


function extend(object, ...inputs) {
    // similar conceptually the Object.assign from lecture - think ES6, with Spread operator... if console.log(inputs); =>. [{a: 1}, {b: 2}, {c: 3}];
    var newObject = {};
        for (let i = 0; i < inputs.length; i++) {
            newObject = Object.assign(object, inputs[i]);
        }
    return newObject;
}

module.exports.extend = extend;