
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

      function countVowels(s) {
        const vowels = ["a", "e", "i", "o", "u"];
        let count = 0;

        for (let i = 0; i < s.length; i++) {
          if (vowels.includes(s[i].toLowerCase())) {
            count++;
          }
        }
        return count;
      };

      console.log(countVowels("Masihuzzaman Ansari"));
      

