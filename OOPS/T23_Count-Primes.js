/* Given an integer n, return the number of prime numbers that are strictly less than n.

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 0 */

/* The definition of a prime number seems simple: a number is prime if it is only divisible by 1 and itself.

Don't think that the definition of prime numbers is simple, I am afraid that not many people can really write efficient algorithms related to prime numbers. Let's say you are asked to write a function such as

// return the number of prime numbers in the interval [2, n) 
int countPrimes(int n)

// For example, countPrimes(10) returns 4
// because 2,3,5,7 are prime numbers
How would you write this function? I think people would write it like this.

int countPrimes(int n) {
    int count = 0;
    for (int i = 2; i < n; i++)
        if (isPrime(i)) count++;
    return count;
}

// Determine if integer n is a prime number
boolean isPrime(int n) {
    for (int i = 2; i < n; i++)
        if (n % i == 0)
            // there are other integer divisors
            return false;
    return true;
}
The time complexity O(n^2) is very problematic if you write it this way. First of all, your idea of using the isPrime function to assist is not efficient enough; and even if you were to use the isPrime function, there is still computational redundancy in writing the algorithm this way.

First, let's briefly explain how to write the algorithm if you want to determine whether a number is prime or not. Just modify the for loop condition in the isPrime code above slightly.

boolean isPrime(int n) {
    for (int i = 2; i * i <= n; i++)
        ...
}
In other words, i does not need to traverse to n, but only to sqrt(n). Why? Let's take an example and assume that n = 12.

12 = 2 × 6
12 = 3 × 4
12 = sqrt(12) × sqrt(12)
12 = 4 × 3
12 = 6 × 2
As you can see, the product of the last two is the inverse of the first two, and the inversion threshold is at sqrt(n).

In other words, if no divisibility factor is found in the interval [2,sqrt(n)], it is straightforward to conclude that n is prime, because no divisibility factor must be found in the interval [sqrt(n),n] either.

Now, the time complexity of the isPrime function is reduced to O(sqrt(N)), but I don't really need this function to implement the countPrimes function, I just want the reader to understand the meaning of sqrt(n), because I will use it later.

Optimization Process
The core idea of solving this problem efficiently is the opposite of the conventional idea above.

First we start with 2. We know that 2 is a prime number, so 2 × 2 = 4, 3 × 2 = 6, 4 × 2 = 8... none of them can be prime.

Then we find that 3 is also a prime number, so 3 × 2 = 6, 3 × 3 = 9, 3 × 4 = 12... none of them can be prime either.

Do you understand the logic of this elimination method? Let's look at the first version of our code.

int countPrimes(int n) {
    boolean[] isPrime = new boolean[n];
    // initialize the array to true
    Arrays.fill(isPrime, true);

    for (int i = 2; i < n; i++) 
        if (isPrime[i]) 
            // multiples of i can't be prime anymore
            for (int j = 2 * i; j < n; j += i) 
                    isPrime[j] = false;
    
    int count = 0;
    for (int i = 2; i < n; i++)
        if (isPrime[i]) count++;
    
    return count;
}
If you can understand the above code, then you have the overall idea, but there are two more subtleties that can be optimized.

First, recall the isPrime function that determines whether a number is prime, where the for loop only needs to iterate through [2,sqrt(n)] due to the symmetry of the factors. Similarly, our outer for loop only needs to iterate over sqrt(n).

for (int i = 2; i * i < n; i++) 
    if (isPrime[i]) 
        ...
On top of that, it's hard to notice that the inner for loop can be optimized as well. Our previous approach was that

for (int j = 2 * i; j < n; j += i) 
    isPrime[j] = false;
This will mark all integer multiples of i as false, but there is still computational redundancy.

For example, if n = 25 and i = 4, the algorithm will mark 4 × 2 = 8, 4 × 3 = 12, etc., but these two numbers are already marked by 2 × 4 and 3 × 4 for i = 2 and i = 3.

Instead of starting with 2 * i, we can optimize slightly by having j start traversing from the square of i.

for (int j = i * i; j < n; j += i) 
    isPrime[j] = false;
In this way, the algorithm for counting prime numbers is efficiently implemented, which actually has a name, called Sieve of Eratosthenes. see the complete final code. */

/* int countPrimes(int n) {
    boolean[] isPrime = new boolean[n];
    Arrays.fill(isPrime, true);
    for (int i = 2; i * i < n; i++) 
        if (isPrime[i]) 
            for (int j = i * i; j < n; j += i) 
                isPrime[j] = false;
    
    int count = 0;
    for (int i = 2; i < n; i++)
        if (isPrime[i]) count++;
    
    return count; 
}*/

/* The time complexity of the algorithm is difficult to calculate, and it is clear that the time is related to the two nested for loops, whose operands should be

n/2 + n/3 + n/5 + n/7 + ... = n × (1/2 + 1/3 + 1/5 + 1/7...)

The inverse of the prime number is in parentheses. The final result is O(N * loglogN). */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let isPrime = new Array(n);
    isPrime.fill(isPrime, true);
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }
    console.log(count);
    return count;
};

countPrimes(3);