// covers Math also
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number


let num = 321.9162
console.log( num.toFixed(2) )

// that rounds up; use Math to round etc.
console.log( Math.round(num) )
console.log( Math.floor(num) )
console.log( Math.ceil(num) )

/*
unlike .toFixed(), most of the number methods require Number ("the Number constructor") as the var on which method acts
*/

num = 'one'
console.log( Number.isNaN(num) )

// Math https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
/*
remember to tell them that Math.random() returns a number
between 0 and 1, which is why we:
multiply * a whole number (to get max) and
add 1 to eliminate 0 as a possible returned value and
wrap it in Math.floor() to eliminate decimals
*/

// roll a die, 1-6
function generateRandom() {
    let random = Math.floor( Math.random() * 6 ) + 1
    console.log( random )
}
console.log("Random:")

for (let i=0; i < 12; i++) {
    generateRandom()
}

// challenge - guess the number
