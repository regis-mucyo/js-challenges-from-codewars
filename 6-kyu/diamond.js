const diamond = (n) => {
  let diamond = "";
  let final = "";
  if (n % 2 === 0 || n <= 0) {
    return null;
  }
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  let first = array.filter((e) => e % 2);
  let second = first.slice(0, first.length - 1).reverse();
  let combine = [...first, ...second];
  for (let num of combine) {
    diamond +=
      num === n
        ? "*".repeat(n) + "\n"
        : " ".repeat((n - num) / 2) + "*".repeat(num) + "\n";
  }
  return diamond;
};

console.log(diamond(11));
