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
// document.querySelector('button').addEventListener('click', function(e) {
    // some fun things demonstrated
    // console.log(e);
    // e.target.textContent ="Foobar!";
// });

document.querySelector('#create').addEventListener('click', function(e) {
    console.log("Create!");
});
document.querySelector('#delete').addEventListener('click', function(e) {
    console.log("Delete!");
});
document.querySelector('input').addEventListener('input', function(e) {
    console.log(e.target.value);
});

// select element by index if multiples of that type of element -
// document.querySelectorAll('button')[0].addEventListener();
// by ID - no need for .getElementById()
// document.querySelector('#unique-thing').addEventListener();
// by class -
// document.querySelectorAll('.many-things').addEventListener();

// add all items as Ps to wrapper
notes.forEach(function(item) {
    const newItem = document.createElement('p');
    newItem.textContent = `${item.title}: ${item.body}`;
    document.querySelector('#notes').appendChild(newItem);
});
