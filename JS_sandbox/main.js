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

val = person;
// specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'Joe', age: 22},
    {name: 'joke', age: 23},
    {name: 'jane', age: 24}
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}