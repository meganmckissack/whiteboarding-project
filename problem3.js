// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

//take in string input
//check to see if input is string
//instantiate an array to captute output
//instantiate an object to captute output
//loop over string input
//for each instance of a repeating character, count each insntace and push number of instances to object
//return resulting array as a joined string

const compress = function(stringInput) {
  let compressed = [];
  let repeats = {};
  for(i = 0; i < stringInput.length; i++) {
   let letter = stringInput.charAt(i);
    repeats[letter] = (isNaN(repeats[letter]) ? 1 : repeats[letter] + 1);
  }

  for( let key in repeats) {
    if(repeats.hasOwnProperty(key) && repeats[key] >= 1) {
      compressed.push(repeats[key] + key);
    }
  }
  return compressed.join('');
}


//Problem: returns the key value for b and adds all values of a into one key