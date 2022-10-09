/*
After watching the video write the code to print all the subarrays possible. Note - print in the similar way as given here.

Input:-

[1,2,3,4,5]

Output:-

1

12

123

1234

12345

2

23

234

2345

3

34

345

4

45

5

*/
function print_subarray(arr, length) {
    /*Function to print all the subarrays given in an array
    Input arr--> array, length -->length of an array */
    //console.log(arr.length);
    for (var i = 0; i < length; i++) {
        for (var j = i; j < length; j++) {
            var str = "";
            for (var k = i; k <= j; k++) {
                str = str + arr[k];

            } console.log(str);
        }

    }



}