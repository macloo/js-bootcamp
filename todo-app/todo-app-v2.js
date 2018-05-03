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
        task: 'Mow lawn',
        priority: 2,
        completed: true
    },{
        task: 'Grade papers',
        priority: 5,
        completed: false
    }];

// get all not-completed items
const incompleteItems = todo.filter(function(item) {
    return !item.completed;
});

// empty the div of all items
// document.querySelector('#todos').innerHTML = '';

// add a new p
const newPara = document.createElement('p');
newPara.textContent = `You have ${incompleteItems.length} uncompleted to-dos:`;
// put it inside #todos div, at the bottom
document.querySelector('#todos').appendChild(newPara);

// set up a UL element
const newList = document.createElement('ul');
document.querySelector('#todos').appendChild(newList);

// add all not-completed items as LIs to UL
incompleteItems.forEach(function(item) {
    const newItem = document.createElement('li');
    newItem.textContent = `${item.task}. Priority: ${item.priority}`;
    // add it inside the UL
    document.querySelector('ul').appendChild(newItem);
});

// event listeners
document.querySelector('#create').addEventListener('click', function(e) {
    console.log('Create button was clicked');
});
document.querySelector('#delete').addEventListener('click', function(e) {
    console.log('Delete button was clicked');
});
document.querySelector('#search').addEventListener('input', function(e) {
    console.log(e.target.value);
});
