const firstName = 'William';
const lastName = 'John';
const age = 26;
const str = 'hello there fred';
const tags = 'web design, web development';
let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Fred ';
val += 'Hi';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping

val = 'that\'s awesome, I can\'t wait';

//Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

//indexOf()

val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt('2');

// substring()
val = firstName.substring(0, 4);

// get last char
val = firstName.charAt(firstName.length - 1);
// slice()
val = firstName.slice(0,5);
val = firstName.slice(-3);

//Splitt()
val = str.split(' ');
val = tags.split(',');

//replace()

val = str.replace('brad', 'fred');


//includes()

val = str.includes('Hello');


console.log(val);