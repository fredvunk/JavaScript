const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);
// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent);
// keypress
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);


function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    // console.log(e.target.value);

    // heading.innerText = e.target.value;


    // // Get input value
    // console.log(taskInput.value);
}
