/* Implement the class User.
Every time a new user registers, keep a count of number of registered users.
At any given point of time if we invoke printNumberOfUsers ,the number of users should get printed .
Complete the coding puzzle. It is very easy.


Hint - You just have to use static variables */


class User {

    //initialize a  static variable
    static count = 0;

    constructor(username, email, password) {
        //Complete the constructor function and
        //  also keep a count of total users created
        this.username = username;
        this.email = email;
        this.password = password;
        User.count++;
    }
    printNumberOfUsers() {
        //console log the total number of users in the same format as in output
        console.log(`currentnumberofusers = ${User.count}`);

    }
}

function createNewStudents() {
    const yash = new User("yash", "yash@gmail.com", '100000xbasbcjsa');
    yash.printNumberOfUsers()
    const user2 = new User("vaibhav", "vaibhav@gmail.com", '2cs0');
    user2.printNumberOfUsers()
    yash.printNumberOfUsers()

}