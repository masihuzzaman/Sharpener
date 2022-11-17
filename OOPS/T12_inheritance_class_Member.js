class Member {
    constructor(Name, Age, PhoneNumber, Address, Salary) {
        this.name = Name;
        this.age = Age;
        this.number = PhoneNumber;
        this.address = Address;
        this.salary = Salary;
    }
    printSalary() {
        console.log(this.salary);
    }
}

class Employee extends Member {
    constructor(Specialization, Name, Age, PhoneNumber, Address, Salary) {
        super(Name, Age, PhoneNumber, Address, Salary);
        this.specialization = Specialization;
    }
    printDetail() {
        console.log("The details of the Employee - " + 
        this.name + " are as following :" + 
        "\n Specilization : " + this.specialization + 
        "\n Name : " + this.name + 
        "\n Age : " + this.age + 
        "\n Phone Number " + this.number + 
        "\n Address : " + this.address + 
        "\n Salary : " + this.salary);
    }
}

class Manager extends Member {
    constructor(Department, Name, Age, PhoneNumber, Address, Salary) {
        super(Name, Age, PhoneNumber, Address, Salary);
        this.department = Department;
    }
    printDetail() {
        console.log("The details of the Manager - " + 
        this.name + " are as following :" + 
        "\n Department : " + this.department + 
        "\n Name : " + this.name + 
        "\n Age : " + this.age + 
        "\n Phone Number " + this.number + 
        "\n Address : " + this.address + 
        "\n Salary : " + this.salary);
    }
}

var masih = new Employee("Mechanical", "Masih", 33, "9268491427", "Ghaziabad", 48000);
var zaman = new Manager("Finance", "Zaman", 34, "926-849-1427", "Sanjay Nagar, Ghaziabad", 54000);


masih.printDetail();
zaman.printDetail();







