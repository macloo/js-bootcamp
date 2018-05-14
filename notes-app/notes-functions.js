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
        const span1 = document.createElement('span');
        const newButton = document.createElement('button');
        span1.textContent = note;
        newButton.textContent = "x";
        // construct the p and append it
        newItem.appendChild(newButton);
        newItem.appendChild(span1);
        notesDiv.appendChild(newItem);
    });
}
