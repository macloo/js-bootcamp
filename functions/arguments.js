// example of arguments
function divideNumbers(a, b) {
    let first = a / b
    let second = b / a
    return "a divided by b: " + first + "\nb divided by a: " + second
}

console.log( divideNumbers(200, 10) )

// number of arguments: 0, 1, 2 or more

// assign default values - optional
function playerAndScore(name = "Anonymous", score = 0) {
    return "Name: " + name + ", Score: " + score
}

console.log( playerAndScore() )
console.log( playerAndScore("Mindy") )
console.log( playerAndScore(500) )
console.log( playerAndScore(null, 800) )

// challenge: a tip calculator, with default tip of .2
