// an array of objects
const todo = [{
        task: 'Wash car',
        priority: 3,
        completed: false
    },{
        task: 'Wash dog',
        priority: 1,
        completed: true
    },{
        task: 'Buy soap',
        priority: 1,
        completed: false
    },{
        task: 'Buy books',
        priority: 4,
        completed: false
    },{
        task: 'Mow lawn',
        priority: 2,
        completed: true
    },{
        task: 'Grade papers',
        priority: 5,
        completed: false
    }];

// an object containing various filters
const filters = {
    searchText: '',
    hideCompleted: false
}

// main function
function writeTodos(filters, todo) {
    // retrieve all or only not-completed todo items based on filters value
    // this is changed for this version, in which checkbox was added
    // see event handler for '#hide-completed' 
    const visibleTodos = todo.filter(function (item) {
        // if hideCompleted is true, return only items NOT completed
        if (filters.hideCompleted) {
            return !item.completed;
        // otherwise, return all items - not hiding any
        } else {
            return item;
        }
    });
    // get all todo items that match the searchText filter (which will change)
    const filteredTodos = visibleTodos.filter(function (item) {
        return item.task
                   .toLowerCase()
                   .includes( filters.searchText.toLowerCase() );
    });
    // empty the div of all items
    document.querySelector('#todos').innerHTML = '';

    // set up a UL element
    const newList = document.createElement('ul');
    document.querySelector('#todos').appendChild(newList);

    // add all todo task items as LIs to UL
    filteredTodos.forEach(function(item) {
        const newItem = document.createElement('li');
        newItem.textContent = `${item.task}. Priority: ${item.priority}`;
        // add it inside the UL
        document.querySelector('ul').appendChild(newItem);
    });
}

// run function
writeTodos(filters, todo);

// event listeners

document.querySelector('#search').addEventListener('input', function(e) {
    // change value of a property in the filters object
    // e.target is the input-text field
    filters.searchText = e.target.value;
    writeTodos(filters, todo);
});

// write a new task and add it to array
document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newTask = e.target.elements.newTodo.value;
    const newItem = { task: newTask, priority: 1, completed: false };
    todo.push(newItem);
    // clear the field
    e.target.elements.newTodo.value = '';
    writeTodos(filters, todo);
});

// checkbox to hide or show completed items
document.querySelector('#hide-completed').addEventListener('change', function(e) {
    // console.log(e.target.checked);
    filters.hideCompleted = e.target.checked;
    writeTodos(filters, todo);
});
