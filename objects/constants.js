// we cannot reassign a const
// that is, we cannot assign a new value to a const as we can to let

const foobar = 'apple'
console.log(foobar)
// foobar = 'pear'
// console.log(foobar)
// TypeError: Assignment to constant variable.

// however, you can make an object a const and still change its properties
const person = {
    hair: 'brown',
    weight: 180
}
console.log(person.weight)
person.weight = 160
console.log(person.weight)
// no errors

// person = {}
// but that ^^^ does throw an error
