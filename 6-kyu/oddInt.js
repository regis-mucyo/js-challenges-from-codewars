const findOdd = (A) => {
  let unique = [...new Set(A)];
  let final = unique
    .map((e) => [e, A.filter((ele) => e === ele).length % 2 !== 0])
    .filter((ele) => ele.includes(true))
    .flat();
  return final[0];
};
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 1, 2]));
