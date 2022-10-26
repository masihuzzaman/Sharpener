/* Create a class "PARENT" with a method that prints "This is parent class" and its Child class "CHILD" with a method that prints "This is child class". Now, create an object for each of the class and call

1 - method of parent class by object of parent class
2 - method of child class by object of child class
3 - method of parent class by object of child class */

class PARENT {
    display_parent() {
        console.log("This is parent class.");
    }
}

class CHILD extends PARENT {
    display_child() {
        console.log("This is a child class.");
    }
}

let obj_parent = new PARENT;
let obj_child = new CHILD;


obj_parent.display_parent();
obj_child.display_child();

obj_child.display_parent(); // this shows that CHILD inherits from PARENT