

// Function to return the maximum
// water that can be stored
function waterTrapped(Height) {

    // Stores the indices of the bars
    let stack = []

    // size of the array
    let n = Height.length

    // Stores the final result
    let ans = 0

    // Loop through the each bar
    for (let i = 0; i < n; i++) {

        // Remove bars from the stack
        // until the condition holds
        while (stack.length != 0 && (Height[stack[stack.length - 1]] < Height[i])) {

            // store the height of the top
            // and pop it.
            let pop_height = Height[stack.pop()]

            // If the stack does not have any
            // bars or the popped bar
            // has no left boundary
            if (stack.length == 0)
                break

            // Get the distance between the
            // left and right boundary of
            // popped bar
            let distance = i - stack[stack.length - 1] - 1

            // Calculate the min. height
            let min_height = Math.min(Height[stack[stack.length - 1]], Height[i]) - pop_height

            ans += distance * min_height
        }

        // If the stack is either empty or
        // height of the current bar is less than
        // or equal to the top bar of stack
        stack.push(i)
    }

    return ans
}

// Driver code
let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(waterTrapped(arr))




