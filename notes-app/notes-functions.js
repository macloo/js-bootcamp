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

// add notes to page from notes array - DOM stuff 
function writeNotes(notes) {
    const notesDiv = document.querySelector('#notes');
    // clear the div
    notesDiv.innerHTML = '';
    // add all items as Ps to the div
    notes.forEach(function(note) {
        const newItem = document.createElement('p');
        newItem.textContent = note;
        notesDiv.appendChild(newItem);
    });
}
