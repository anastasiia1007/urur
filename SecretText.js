
function findMessage(data) {
    let message = '';

    for (let i = 0; i < data.length; i++) {
        let char = data[i];

        if (char.match(/[A-Z]/)) {
            message = message + char;
        }
    }

    return message;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."))

    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
