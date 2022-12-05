/* Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef" */

/* Traverse the string s and push into a stack for non-] character.
When there is a ] character, we should do these steps
pop all characters until meets [
pop all numbers to get the repeat count
repeat the substring and push it back to stack
Finally, we join all the pieces in the stack */

const decodeString = s => {
    let stack = [];
    for (let char of s) {
        if (char !== "]") {
            stack.push(char);
            console.log(stack);
            continue;
        }
        let cur = stack.pop();
        let str = '';
        while (cur !== '[') {
            str = cur + str;
            console.log(str);
            cur = stack.pop();
            console.log(cur);
            console.log(stack);
        }
        let num = '';
        cur = stack.pop();
        while (!Number.isNaN(Number(cur))) {
            num = cur + num;
            console.log(num);
            cur = stack.pop();
            console.log(cur);
        }

        if (cur) {
            stack.push(cur);
        }
        console.log(stack);
        stack.push(str.repeat(Number(num)));
        console.log(stack);
    }
    return stack.join('');
};

console.log(decodeString("2[2[acd]]"));