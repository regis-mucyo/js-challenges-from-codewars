const uniqueInOrder = (arrays) => {
  let newArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] !== arrays[i + 1]) {
      newArray.push(arrays[i]);
    }
  }
  return newArray;
};
console.log(uniqueInOrder("AAAABBBCCDAABBB")); //['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder("ABBCcAD")); //['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); //[1,2,3]

// This Challenge was to return a unique order without duplication in order
