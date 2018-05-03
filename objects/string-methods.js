// built-in methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// note list on left side of that page - all string methods

// length property of a string - not a method 
let name = 'Mary Poppins';
console.log(name.length);

// uppercase - string method - pay attention to camelCase
console.log( name.toUpperCase() );
// note, we did not change the value by doing that
console.log(name);

// includes - string method
let password = 'abcpassword123';
console.log( password.includes('password') )

// trim - string method
name = '    Han Solo        ';
console.log(name + "!!!");
console.log( name.trim() + "!!!" );
