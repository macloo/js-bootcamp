// example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// .filter() always returns an array, even if empty

const words = ['destruction', 'elite', 'exuberant', 'limit', 'present', 'spray'];
const result = words.filter(word => word.length > 6);
console.log(result);

// +++++++++++++++++++++++++++++++++++++++++++++
// an array of objects - filter this array below
const todo = [{
        'task': 'Wash car',
        'priority': 2
    },
    {
        'task': 'Wash dog',
        'priority': 1
    },
    {
        'task': 'Buy dog food',
        'priority': 5
    },
    {
        'task': 'Mow lawn',
        'priority': 2
    },
    {
        'task': 'Buy washing cloths',
        'priority': 4
    },
    {
        'task': 'Grade papers',
        'priority': 1
    }];

// you can write the function separately - it will run on each item
// in the array when you filter
// here we get all items with priority of 1
function getPriority(item) {
  return item.priority === 1;
}

var priorities = todo.filter(getPriority);
console.log(priorities);
priorities.forEach(function(item) {
    console.log(item.task)
})

// now use .includes() to find desired text on which to filter
// here we get all items with "wash" in the task value
function getString(item) {
  return item.task.toLowerCase().includes("wash");
}

var washing = todo.filter(getString);
console.log(washing);
washing.forEach(function(item) {
    console.log(item.task)
})

// same thing, another way
const foo = todo.filter(item => item.task.toLowerCase().includes("wash"));
foo.forEach(function(item) {
    console.log(item.task)
})

// basically the same thing, another way
function filterListOfObjects(listName, propName, searchTerm) {
    return listName.filter(item => item[propName].toLowerCase().includes(searchTerm));
}
console.log(filterListOfObjects(todo, 'task', 'dog'))
