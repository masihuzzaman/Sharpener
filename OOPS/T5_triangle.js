/* Write a program to print the area and perimeter of a triangle object having sides of 3, 4 and 5 units by creating a class named 'Triangle' and having two functions calculate_area and calculate_perimeter and constructors(parameterized constructor where you assign (3,4,5)) . */

class Triangle {
    constructor(first_side, second_side, third_side) {
        this.side_A = first_side;
        this.side_B = second_side;
        this.side_C = third_side;
    }
    calculate_perimeter() {
        let perimeter = (this.side_A + this.side_B + this.side_C);
        return perimeter;
    }
    calculate_area() {
        let s = (this.side_A + this.side_B + this.side_C)/2
        let area = Math.sqrt(s*(s-this.side_A)*(s-this.side_B)*(s-this.side_C))
        return area;
    }
}

let obj = new Triangle(3, 4, 5);
console.log(obj.calculate_area());
console.log(obj.calculate_perimeter());
