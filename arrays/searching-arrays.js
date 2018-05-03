// finding items in an array

const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5', 'Note 6']
console.log(notes)

let index = notes.indexOf('Note 3')
console.log('Position of "Note 3": ' + index)

// when would you use this? Maybe with search & replace. Could use
// splice with the returned index to replace one item in the array:

index = notes.indexOf('Note 2')
notes.splice(index, 1, "-- ITEM TWO--")
console.log(notes)

// an array of objects - searching this array below
const todo = [{
        'task': 'Wash car',
        'priority': 2
    },
    {
        'task': 'Wash dog',
        'priority': 1
    },
    {
        'task': 'Buy soap',
        'priority': 5
    },
    {
        'task': 'Mow lawn',
        'priority': 2
    },
    {
        'task': 'Grade papers',
        'priority': 5
    }];

// 1. searching in an array of objects - different
index = todo.findIndex(function(item, index) {
    console.log(item.task)
    return item.priority === 5
})
console.log(`The index is ${index}, and the task is "${todo[index].task}"`)
// NOTE it only finds the first one, not all of them
// it stops looking once one has been found

// 2. searching in an array of objects - another way
// now get the entire object easily
const object = todo.find(function(item, index) {
    console.log(item.task)
    return item.priority === 5
})
console.log(object)
// NOTE this also only finds the first one
