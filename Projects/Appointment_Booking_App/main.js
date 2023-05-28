const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Retrieve existing users from local storage or initialize an empty array
let users = JSON.parse(localStorage.getItem('users')) || [];

// Populate the user list with existing users on page load
populateUserList();

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '') {
    showMessage('Please enter all fields', 'error');
  } else {
    const user = {
      name: nameInput.value,
      email: emailInput.value,
    };

    users.push(user); // Add the new user to the users array
    localStorage.setItem('users', JSON.stringify(users)); // Store the updated array in local storage
    populateUserList(); // Update the user list on the page

    showMessage('User added successfully', 'success');

    nameInput.value = ''; // Clear fields
    emailInput.value = '';
  }
}

function populateUserList() {
  userList.innerHTML = ''; // Clear the user list before populating it again

  users.forEach((user) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${user.name} : ${user.email}`));
    userList.appendChild(li);
  });
}

function showMessage(message, className) {
  msg.textContent = message;
  msg.className = `msg ${className}`;

  setTimeout(() => {
    msg.textContent = '';
    msg.className = 'msg';
  }, 3000);
}
