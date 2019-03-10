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


console.log(birthday);