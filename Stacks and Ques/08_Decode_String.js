/* Traverse the string s and push into a stack for non-] character.
When there is a ] character, we should do these steps
pop all characters until meets [
pop all numbers to get the repeat count
repeat the substring and push it back to stack
Finally, we join all the pieces in the stack */

const decodeString = s => {
    const stack = [];
    for (const char of s) {
        if (char !== "]") {
            stack.push(char); //2[acd
            console.log(stack);
            continue;
        }
        //
        let cur = stack.pop(); // d // 2[ac
        let str = '';
        while (cur !== '[') {
            str = cur + str; // d 
            console.log(str);
            cur = stack.pop(); // c // 2[a
            console.log(cur);
            console.log(stack);
        }
        // getting the character through pop()
        // changing it to a number and
        // checking if its really a number and if 
        // its really a number then we dont want a number
        let num = '';
        cur = stack.pop(); // a // 2[
        while (!Number.isNaN(Number(cur))) {
            num = cur + num;
            console.log(num);
            cur = stack.pop();
            console.log(cur);
        }

        stack.push(cur); // a // 2[a
        console.log(stack);
        stack.push(str.repeat(Number(num))); // d
        console.log(stack);
    }
    return stack.join('');
};

console.log(decodeString("2[acd]"));