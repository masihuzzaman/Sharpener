// Question: 1

//   The string may contain uppercase and/or lowercase letters. The string may
//   contain spaces, punctuation marks, digits, and/or other special
//   characters.
//   Input: str = "HELLO WORLD"
//   Output: 1
//   Explanation: vowels
//   in the given string are: E, O, O
//   Input: str = "a1e@i2o!u"
//   Output: 4
//   Explanation: vowels in the given string are: a, e,
//   i, o, u

/* function countVowels(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Masihuzzaman Ansari")); */

function countVowels(inputStr) {
  // Define a set of vowels (both lowercase and uppercase).
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Initialize a variable to count the vowels.
  let vowelCount = 0;

  // Iterate through each character in the input string.
  for (const char of inputStr) {
    // Check if the character is a vowel.
    if (vowels.has(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// Test cases
const inputStr1 = "HELLO WORLD";
const output1 = countVowels(inputStr1);
console.log("Input:", inputStr1);
console.log("Output:", output1);

const inputStr2 = "a1e@i2o!u";
const output2 = countVowels(inputStr2);
console.log("\nInput:", inputStr2);
console.log("Output:", output2);
