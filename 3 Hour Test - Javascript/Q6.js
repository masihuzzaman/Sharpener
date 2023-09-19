/* There are many needy people who need some money are standing in a row .
the person who stands at i th position needs i*i rs money . You have X rs and you want to fulfil the needs of people .
when you donate the money to any people it is deducted from X .
You have to find how many peoples can fulfil their needs by your money .

Example 1:
Input:
N = 14
Output: 3
Explanation: The needs of people is 1, 4, 9, 16, .... and so on. WE can fulfil needs of first 3 person , after which our money becomes 0 and we cant fulfil anyone else. So answer is 3

Example 2:
Input: N = 35
Output: 4

The needs of people is 1, 4, 9, 16, 25 .... and so on. WE can fulfil needs of first 4 person , after which our money becomes 5 and we cant fulfil anyone else. So answer is 4

Constraints:
1 ≤ T ≤ 10^3
1 ≤ N ≤ 10^12 */

/**
 * @param {X} number
 * @return {number}
 */
function findK(X) {
    let m = X;
    let count = 0;
    
    for ( let i = 1; i <= X; i++) {
        let need = i*i;
        
        if (m >= need) {
            m -= need;
            count++;
        } else {
            break;
        }
    }
    return count;
}