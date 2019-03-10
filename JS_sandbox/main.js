// document.getElementById();

// console.log(document.getElementById('task-title'));
//
// //get things from element
// console.log(document.getElementById('task-title').id);

// Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'my List';
// document.getElementById('task-title').innerHTML = '<span style="color: red">Task List</span>';

// const taskTitle = document.getElementById('task-title');
//
// taskTitle.style.background = '#333';

// document.querySelector()
console.log(document.querySelector('#task-title'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'red';