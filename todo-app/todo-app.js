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
        task: 'Buy food',
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

// add a new p
const newPara = document.createElement('p');
newPara.textContent = `You have ${incompleteItems.length} to-dos left.`;
// put it inside #wrapper div, at the bottom
document.querySelector('#wrapper').appendChild(newPara);

// set up a UL element
const newList = document.createElement('ul');
document.querySelector('#wrapper').appendChild(newList);

// add all not-completed items as LIs to UL
incompleteItems.forEach(function(item) {
    const newItem = document.createElement('li');
    newItem.textContent = `${item.task}. Priority: ${item.priority}`;
    document.querySelector('ul').appendChild(newItem);
});

// select all p elements, store in ps
// const ps = document.querySelectorAll('p');

// loop over p's and remove any containing "the"
// ps.forEach(function(p) {
//     if ( p.textContent.toLowerCase().includes("the") ) {
//         p.remove();
//     }
// });
