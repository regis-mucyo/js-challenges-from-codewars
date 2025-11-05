const digPow = (n, p) => {
  let split = n.toString().split("");
  let power = split.map((e, i) => e ** (i + p));
  let sum = power.reduce((a, b) => a + b, 0);
  let divide = sum / n;
  let result = n * divide;
  let final = sum === result && divide % 1 === 0 ? divide : -1;
  return final;
};
console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
console.log(digPow(114, 3)); // 9
console.log(digPow(46288, 5)); // -1
console.log(digPow(135, 1)); // 1
console.log(digPow(175, 1)); // 1
console.log(digPow(518, 1)); // 1
console.log(digPow(598, 1)); // 1
console.log(digPow(1306, 1)); // 1
console.log(digPow(2427, 1)); // 1
console.log(digPow(2646798, 1)); // 1
console.log(digPow(3456789, 1)); // -1
console.log(digPow(3456789, 5)); // -1
