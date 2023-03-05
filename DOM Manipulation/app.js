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

for(var i = 0; i < li.length; i++) {
    li[i].style.fontWeight = 'bold';
    li[i].style.color = '#fff';  
    li[i].style.backgroundColor = 'grey'
}
