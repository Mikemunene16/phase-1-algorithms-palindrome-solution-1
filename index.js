function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  * split the string then reverse the join the string and finally write a condition that checks whether the word is a palindrome
*/


/*
  Add written explanation of your solution here
  ? A function that returns true if a word is a palindrome else returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
