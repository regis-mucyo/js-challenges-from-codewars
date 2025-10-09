const moveZeros = (arr) => {
  let solution = arr.filter((e) => e !== 0);
  let zeros = arr.filter((e) => e === 0);
  return [...solution, ...zeros];
};
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([0, 1, null, 2, false, 1, 0]));
console.log(moveZeros([0, 0, 0, 1, 0]));
// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])) // [1,2,1,1,3,1,0,0,0,0]
// console.log(moveZeros([0,1,null,2,false,1,0])) // [1,null,2,false,1,0,0]
// console.log(moveZeros([0,0,0,1,0])) // [1,0,0,0,0]
