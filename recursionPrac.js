/**********************Practice Problems ***************/

//Mimic Math.pow() with recrusion

// const power = (base, expo) => {
//   //Set base case to exit
//   if (expo === 1) {
//     return base;
//   }
//   if (expo === 0) {
//     return 1;
//   }
//   //Recursively multiply by base by itself till reaching base case
//   return base * power(base, expo - 1);
// };

// console.log(power(2, 0));

//Recursively get factorial

// const factorial = num => {
//   //Set base case
//   if (num === 1 || num === 0) {
//     return 1;
//   }
//   //Multiply num by itself minus 1
//   return num * factorial(num - 1);
// };

// console.log(factorial(0));

//Multiply up all numbers in array

const productOfArray = arr => {
  //Set base case
  if (arr.length < 1) return 1;
  //Multiply first number in array then slice it off
  return arr[0] * productOfArray(arr.slice(1));
};

console.log(productOfArray([1, 2, 3]));
