// deleting a lot of old code here, adding a form
const notes = [{
    title: 'Books I want to read',
    body: 'War and Peace, Tolstoy'
},{
    title: 'Movies I want to see',
    body: 'Black Panther'
},{
    title: 'Food I want to cook',
    body: 'Lamb tajine'
}]

document.querySelector('#note-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.elements.newNote.value);
    // clear the field
    e.target.elements.newNote.value = '';
});

// new event listener - for select menu
document.querySelector('#sort-by').addEventListener('change', function(e) {
    console.log(e.target.value);
});

// add all items as Ps to wrapper
notes.forEach(function(item) {
    const newItem = document.createElement('p');
    newItem.textContent = `${item.title}: ${item.body}`;
    document.querySelector('#notes').appendChild(newItem);
});

// basics of localStorage
// create
localStorage.setItem('foobar', 'My darling foo!');
// read
console.log(localStorage.getItem('foobar'));
// update
localStorage.setItem('foobar', 'No more bars?');
console.log(localStorage.getItem('foobar'));
// delete
localStorage.removeItem('foobar');
console.log(localStorage.getItem('foobar'));
