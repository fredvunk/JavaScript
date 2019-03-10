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

// WHILE LOOP

// let i = 0;
//
// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }

// DO WHILE

// let i = 100;
//
// do {
//     console.log('Numbers ' + i);
//     i++;
// }
//
// while(i < 10);

// LOOP TROUGH ARRAY
// const cars = ['Ford', 'Toyota', 'honda', 'BMW'];

// for(let i = 0; i < cars.length; i++) {
//  console.log(cars[i]);
// }
//
// // FOR EACH
// const cars = ['Ford', 'Toyota', 'honda', 'BMW'];
//
// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// MAP

// const users = [
//     {id:1, name:'John'},
//     {id: 2, name: 'Cara'},
//     {id: 3, name: 'Joe'},
//     {id: 4, name: 'Joeeee'}
// ];
//
// const ids = users.map(function(user){
//     return user.id;
// });
//
// console.log(ids);

// FOR IN LOOP

const user = {
    firstName: 'Fred',
    lastName: 'okey',
    age: 26
}
for(let x in user){
    console.log(`${x} : ${user[x]}`);
}