// strings, numbers, and now - Booleans
// true or false

let isFreezing = false
console.log(isFreezing)

// operators
// ===
// !==
// etc.

let temp = 29
isFreezing = temp <= 32
console.log(isFreezing)

// challenge
// age: are you a child (12 and under) or a senior (65 and up)?

let age = 50
let isChild = age <= 12
let isSenior = age >= 65
console.log('Child?', isChild)
console.log('Senior?', isSenior)

// introducing if-statements

if (true) {
    // code block
}

temp = 90
isFreezing = temp <= 32
if (isFreezing) {
    console.log("It is freezing outside.")
} else if (temp > 95) {
    console.log("It is too hot outside!")
} else {
    console.log("It is not freezing outside.")
}

// challenge: use previous age/child/senior in an if-statement
// he saves else and else if for the next lesson ...
