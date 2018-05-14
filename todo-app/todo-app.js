// refactoring
const todo = getStoredTodos();

// an object containing various filters
const filters = {
    searchText: '',
    hideCompleted: false
};

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
    const newItem = {
        id: uuidv4(),
        task: newTask,
        priority: 1,
        completed: false
    };
    todo.push(newItem);
    localStorage.setItem( 'todos', JSON.stringify(todo) );
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
