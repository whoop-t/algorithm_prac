// A function that calls itself
//Functions are continuously pushed to the call stack and then popped off
//Keep calling with different piece of data until it reaches the base case
//Base Case is where the recursion stops

//This recursivly adds all number between entered number
const sumRange = num => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(sumRange(8));

//REMEMBER your base case, make sure it is correct or recursion will go forever
//Dont forget to return, make sure you are returning the right thing

//Helper method recursion
//This is used to have recursion inside a function but away from that functions main goal
//Outer function is not recursive

function collectOddValues(arr) {
  //If results was declared inside the recursive function, then it would be reset everytime
  //Thats why the helper method recursion is used
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Pure Recursion(using example above but with pure recursion)

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  //It will return all created arrays concated at the end
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);

//Don't mutate arrays, use methods like slice, spread, concat to make copies
//Strings are immutable, need to use methods liek slice, substr, etc.
//Make copies of objects with Object.assign or spread
