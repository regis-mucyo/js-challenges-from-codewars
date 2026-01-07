const duplicateEncoder = (word) => {
  let cases = word.toLowerCase().split("");
  let unique = [...new Set(cases)];
  let duplicate = unique
    .map((e) => [e, cases.filter((ele) => ele === e).length])
    .filter((e) => e[1] !== 1)
    .map((e) => e[0]);
  return cases.map((e) => (duplicate.includes(e) ? ")" : "(")).join("");
};
console.log(duplicateEncoder("6kNR4Bk8#8#BB#rok8K")); //()()())))))))))()))
console.log(duplicateEncoder("recede"));
console.log(duplicateEncoder("Success"));
console.log(duplicateEncoder("(( @"));
