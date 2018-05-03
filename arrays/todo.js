// challenges

// create array w/ 5 todo items
const todo = ['Wash car', 'Wash dog', 'Buy soap', 'Mow lawn', 'Grade papers']
// say how many you have
console.log(`You have ${todo.length} todo items.`)
// print first and last items
console.log(todo[0])
console.log(todo[todo.length - 1])

// looping
todo.forEach(function(item, index) {
    const num = index + 1
    // console.log(index + ". " + item)
    console.log(`${num}. ${item}.`)
})
