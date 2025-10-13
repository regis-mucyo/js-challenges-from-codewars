const toRange = (arr) => {
  let a1 = [];
  let dupli = [...new Set(arr)].sort((a, b) => a - b);
  let ful = dupli;
  let fin = "";
  for (let i = 0; i < dupli.length; i++) {
    if (i + ful[0] === ful[i]) {
      ful[dupli[i]];
      fin = `${ful[0]}_${ful.length - 1}`;
    } else {
      ful[dupli[i]];
    }
  }
  return fin;
};
console.log(toRange([3, 4, 5, 6, 9, 10, 11, 30, 7, 7, 7]));
