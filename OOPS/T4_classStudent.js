/* Create a class named 'Student' with String variable 'name' and integer variable 'roll_no'. Use Constructors to Assign the value of roll_no as '2' and that of name as "John" by creating an object of the class Student. */

class Student {
    name = "";
    constructor(name, roll_no) {
        this.name = name;
        this.roll_no = roll_no;
    }

}

let student1 = new Student("John", 2);
console.log(student1.name + " is assigned Roll No. " + student1.roll_no);
