// much refactoring, lesson 64
const notes = getStoredData();

writeNotes(notes);

// write a new note on form submit
document.querySelector('#note-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // each note is an object; uuidv4() comes from script attached to index.html
    notes.push({
        id: uuidv4(),
        body: e.target.elements.newNote.value
    });
    // clear the field
    e.target.elements.newNote.value = '';
    localStorage.setItem( 'notes', JSON.stringify(notes) );
    writeNotes(notes);
});

// event listener for select menu
document.querySelector('#sort-by').addEventListener('change', function(e) {
    console.log(e.target.value);
});
