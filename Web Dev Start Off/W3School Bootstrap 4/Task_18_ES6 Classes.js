


/* Create a constructor function Student which takes in first name, last name , roll number and Student's age to initialize the object
Complete the function printFullName() so that it prints the full name of the student object which invokes it.
Complete the function minorOrmajor() so that it
prints major if the student's age is above or equal to 18
prints minor if the student's age is below 18
Make 2 students objects.Ram and Yash to test everything
Yash's details: ('yash', 'prasad', 12, 27)
Ram's details: ('ram', 'prasad', 14, 15)
Invoke prinFullName and minorOrmajor to print Yash's and Ram's details.
 */


class Student {
    constructor(firstName, lastName, rollNumber, age) {
        //complete this function to initialize the object
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNumber = rollNumber;
        this.age = age;
    }

    printFullName() {
        //complete this function to print the full Name of the student object invoking the method
        const fullName = this.firstName + this.lastName;
        console.log(fullName);
    }

    minorOrMajor() {
        //If age greater than 18 print Major
        //if age less than 18 print Minor
        //Complete this functiond
        const ageStatus = this.age >= 18 ? 'Major' : 'Minor';
        console.log(ageStatus);
    }
}

function createNewStudents() {
    const ram = new Student('yash', 'prasad', 12, 27);
    const yash = new Student('ram', 'prasad', 14, 15);

    ram.printFullName();
    ram.minorOrMajor();
    yash.printFullName();
    yash.minorOrMajor();
}