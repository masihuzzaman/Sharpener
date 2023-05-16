const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const user = {
            name: nameInput.value,
            email: emailInput.value
        };

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${user.name} : ${user.email}`));

        // Store User Information as an Object
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}