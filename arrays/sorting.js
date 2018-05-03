// array.sort() sorts the array in place - reorders the items
const months = ['Jan', 'Feb', 'March', 'April'];
months.sort();
console.log(months);
// recall that when you change the order, you change all the indexes

// sorting objects according to values of their properties
// .sort() takes an optional comparison function -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// the following 3 options will worl with any JS array
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
// option 1 - sort by value - compares value for each object and
// orders objects from lowest to highest
items.sort(function (a, b) {
    return a.value - b.value;
});
console.log('\nSort by value:');
console.log(items);
// option 2 - orders from highest to lowest, reverse
items.sort(function (a, b) {
    return b.value - a.value;
});
console.log('\nSort by value, reversed:');
console.log(items);
// option 3 - sort alphabetically on the name values
items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } else {
        return 0;
    }
});
console.log('\nSort alphabetically, by name:');
console.log(items);
// we can also use the 1, -1, 0 pattern to sort by other values, such as
// "completed" and "not completed" - just return 1 for the
// value you want at the top, and -1 for the lower value.
