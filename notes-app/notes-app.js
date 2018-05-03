const notes = [{
    title: 'Books I want to read',
    body: 'War and Peace, Tolstoy'
},{
    title: 'Movies I want to see',
    body: 'Black Panther'
},{
    title: 'Food I want to cook',
    body: 'Lamb tajine'
}
]

// event listener
document.querySelector('button').addEventListener('click', function(e) {
    // some fun things demonstrated 
    console.log(e);
    e.target.textContent ="Foobar!";
});

// add all items as Ps to wrapper
notes.forEach(function(item) {
    const newItem = document.createElement('p');
    newItem.textContent = `${item.title}: ${item.body}`;
    document.querySelector('#notes').appendChild(newItem);
});
