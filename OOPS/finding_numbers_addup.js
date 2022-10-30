//find the two numbers that add to 16
x = [1, 6, 4, 9, 12, 14, 16];
var k = 16;

y = new Set(x);
console.log(y);
for (var i = 0; i < x.length; i++) {
    var a = x[i];
    b = k - a; // if a is one of the numbers then other number will be b = k - a
    if (y.has(b)) {
        console.log(a, b);
        break;
    } else {
        y.add(a);
    }
}
console.log(y);
