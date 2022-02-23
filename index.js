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
 * @param {any value} value: function takes in any values as an input value 
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

 