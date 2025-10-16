const zero = (o) => (o ? o(0) : 0);
const one = (o) => (o ? o(1) : 1);
const two = (o) => (o ? o(2) : 2);
const three = (o) => (o ? o(3) : 3);
const four = (o) => (o ? o(4) : 4);
const five = (o) => (o ? o(5) : 5);
const six = (o) => (o ? o(6) : 6);
const seven = (o) => (o ? o(7) : 7);
const eight = (o) => (o ? o(8) : 8);
const nine = (o) => (o ? o(9) : 9);

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => b - a;
const times = (a) => (b) => a * b;
const dividedBy = (a) => (b) => Math.trunc(b / a);

console.log(eight(minus(three()))); // 5
console.log(five(minus(seven()))); // -2
console.log(nine(dividedBy(five()))); //1
