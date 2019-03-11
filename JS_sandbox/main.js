let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;

// Get children element nodes
val = list.children;
val = list.children[0];
list.children[1].textContent = 'hello';
val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

// get parent node
val = listItem.parentNode;
val = listItem.parentNode.parentNode;
// get next sibling
val = listItem.nextSibling;

console.log(val);
