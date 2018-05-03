console.log("Hi, I'm the first version.");

// select all p elements, store in ps
const ps = document.querySelectorAll('p');

// loop over p's and remove any containing "the"
ps.forEach(function(p) {
    if ( p.textContent.toLowerCase().includes("the") ) {
        p.remove();
    }
});
