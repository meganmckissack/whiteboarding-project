// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

//get the array input
//instatiate an array to store output
//loop through the input array 
// for each single instance of an item in the array, push item to stored output array
//for each item that matches what's in the output array, don't push that item to the output array

//edge case, putting in multiple strings and numbers over two characters/places didn't work


const dedupe = function(arrInput) {
  let arrOutput = [];
  if(Array.isArray(arrInput) === false || arrInput === null){
    return;
  } else {
    arrInput.forEach(element => {
      if(arrOutput.indexOf(element) !== arrInput.indexOf(element)) {
        arrOutput.push(element);
      }
    });
  }
  return arrOutput;
}