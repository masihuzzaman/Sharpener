// DOM Manipulation 

// console.dir(document.forms);
document.title = 'Sharpener Play Ground : DOM'

//GETELEMENTBYID
// console.log(document.getElementById('header-title')); 
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// var header = document.getElementById('main-header');
// console.log(header);
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// console.log(headerTitle.innerHTML);
// headerTitle.innerText = 'Masih';
// headerTitle.textContent = 'Zaman';
// headerTitle.innerHTML = '<h3>Sharpener</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 5px red';

//GETELEMENTBYCLASSNAME
var li = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

//Gives error
// items.styel.backgroundColor = 'grey';

// for(var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
// }

// li[2].style.backgroundColor = 'grey';

// for(var i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = 'bold';
//     li[i].style.color = '#fff';  
//     li[i].style.backgroundColor = 'grey'
// }

//QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 10px #666';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

//QUERYSELECTORALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
    even[i].style.color = 'green';
}

