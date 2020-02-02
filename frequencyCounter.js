//Frequency counter is used to avoid nested loops with arrays
//Use an object to collect value/frequencies of values
//Nested loops are O(N^2) Slow, single loops are O(N) Fast

//Anagram with frequency counter
/* 
Given 2 strings, write a function 
that determines if they are anagrams of each other
Ex: validAnagram('aaz', 'zaa') // returns TRUE
*/

const validAnagram = (str1, str2) => {
  //Compare string lengths, return false if not equal
  if (str1.length !== str2.length) return false;
  //create 2 object to store string values/frequencies
  let lookup = {};
  //loop over first string, store to obj or increase frequency if it exsist
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  //loop over second string, check if its in the lookup[object]
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};

validAnagram('aaz', 'zaa');

/*
Since the loops are seperate, it is O(N)
*/
