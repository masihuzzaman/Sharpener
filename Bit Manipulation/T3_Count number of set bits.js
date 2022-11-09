/* Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 

Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits. */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

//The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used.

/* Examples
String	-- Hamming weight
11101	-- 4
11101000	-- 4
00000000    -- 0
678012340567    -- 10 */

/* Brian Kernighan’s Algorithm: 
Subtracting 1 from a decimal number flips all the bits after the rightmost set bit(which is 1) including the rightmost set bit. 
for example : 
10 in binary is 00001010 
9 in binary is 00001001 
8 in binary is 00001000 
7 in binary is 00000111 
So if we subtract a number by 1 and do it bitwise & with itself (n & (n-1)), we unset the rightmost set bit. If we do n & (n-1) in a loop and count the number of times the loop executes, we get the set bit count. 
The beauty of this solution is the number of times it loops is equal to the number of set bits in a given integer.  */

/* Example for Brian Kernighan’s Algorithm:  

   n =  9 (1001)
   count = 0

   Since 9 > 0, subtract by 1 and do bitwise & with (9-1)
   n = 9&8  (1001 & 1000)
   n = 8
   count  = 1

   Since 8 > 0, subtract by 1 and do bitwise & with (8-1)
   n = 8&7  (1000 & 0111)
   n = 0
   count = 2

   Since n = 0, return count which is 2 now. */

var hammingWeight = function (n) {
    let count = 0;
    while (n > 0) {
        n = n & (n - 1);
        count++;
    }
    console.log(count)
    return count;

};

hammingWeight(00000000000000000000000000001011) //3
hammingWeight(00000000000000000000000010000000) //1
hammingWeight(11111111111111111111111111111101) //1 --Wrong output. Its should be 31.
hammingWeight(4294967293) // 1 -- Wrong output. (31)
hammingWeight(429) //6 -- 0000000110101101
