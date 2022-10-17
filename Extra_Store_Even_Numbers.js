// let we want to store even numbers from 2 to 20
function even_numbers(startNumber, endNumber) {
    let arr = [];
    let i = 0;
    while (startNumber <= endNumber) {
        arr[i] = startNumber;
        i++;
        startNumber += 2;
    }
    console.log(arr);
}
even_numbers(2, 22);