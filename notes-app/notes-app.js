console.log('Hello, World!');

const p = document.querySelector('p');
console.log(p);
// note for students: won't work if script tag is in the head

p.remove();

// note that querySelector() finds only the first element of the type specified
// to find all:
const ps = document.querySelectorAll('p');
ps.forEach(function(p) {
    console.log(p.textContent);
    // write new text inside designated p element
    ps[0].textContent = "Hello, World!";
    // p.remove();
})

// add a new p
const newPara = document.createElement('p');
newPara.textContent = "This is my new paragraph.";
// put it inside #wrapper div, at the bottom
document.querySelector('#wrapper').appendChild(newPara);


/*
document.getElementById('item');
document.getElementsByClassName('item');
item.classList.add('new-class');
item.classList.remove('new-class');
// show/hide
item.style.display = 'none';
item.style.display = '';

item.prepend(someOtherItem);
item.before(someOtherItem);
item.append(someOtherItem);
item.after(someOtherItem);

item.replaceWith(someOtherItem);
// find the closest ancestor that matches a given selector - go up the DOM
item.closest('div');
*/
