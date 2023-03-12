// Travesing the DOM
var itemList = document.querySelector('#items');
// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
// console.log(itemList.firstChild);

// //fistElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello1';

// //lastChild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello4';

// nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attribute
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

var items = document.querySelector('#items');

var newLi = document.createElement('li');
newLi.className = 'list-group-item';
var newLiText = document.createTextNode('Hello World');
newLi.appendChild(newLiText);


var ul = document.querySelector('#items')
var li = document.querySelector('li')

ul.insertBefore(newLi, li)
console.log(ul);
console.log(li);