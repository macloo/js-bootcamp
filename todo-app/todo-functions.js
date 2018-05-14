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
        newItem.textContent = `${item.task}. Priority: ${item.priority}`;
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
