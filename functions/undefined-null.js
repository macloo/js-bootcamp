// example
let name
console.log(name)
// returns undefined

// how to use undefined
if (name === undefined) {
    console.log("Please provide a name")
} else {
    console.log("The name is " + name)
}

/*
we see undefined in cases where an argument was expected by a function,
but none was given, and also when a function lacks a return statement.
*/

// proper use of null
name = null
/*
don't assign a value of undefined, as JS will do that when no value
was assigned (value is missing). If you want to assign an empty value,
use null because then it's clear that the value was deliberately assigned.
*/
