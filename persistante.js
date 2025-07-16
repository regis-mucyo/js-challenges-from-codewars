const persistante = (num) => {
  let result = [];
  for (let i = num; num > 9; i--) {
    let split = num
      .toString()
      .split("")
      .map(Number)
      .reduce((ac, cur) => ac * cur);
    num = split;
    result.push(num);
  }
  return result.length;
};
console.log(persistante(39)); // Prints 3
console.log(persistante(999)); // Prints 4
