// check for stored data and return an array
function getStoredData() {
    const notesJSON = localStorage.getItem('notes');
    if (notesJSON !== null) {
        return JSON.parse( notesJSON );
    } else {
        console.log("You have no notes.");
        return [];
    }
}

// find note by id and delete that object from the array
function removeNote(id) {
    // find object (note) for which id equals the argument
    const noteIndex = notes.findIndex(function(note) {
        return note.id === id;
    });
    if (noteIndex > -1) {
        // delete that one object
        notes.splice(noteIndex, 1);
    }
}

// add notes to page from notes array - DOM stuff
function writeNotes(notes) {
    const notesDiv = document.querySelector('#notes');
    // clear the div
    notesDiv.innerHTML = '';
    // add all items as Ps to the div
    notes.forEach(function(note) {
        const newItem = document.createElement('p');
        const span1 = document.createElement('span');
        const newButton = document.createElement('button');
        span1.textContent = note.body;
        newButton.textContent = "x";
        newButton.addEventListener('click', function() {
            removeNote(note.id);
            localStorage.setItem( 'notes', JSON.stringify(notes) );
            writeNotes(notes);
        });
        // construct the p and append it
        newItem.appendChild(newButton);
        newItem.appendChild(span1);
        notesDiv.appendChild(newItem);
    });
}
