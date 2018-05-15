// check for stored data
function getStoredTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON !== null) {
        return JSON.parse( todosJSON );
    } else {
        console.log("You have no to-dos.");
        return [];
    }
}

// retrieve all or only not-completed todo items based on filters value
function getVisibleTodos(filters, todo) {
    return todo.filter(function (item) {
        // if hideCompleted is true, return only items NOT completed
        if (filters.hideCompleted) {
            return !item.completed;
        // otherwise, return all items - not hiding any
        } else {
            return item;
        }
    });
}

// get all todo items that match the searchText filter (which will change)
function getSearchMatches(filters, visibleTodos) {
    return visibleTodos.filter(function (item) {
        return item.task
                   .toLowerCase()
                   .includes( filters.searchText.toLowerCase() );
    });
}

// find todo by id and delete that object from the array
function removeTodo(id) {
    // find object (note) for which id equals the argument
    const todoIndex = todo.findIndex(function(item) {
        return item.id === id;
    });
    if (todoIndex > -1) {
        // delete that one object
        todo.splice(todoIndex, 1);
    }
}

// write into the DOM
function writeTodosToHTML(filteredTodos) {
    // empty the div of all items
    document.querySelector('#todos').innerHTML = '';
    // set up a UL element
    const newList = document.createElement('ul');
    document.querySelector('#todos').appendChild(newList);
    // add all todo task items as LIs to UL
    filteredTodos.forEach(function(item) {
        const newItem = document.createElement('li');
        const newBox = document.createElement('input');
        const newSpan = document.createElement('span');
        const newButton = document.createElement('button');
        newBox.setAttribute('type', 'checkbox');
        newSpan.textContent = `${item.task} Priority: ${item.priority}`;
        newButton.textContent = "x";
        newButton.addEventListener('click', function() {
            removeTodo(item.id);
            localStorage.setItem( 'todos', JSON.stringify(todo) );
            writeTodos(filters, todo);
        });
        // build the LI's contents
        newItem.append(newBox);
        newItem.append(newSpan);
        newItem.append(newButton);
        // add it inside the UL
        document.querySelector('ul').appendChild(newItem);
    });
}

// main function
function writeTodos(filters, todo) {
    // retrieve all or only not-completed todo items based on filters value
    const visibleTodos = getVisibleTodos(filters, todo);
    // get all todo items that match the searchText filter (which will change)
    const filteredTodos = getSearchMatches(filters, visibleTodos);
    // write into the DOM
    writeTodosToHTML(filteredTodos);
}
