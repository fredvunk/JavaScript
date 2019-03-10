const person = {
    firstName: 'Fred',
    lastName: 'Vunk',
    age: 30,
    email: 'fred@hot.ee',
    hobbies: ['music', 'gym'],
    address: {
        city: 'Tartu',
        state: 'Eesti'
    },
    getBirthYear: function () {
        return 2019 - this.age;
    }
}

let val;

const today = new Date();
let birthday = new Date('9-10-1982');
birthday = new Date('September 10 1982');



val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);

//test if undefined
//
// if(typeof id !== undefined){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('No ID');
// }



// if(id > 200){
//     console.log('OK');
// } else {
//     console.log('NOT OK');
// }

// IF ELSE
//
// const color = 'rd';
//
// if(color === 'red'){
//     console.log('Color is red');
// } else if(color === 'blue'){
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS

const name = 'Fred';
const age = 26;

// AND &&

if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 25) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||

if(age < 16 || age >65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registred for the race`);
}


const id = 100;
// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not ');
        break;
}

// console.log(greet());

// Function EXPRESSION
const square = function(x = 3){
    return x*x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTIOON EXPRESSIONS -
// IIFE's

// (function(){
//     console.log('IIFE Ran..');
// })();

// (function(name){
//     console.log('hello ' + name);
// })('brad');

// PROPERTY METHODS
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
        console.log('Delete Todo..');
    }


todo.add();
todo.edit(22);
todo.delete();