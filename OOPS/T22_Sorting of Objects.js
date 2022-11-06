/* Write a Program to create a Class Employee

It contains two attributes -> Name, Salary

Create 5 objects and initialize any random values for Name and Salary to it.

Store all these objects in an Array and print the names of the employees sorted in Descending Order of Salary using any of the sorting mechanism.

(bubble Sort, Insertion Sort or selection Sort).  */

// Create Employee Class
class Employee {
    constructor(name, salary) {
        this.salary = salary;
        this.name = name;
    }
}

// Create a map Object to store the name-salary pair
empMap = new Map;
empMap.set("Ram", 1234)
empMap.set("Shyam", 123)
empMap.set("Masih", 12345)
empMap.set("Zaman", 12)
empMap.set("Dania", 123456)

// Creating an array of employee salaries
let arrSalary = Array.from(empMap.values()) // Array created for salary

//Using bubble sort to sort the employee salaries in descending order
let len = arrSalary.length;
for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
        if (arrSalary[j] < arrSalary[j + 1]) {
            let tmp = arrSalary[j];
            arrSalary[j] = arrSalary[j + 1];
            arrSalary[j + 1] = tmp;
        }
    }

}

// Iterating over the salary array and getting the keys corresponding to the values of the original unordered map of name-salary pair
for(let i = 0; i < arrSalary.length; i++) {
    for (let [key, value] of empMap) {
        if (value === arrSalary[i])
          console.log(`Salary of ${key} is ${value}`);
    }
}




/* emp1 = new Employee("Ram", 1234);
emp2 = new Employee("Shyam", 123);
emp3 = new Employee("Masih", 12345);
emp4 = new Employee("Zaman", 12);
emp5 = new Employee("Dania", 123456); 

let arr = [emp1, emp2, emp3, emp4, emp5]; */

//let comparator1 = (a, b) => { return b.salary - a.salary };
//let comparator2 = (a, b) => { return b.name - a.name };

//console.log(arr.sort(comparator1));
//console.log(arr.sort(comparator2)); 




  
/*     let bubbleSort = (inputArr) => {
        let len = inputArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (inputArr[j] > inputArr[j + 1]) {
                    let tmp = inputArr[j];
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = tmp;
                }
            }
        }
        return inputArr;
    }; */


/* let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    console.log(inputArr);
    return inputArr;
};
 */
//bubbleSort(arr.salary);
