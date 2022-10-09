// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"


//take in the input string
//check if input is string
//instantiate a variable to collect ouptut from loop
//loop through the input string to check if there is a space
//push loop results to an array
//return the array result as a string


const urlToString = function(stringInput) {
  //let str = stringInput;
  let urlOutput = [];
  if(typeof stringInput !== 'string') {
    return "please input a valid string";
  } else {
    for(i = 0; i < stringInput.length; i++) {
      if(stringInput[i] === ' ') {
        urlOutput.push('%20');
      } else {
        urlOutput.push(stringInput[i]);
      }
    }
    return urlOutput.join('');
  }
}
