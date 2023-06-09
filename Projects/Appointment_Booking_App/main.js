const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const user = {
      name: nameInput.value,
      email: emailInput.value,
    };

    // Create del btn element
    const deletebtn = document.createElement("button");
    // Create edit btn element
    const editbtn = document.createElement("button");

    // append text node to deletebtn
    deletebtn.appendChild(document.createTextNode("Delete"));
    // append text node to editbtn
    editbtn.appendChild(document.createTextNode("Edit"));

    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${user.name} : ${user.email}`));
    li.appendChild(deletebtn);
    li.appendChild(editbtn);

    deletebtn.addEventListener("click", function (e) {
      const li = e.target.parentElement;
      const email = user.email;

      userList.removeChild(li);
      localStorage.removeItem(email);

      // place the name and email to edit
      nameInput.value = user.name;
      emailInput.value = user.email;
    });

    editbtn.addEventListener("click", function (e) {
      const li = e.target.parentElement;
      const email = user.email;

      userList.removeChild(li);
      localStorage.removeItem(email);

      // place the name and email to edit
      nameInput.value = user.name;
      emailInput.value = user.email;
    });

    // Store User Information as an Object
    localStorage.setItem(user.email, JSON.stringify(user));
    userList.appendChild(li);

    // // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
