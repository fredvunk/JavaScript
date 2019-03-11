// Create element
const li = document.createElement('li');

// adding Class
li.className = 'collection-item';

//add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title','new item');

// Create text node and append
li.appendChild(document.createTextNode('Heeeey'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Cursor to pointer
link.style.cursor = "crosshair";

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);



console.log(li);