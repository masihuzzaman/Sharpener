// DOM Manipulation 

// console.dir(document.forms);
document.title = 'Sharpener Play Ground : DOM'

//GETELEMENTBYID
// console.log(document.getElementById('header-title')); 
var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
var header = document.getElementById('main-header');
// console.log(header);
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
console.log(headerTitle.innerHTML);
headerTitle.innerText = 'Masih';
headerTitle.textContent = 'Zaman';
headerTitle.innerHTML = '<h3>Sharpener</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';
header.style.borderBottom = 'solid 5px red';