// input (arguments), instructions, output (return value)

// here's one with no input or output,
// just one line of instructions
let greetUser = function () {
    console.log("Welcome, user!")
}

// run it
greetUser()

// above is first example in video; style of functions that I hate
// he says we can use return only once in a function
// it appears this was true of old languages but not new: https://softwareengineering.stackexchange.com/questions/118703/where-did-the-notion-of-one-return-only-come-from
// also https://stackoverflow.com/questions/36707/should-a-function-have-only-one-return-statement


let x = 16

// a function declaration
function doubleIt(foo) {
    let bar = foo * 2;
    return bar;
}
console.log(doubleIt(x));

// I hate these -
// a function expression
let double = function(foo) {
    let bar = foo * 2;
    return bar;
};
console.log(double(x));

/*
"The function declaration matches for cases when a regular function should be created. Regular means that you declare the function once and later invoke it in many different places."
https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/

*/
