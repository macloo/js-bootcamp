const notes = [{
    title: 'Books I want to read',
    body: 'War and Peace, Tolstoy'
},{
    title: 'Books I have read',
    body: 'Jane Eyre, Brontë'
},{
    title: 'A book I might have read',
    body: 'Kafka on the Shore, Murakami'
},{
    title: 'Movies I want to see',
    body: 'Black Panther'
},{
    title: 'Food I want to cook',
    body: 'Lamb tajine'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function( note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
