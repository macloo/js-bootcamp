// deleted hard-coded notes; now using localStorage, lesson 63
let notes = [];

// check for stored data
const notesJSON = localStorage.getItem('notes');
if (notesJSON !== null) {
    notes = JSON.parse( notesJSON );
    writeNotes(notes);
} else {
    console.log("You have no notes.");
}

document.querySelector('#note-form').addEventListener('submit', function(e) {
    e.preventDefault();
    notes.push(e.target.elements.newNote.value);
    // clear the field
    e.target.elements.newNote.value = '';
    localStorage.setItem( 'notes', JSON.stringify(notes) );
    writeNotes(notes);
});

// new event listener - for select menu
document.querySelector('#sort-by').addEventListener('change', function(e) {
    console.log(e.target.value);
});

// get notes from localStorage and add to page
function writeNotes(notes) {
    const notesDiv = document.querySelector('#notes');
    // clear the div
    notesDiv.innerHTML = '';
    // add all items as Ps to the div
    notes.forEach(function(note) {
        const newItem = document.createElement('p');
        // newItem.textContent = `${item.title}: ${item.body}`;
        newItem.textContent = note;
        notesDiv.appendChild(newItem);
    });
}
