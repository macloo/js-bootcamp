// for-loops only, with and without an array

const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5', 'Note 6']
console.log(notes)
console.log(notes.length)

// callback function - that is, passing a function into a function
notes.forEach(function(item, index) {
    console.log(item, index)
})

// code block, for a for-loop
for (let i=0; i<5; i++) {
    console.log(i)
}

// re-create the forEach functionality
for (let i=0; i<notes.length; i++) {
    console.log(notes[i], i)
}

// reverse-loop over an array, from last item to first item
for (let i=notes.length - 1; i>=0; i--) {
    console.log(notes[i])
}
