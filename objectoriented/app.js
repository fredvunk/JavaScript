// Constructors and this keyword
//
// function Person(name, dob) {
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() -1970);
//     }
// }
//
// const brad = new Person('Brad', '9-10-1992');
// console.log(brad.calculateAge());
// Built in Constructors
// const john1 = {name: "John"};
// const john2 = new Object ({name: "john"});
// console.log(john2);
//
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');
// console.log(re2);
// Prototypes explained
// Object.prototype
// Person.prototype
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.calculateAge = function(){
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() -1970);
//     // }
// }

// Calculate aeg
//
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() -1970);
// }
//
// // Get full name
//
// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }
//
// // Gets married
//
// Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
// }
//
// const joe = new Person('Joe', 'Doe', '8-18-92');
// const mary = new Person('Mary', 'Doe', 'March 20 1990');
//
// console.log(joe);
// console.log(joe.calculateAge());
//
// console.log(joe.getFullName());
//
// mary.getsMarried('Smith');
// console.log(mary.getFullName());

// Prototypal inheritance

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//
// Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }
//
// const person1 = new Person('John', 'Doe');
// // console.log(person1.greeting());
//
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);
//
//     this.phone = phone;
//     this.membership = membership;
// }
//
// // Inherit the Person prototype methods
//
// Customer.prototype = Object.create(Person.prototype);
//
// // Make customer.prototype return  customer()
// Customer.prototype.constructor = Customer;
//
// // Create customer
//
// const customer1 = new Customer('Tom', 'Smith', '555-555', 'standard');
//
// console.log(customer1);
//
// // Customer greeting
// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }
//
// console.log(customer1.greeting());

// Using object.create

// const personPrototypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried: function(newLastName) {
//         this.lastName = newLastName;
//     }
// }
//
// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'joe';
// mary.age = 30;
//
// mary.getsMarried('oink');
//
// console.log(mary.greeting());
//
// const brad = Object.create(personPrototypes, {
//     firstName: {value: 'Brad'},
//     lastName: {value: 'Trav'},
//     age: {value: 30}
// });
//
// console.log(brad);