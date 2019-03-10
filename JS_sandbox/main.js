// // CONST & LET
// let name = 'John';
// let test;
//
// name = 'jack';
//
// const person = {
//     name: 'John',
//     age: 33
// };
//
// person.name = 'jack';
// console.log(person);

// Arrow functions

// function sayHello(){
//     console.log('hello');
// }
// sayHello();

// const sayHello = name =>
//     console.log('Hello ' + name);
// const fruits = ['apples', 'oranges', 'grapes'];
// FOREACH ///////////////////

// fruits.forEach((fruit, index) => {
//     console.log(fruit);
// });
// MAP ///////////////////////////////
// const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase());
//
// console.log(singleFruit);

// // FILTER ////////////////////////////
// const people = [
//     {id: 1, name: 'karen'},
//     {id: 2, name: 'karen2'},
//     {id: 3, name: 'karen3'}
// ];
//
// const people2 = people.filter(person => person.id !== 2);
// console.log(people2);

// SPREAD ...
// const arr = [1,2,3];
// const arr2 = [...arr, 4];
//
// const person = {
//     name: 'Brad',
//     age: 36
// }
//
// const newPerson = {
//     ...person,
//     email: 'brad@gmail.com'
// }
//
// console.log(newPerson);

// DESTRUCTING
// const profile = {
//     name: 'John dough',
//     address: {
//         street: '40 main st',
//         city: 'tartu'
//     },
//     hobbies: ['movies', 'music']
// };
//
// const { name, address, hobbies } = profile;
//
// console.log(name, address, hobbies[0]);

// CLASSES
//
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     greet() {
//         return `Hello, my name is ${this.name} and I am {this.age}`;
//     }
// }
//
// const person1 = new Person('Joke');
// const person2 = new Person('sara');
//
// console.log(person1.greet() + ' ' + person2.greet());
//
// // SUBCLASSES
// class Customer extends Person {
//     constructor(name, age, balance) {
//         super(name, age);
//         this.balance = balance;
//     }
//
//     info() {
//         return `${this.name} owes ${this.balance}`;
//     }
// }
//
// const customer1 = new Customer('Krissu, 32, 300');
//
// console.log(customer1.info());

// MODULES
// file 1 (file1.js)
export const name = 'Krissu';

export default Person;

// file 2 (file2.js)
import { name } from './file1';

import Person from './file1';

console.log(name);