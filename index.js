'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @returns 
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
 * @param (any value) value: FUnciton takes in any value as an input value
 * @returns (any value) value: Function returns the input values unchanged
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeof: function takes in any value as an argument and returns the data type of that value as a string
 * @param (any value) value: function takes in any values as an input value 
 * @returns (any value) value: function returns a string of the data type of the input value 
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
  * indexOf: function takes inputs of an array and any value as arguments and returns index of value in array
  * @param (any value) value: function takes an array and any value
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



/**
 * functionNameReplace:
 * @param
 * @returns
 * @edgecases
 * @constraints
 */