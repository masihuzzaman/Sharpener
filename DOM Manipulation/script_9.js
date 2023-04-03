var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();


     // Get input value
    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('description').value;
 
    // Create new li element
    var li = document.createElement('li');
    // Add class to li
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" -- "));
    li.appendChild(document.createTextNode(newDescription));

    // Create del btn element
    var deletebtn = document.createElement('button');
    // Add class to deletebtn
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node to deletebtn
    deletebtn.appendChild(document.createTextNode('X'));
    // append deletebtn to li
    li.appendChild(deletebtn);

    // Create edit btn element
    var editbtn = document.createElement('button');
    // Add class to deletebtn
    editbtn.className = 'btn btn-sm float-right edit';
    // append text node to deletebtn
    editbtn.appendChild(document.createTextNode('Edit'));
    // append editbtn to li
    li.appendChild(editbtn);

    // append li to itemList
    itemList.appendChild(li);
 
}

// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// filter items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();

    // Get lis
    var items = itemList.getElementsByTagName('li');

    // Convert to an array and loop through each li element
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild;
        var itemDescription = item.childNodes[2];
     
        if(itemName.textContent.toLowerCase().indexOf(text) != -1
         || itemDescription.textContent.toLowerCase().indexOf(text) != -1
         ) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}