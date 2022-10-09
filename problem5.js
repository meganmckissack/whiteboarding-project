// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

// Quick sort
    // First select an element which is to be called as pivot element.
    // Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it’s left and greater than pivot is to it’s right.
    // Finally, perform the same operations on left and right side elements to the pivot element.
// Merge sort
    // Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
    // Continue dividing the subarrays in the same manner until you are left with only single element arrays.
    // Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
    // Repeat step 3 unit with end up with a single sorted array.
// Heap sort
    //Heap Sort is an in-place, non-stable, comparison-based sorting algorithm.
// Insertion sort
    //intuitive, stable, in-place, and of comparison-type.
// Bubble sort
    //sorts the array by comparing two adjacent elements and swaps them 
    //if they are not in the intended order. 
    //Here order can be anything like increasing order or decreasing order
// Selection sort
    //Selection sort works by going up an array and selecting the minimum value. 
    //The minimum value is then moved to the beginning of the array. 
    //The left side of the array becomes more sorted at the end of each pass through the array, until the whole array is sorted
// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

// BubbleSort(array){
//   for i -> 0 to arrayLength 
//      isSwapped <- false
//      for j -> 0 to (arrayLength - i - 1)
//       if arr[j] > arr[j + 1]
//         swap(arr[j], arr[j + 1])
//         isSwapped -> true
// }

const bubbleSort = function(inputArray) {
  let i;
  let j;

  let isSwapped = false;

  for(i = 0; i < inputArray.length; i++) {
    isSwapped = false;

    for(j = 0; j < inputArray.length; j++) {
      if(inputArray[j] > inputArray[j + 1]) {
        let temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
        isSwapped = true;
      }
    }
    // IF no two elements were swapped by inner loop, then break
    if(!isSwapped) {
      break;
    }
  }
}