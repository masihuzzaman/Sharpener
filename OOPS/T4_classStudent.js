class Student {
    name = "";
    constructor(name, roll_no) {
        this.name = name;
        this.roll_no = roll_no;
    }

}

let student1 = new Student("John", 2);
console.log(student1.name + " is assigned Roll No. " + student1.roll_no);
