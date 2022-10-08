// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

//take string as input
//check to see if input is string
// loop over each string character to see if each value is unique
// return true or false

const unique = function(inputString) {
  if(typeof inputString !== 'string') {
    return 'the input is not a string';
  } else {
    for(i = 0; i < inputString.length; i++) {
      if(inputString.indexOf(inputString[i]) !== inputString.lastIndexOf(inputString[i])) {
        return false;
      }
      }
      return true;
    }
  }

  