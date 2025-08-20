const digitalRoot = (n) => {
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .map(Number)
      .reduce((ac, cur) => ac + cur, 0);
  }
  return n;
};

console.log(digitalRoot(999999999999));
console.log(digitalRoot(618949));
console.log(digitalRoot(132189));
console.log(digitalRoot(94252847834725));
console.log(digitalRoot(493193));
console.log(digitalRoot(456));
