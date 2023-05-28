const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

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

    localStorage.setItem(user.email, JSON.stringify(user)); // Store the user object with the email as the key in local storage
    populateUserList(); // Update the user list on the page

    showMessage('User added successfully', 'success');

    nameInput.value = ''; // Clear fields
    emailInput.value = '';
  }
}

function populateUserList() {
  userList.innerHTML = ''; // Clear the user list before populating it again

  for (let i = 0; i < localStorage.length; i++) {
    const email = localStorage.key(i);
    const user = JSON.parse(localStorage.getItem(email));

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${user.name} : ${user.email}`));
    userList.appendChild(li);
  }
}

function showMessage(message, className) {
  msg.textContent = message;
  msg.className = `msg ${className}`;

  setTimeout(() => {
    msg.textContent = '';
    msg.className = 'msg';
  }, 3000);
}
