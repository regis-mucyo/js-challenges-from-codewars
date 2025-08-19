const sumDigPow = (a, b) => {
  let array = [];
  for (let i = a; i <= b; i++) {
    array.push(i);
  }
  return array
    .map((n) => {
      if (n >= 10) {
        let moreThan = n
          .toString()
          .split("")
          .map((nu, ind) => Math.pow(Number(nu), ind + 1))
          .reduce((ac, cu) => ac + cu, 0);
        return moreThan;
      }
      return Math.pow(n, 1);
    })
    .filter((num, ind) => num === ind + a);
};
console.log(sumDigPow(10, 150));
