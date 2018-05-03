// section 3 lectures 18 & 19
// if you fail to use let for a variable that's inside a block,
// JS creates it as a global variable (!!!) - this is called a leaked global 

varOne = "apple"
if (true) {
    console.log(varOne)
    let varTwo = "orange"
}

// here is a scope problem - error
// ReferenceError: varTwo is not defined
console.log(varTwo)
// comment that line out to run the rest of this file

// local scope - defined inside a code block
// global scope - defined outside all code blocks

// we can access varOne out here or inside a code block
console.log(varOne)

// while we can use a global inside a block, we cannot change it
// except in the context of that block
if (true) {
    let varOne = "banana"
    console.log(varOne)
}
// outside, the original value of varOne has not changed
// but note - because I used let - it created a new LOCAL variable
console.log(varOne)
