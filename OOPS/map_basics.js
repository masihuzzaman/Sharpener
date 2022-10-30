//Do not iterate a map as there is no ordering 
b = new Map();
b.set("abc",7);

if(b.get(4)==undefined) {
    b.set(4,1);
}
console.log(b.get("abc"));

//Creating a set
c = new Set();
c.add(5);
console.log(c);
