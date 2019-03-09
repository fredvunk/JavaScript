// Arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = [
    'apple',
    'banana',
    'orange',
    'pear'
];
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

//length
val = numbers.length;
// if is array
val = Array.isArray(numbers);
// single value
val = numbers[3];
// insert into
numbers[2] = 100;
// find index of value
val = numbers.indexOf(36);
// mutating arrays
// // to end
// numbers.push(250);
// // to front
// numbers.unshift(120);
// //take off from end
// numbers.pop();
// // front
// numbers.shift();
// //Splice values
// numbers.splice(1,1);
// // rEVERSE
// numbers.reverse();
//concatenate array
val = numbers.concat(numbers2);
// sorting
// val = fruit.sort();
// val = numbers.sort();
//
// //compare function
// val = numbers.sort(function(x, y){
//     return x-y;
// });
// //reverse sort
// val = numbers.sort(function(x, y){
//     return y -x;
// });

 //find
function under50(num){
    return num < 50;
}

val = numbers.find(under50);



console.log(numbers);
console.log(val);