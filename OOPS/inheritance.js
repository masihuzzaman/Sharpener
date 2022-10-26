class A {
    constructor(c, d) {
        this.c = c;
        this.d = d;
    }
    display() {
        console.log(this.c);
        console.log("A is invoked");
    }
}

class B extends A {
    constructor(a, b, c, d) {
        super(c, d);
        this.a = a;
        this.b = b;
    }
    hello() {
        console.log("Hello, you are in class B");
    }
    display() {
        super.display();
        console.log("B is invoked");
    }
}

var b = new B(1, 2, 3, 4);
b.display();