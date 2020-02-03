//Divide and Conquer

//Divding data into smaller chunks, and continuing to divide till the answer is found.

//This function will search the array for the value passed in and return the index it is at
//This is Time Complexity Log(N), which is faster than O(N)
const binarySearch = (arr, val) => {
  //Create variable for min and max index
  let min = 0;
  let max = arr.length - 1;

  //Loop while min is less than max
  while (min <= max) {
    //Get the middle index and store it
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    //If currentElement is less than the value we are looking for, then we dont need that lower seciton of the arr. Update min and loop again
    if (currentElement < val) {
      min = middle + 1;
    }
    //If currentElement is greater than the value we are looking for, then we dont need that higher seciton of the arr. Update min and loop again
    else if (currentElement > val) {
      max = middle - 1;
    }
    //If the middle is the value we are looking for, return the index
    else {
      return middle;
    }
  }

  //If value doesnt exsist then return -1
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
