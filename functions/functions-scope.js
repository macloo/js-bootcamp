// covered scope in blocks in "basics"
// now scope in functions
// although he didn't do much with this


function convertTemp(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    if (celsius <= 0) {
        let isFreezing = true;
    }
    console.log(isFreezing)
    // above throws ReferenceError: isFreezing is not defined
    // because we are outside the block
    return celsius;
}

console.log( convertTemp(30) )
