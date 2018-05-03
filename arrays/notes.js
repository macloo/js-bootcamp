// array basics 
const notes = ['Note 1', 'Note 2', 'Note 3']
console.log(notes)
console.log(notes.length)

// note extensive list of methods here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log(notes[0])
// console.log(notes[-1])
// undefined

// ugh
console.log(notes[notes.length - 1])

// part 2 +++++++++++++++++++++++++++++++
// how to append to an array
notes.push('Another note')
console.log(notes[notes.length - 1])

// remove last item from array
const popped = notes.pop()
console.log(popped)

// remove first item from array
const shifted = notes.shift()
console.log(shifted)

// add an item to start of array
notes.unshift('New first note')
console.log(notes[0])

console.log(notes)

// insert or remove items at particular location in the array
// add new item at position 2
notes.splice(2, 0, "Note 2.5")
console.log(notes)
console.log(notes[2])
console.log("Index 1 is: " + notes[1])
// remove one item at position 1
notes.splice(1, 1)
console.log(notes)
console.log("Index 1 is: " + notes[1])
