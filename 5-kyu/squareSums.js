const squareSumsRow = (n) => {
  let array = [];
  let final = [];
  let test = 0;
  for (let i = n; i > 0; --i) {
    array.push(i);
  }
  array.reverse();
  return array.map((e, ind) => `${e + (ind + 1)}`);
};
console.log(squareSumsRow(15));
// I did not finish it
