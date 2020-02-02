//Multiple Pointers is using pointers that correspond to an index or position

//countUniqueValues with multiple pointers
/* 
Implement a function that takes a soreted array and counts the unique values
Ex: countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // returns 7
*/

const countUniqueValues = arr => {
  // Create 2 pointers, one at beginning, one at beginning + 1
  let p1 = 0;
  let p2 = 1;

  //Loop through arr
  while (p2 <= arr.length) {
    //if arr[pointer1] === arr[pointer2], pointer2++
    if (arr[p1] === arr[p2]) {
      p2++;
    }
    //if arr[pointer1] !== arr[pointer2], pointer1++ and store value at pointer2 in pointer1 index
    else {
      p1++;
      arr[p1] = arr[p2];
      p2++;
    }
  }
  return p1;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
