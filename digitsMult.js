"use strict";

function digitsMultip(number) {
    var sNumber = number.toString();
    var r = 1;
    for (var i = 0, len = sNumber.length; i < len; i++) {
        if (sNumber.charAt(i) != "0")
            r = r * parseInt(sNumber.charAt(i));
    }

    return r;
}
var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(digitsMultip(123405))

    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}