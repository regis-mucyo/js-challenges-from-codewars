const duplicateCount = (text) => {
  let array = text.toLowerCase().split("");
  let nonDuplicated = [...new Set(array)];
  let filtering = nonDuplicated
    .map((elem) => [elem, array.filter((ele) => ele === elem).length])
    .flat()
    .filter((elem) => Number(elem));
  let count = filtering.filter((ele) => ele >= 2);
  return count ? count.length : 0;
};
console.log(duplicateCount("regis")); // 0
console.log(duplicateCount("aabBhey")); // 2

// This kata was about to count duplicates in the given strings like 'a' and 'a' counted as 1 and 'b' and 'B'
// counted also as 1 the the total is 2
