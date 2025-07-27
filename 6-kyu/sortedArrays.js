const nthSmallest = (...array) => {
  let n = array.pop();
  return array.flat().sort((a, b) => a - b)[n - 1];
};
console.log(nthSmallest([1, 6], [5], [9, 22, 7], [8, 3, 2], 5)); //6

//This challenge was to return the smallest number in the array by specifying that nth
//Like above the 5th number that is smallest was 6
