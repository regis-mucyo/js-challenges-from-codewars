const comp = (array1, array2) => {
  if (!array1 || !array2) return false;
  let arr1 = array1.sort((a, b) => a - b);
  let arr2 = array2.sort((a, b) => a - b);
  return arr1.map((e) => e * e).every((ele, ind) => ele === arr2[ind]);
};
console.log(comp([], []));
