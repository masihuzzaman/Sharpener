class Car {
    color = "";
    constructor(color, year, no_of_wheels) {
        this.color = color;
        this.year = year;
        this.no_of_wheels = no_of_wheels;
    }
    travelling() {
        console.log("the " + this.color + " car is travelling");
    }
    get_no_years = function(x) {
        console.log(x-this.year);
    }
}

let myCar1 = new Car("red", 2019, 4);
//myCar1.color = "red";
console.log(myCar1.color);
 
let myCar2 = new Car(); 
myCar2.color = "black";
console.log(myCar2.color);
myCar2.travelling();
myCar1.travelling();

myCar1.get_no_years(2021);
