// What is a callback function in javascript
// Javacript is a synchronous and single-threaded language

setTimeout(function(){
    console.log("timer")
}, 5000);




function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});