function isPalindrome(word) {
  const reversedWord = word.split('')
  .reverse()
  .join('');
  return word === reversedWord
  }

/* 
  Add your pseudocode here
  
  - Convert the string to an array
  - Reverse the array
  - Convert back to a string
  - Compare orginal word with reversed word
*/

/*
  Add written explanation of your solution here

  - We would like to use the reverse() method on the word that is passed to the function. 
  - In order to do so, we have to convert the word, which is a string, to an array.
  - We will do so by using the split() method. We can now use the reverse() method.
  - Now, we can convert the array back to a string using the join() mehtod. 
  - Finally with can compare the original word with the reversed word. If they are the same the function will return true. 
- Otherwise it will return false.
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
