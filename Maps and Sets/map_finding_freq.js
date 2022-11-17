x = "abdkhjshdjhshtrubv";
b = new Map();

//finding frequency
for (var i = 0; i < x.length; i++) {
    if (b.get(x[i]) == undefined) {
        b.set(x[i], 1);
    } else {
        b.set(x[i], b.get(x[i]) + 1);
    }
}
//console.log(b);

//printing the char with freq = 1
var str = "";
for (var i = 0; i < x.length; i++) {
    if (b.get(x[i]) == 1) {
        str = str + x[i];
    }
}

console.log(b);
console.log(str);