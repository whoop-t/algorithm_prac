//Sliding Window

//Make a window, move the window depending on a condition. Usually left to right
//Keeping track of a subset of data
//Function below will be O(N)

function maxSubarraySum(arr, num) {
  //Make variables to keep maxSum and tempSum
  let maxSum = 0;
  let tempSum = 0;
  //Sort out edge case if arr is empty or sorted than the num
  if (arr.length < num) return null;
  //Loop through the array to get the first N digits sum and store to maxSum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  //Loop through, slide window, subtract num no longer used, add new number in the window, compare to maxNum and replace if tempSum is bigger
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  //return largest subarray
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
