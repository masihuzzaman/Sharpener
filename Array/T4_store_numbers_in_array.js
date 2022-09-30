/*Function to store the number from 1 to n 
    Note - After storing return the array */
    
function store_numbers(n){

    const arr = [];
    let x = 1;
    let i = 0;
    while (x <=n ) {
        arr[i] = x;
        i++;
        x++;
    }
    x = 1;
    i = 0;
    while (x <= n) {
        console.log(arr[i]);
        i++;
        x++;
    }
}
store_numbers(7);