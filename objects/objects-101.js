// first object 

let myBook = {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    pubYear: 1949,
    pageCount: 326
}
console.log(myBook)
// returns
// { title: '1984', author: 'George Orwell', pageCount: 326 }
console.log(myBook.author)
// returns
// George Orwell
console.log(`${myBook.author} wrote ${myBook.title} in ${myBook.pubYear}.`)
// returns
// George Orwell wrote Nineteen Eighty-Four in 1949.
myBook.title = '1984'
console.log(`${myBook.author} wrote ${myBook.title} in ${myBook.pubYear}.`)

// challenge
// create a person object with name, age, location
// console.log this:  Bob is 21 and lives in Miami.
// change age, console.log again
