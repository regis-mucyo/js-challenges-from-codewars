const lettersToNumbers = (s) => {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = lowerCase.toUpperCase();
  let numbers = "0123456789";
  return s
    .split("")
    .map((e) =>
      lowerCase.includes(e)
        ? lowerCase.indexOf(e) + 1
        : upperCase.includes(e)
        ? 2 * (e.charCodeAt() - 64)
        : numbers.includes(e)
        ? numbers.indexOf(e)
        : e
    )
    .filter((e) => Number(e))
    .reduce((c, a) => c + a, 0);
};
console.log(lettersToNumbers("Give me 5!")); // 73
