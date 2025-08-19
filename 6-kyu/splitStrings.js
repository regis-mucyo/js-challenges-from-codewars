const solution = (str) => {
  let array = str.split("");
  let first = array.filter((s, ind) => ind % 2 === 0);
  let sec = array.filter((s, ind) => ind % 2);
  let ne = array.length % 2 === 0 ? first : sec.push("_");
  return first.map((ele, ind) => ele + sec[ind]);
};
console.log(solution("abcdef"));
console.log(solution("abc"));
console.log(solution("abcdefg"));
