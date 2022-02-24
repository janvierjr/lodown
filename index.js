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
 * @param {any value} value: Function takes in any value as an input value
 * @returns {any value} value: Function returns the input values unchanged
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeof: function takes in any value as an argument and returns the data type of that value as a string
 * @param {any value} value: function takes in any values as an input value 
 * @returns {string} value: function returns a string of the data type of the input value 
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
 * @param {array} value: function determines if array is an array and takes input of an array 
 * @param {number} value: function determines if number is a number or given and takes input of a number
 * @returns {any value} value: returns the first value of the array
 * @returns {array} value: returns the entire array if number is greater than length of array
 * @returns {array} value: returns a new array of the argument values that equal the argument number index starting from beginning of array
 * @edgecases returns the entire array if number is greater than length of array
 * @edgecases returns an empty list if number is less than 0
 * @constraints n/a
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
 * @param {array} value: function determines if array is an array and takes input of an array 
 * @param {number} value: function determines if number is a number or given and takes input of a number
 * @returns {any value} value: returns the last value of the array
 * @returns {array} value: returns the entire array if number is greater than length of array
 * @returns {array} value: returns a new array of the argument values that equal the argument number index starting from end of array
 * @edgecases returns the entire array if number is greater than length of array
 * @edgecases returns an empty list if number is less than 0
 * @constraints n/a
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
  * @param {array} value: function takes the input of an array
  * @param {any value} value: function takes the input of any value
  * @returns (any value) value: function returns the index of value in array
  * @edgecases value: if value isn't in array function returns -1
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
 * @param (any value) value: input of array and value
 * @returns value: function returns true if value is in array or false if not
 * @edgecases value: if no value is given, returns false
 * @constraints value: function must use ternary operator  
 */

function contains(array, value) {
    for (var i = 0; i < array.length; i++) {
        return (array.includes(value) ? true : false);
    }
}

module.exports.contains = contains;

/**
 * each: function that takes in a collection and action as arguments to determines whether colleciton is an Array or Object
 * @param (any value) value: input of array or object and a callback function
 * @returns requires function call, no returns
 * @edgecases n/a
 * @constraints n/a
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
 * @param (any value) value: input of array
 * @returns (any value) value: returns a new array without duplicate values
 * @edgecases n/a
 * @constraints n/a
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
 * filter: function takes in two arguments of an array and a function and returns a new array of elements where function returns turn
 * @param (any value) value: inputs of an array and a function
 * @returns (any value) value: returns a new array of elements evaluated as true of the input function 
 * @edgecases n/a
 * @constraints n/a
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
 * reject: function takes in two arguments of an array and a function and returns a new array of elements where function returns tur
 * @param (any value) value: inputs of an array and a function
 * @returns (any value) value: returns a new array of elements evaluated as false of the input function 
 * @edgecases n/a
 * @constraints n/a
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
 * functionNameReplace:
 * @param
 * @returns
 * @edgecases
 * @constraints
 */



/**
 * functionNameReplace:
 * @param
 * @returns
 * @edgecases
 * @constraints
 */



/**
 * functionNameReplace:
 * @param
 * @returns
 * @edgecases
 * @constraints
 */




/**
 * functionNameReplace:
 * @param
 * @returns
 * @edgecases
 * @constraints
 */



/**
 * functionNameReplace:
 * @param
 * @returns
 * @edgecases
 * @constraints
 */



/**
 * functionNameReplace:
 * @param
 * @returns
 * @edgecases
 * @constraints
 */