// second object lesson :)

let myBook = {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    pubYear: 1949,
    pageCount: 326
}

let otherBook = {
    title: 'The Wind-Up Bird Chronicle',
    author: 'Haruki Murakami',
    pubYear: 1995,
    pageCount: 607
}

function getSummary(book) {
    console.log(`${book.author} wrote ${book.title} in ${book.pubYear}.`);
}

getSummary(otherBook);
getSummary(myBook);


// how to return an object
// +++++++++++++++++++++++
function getBookFacts(book) {
    return {
        summary: `${book.author} wrote ${book.title} in ${book.pubYear}.`,
        length: `${book.title} is ${book.pageCount} pages long.`
    }
}

let otherFacts = getBookFacts(otherBook);
let myFacts = getBookFacts(myBook);

console.log(otherFacts.length);
console.log(myFacts.summary);

// challenge: return an object
// +++++++++++++++++++++++++++
function getTemp(fahrenheit) {
    return {
        celsius: ((fahrenheit - 32) * 5 / 9).toFixed(2),
        kelvin: ((fahrenheit + 459.67) * 5 / 9).toFixed(2)
    }
}
let conv = getTemp(29);
console.log(conv.celsius);
console.log(conv.kelvin);
