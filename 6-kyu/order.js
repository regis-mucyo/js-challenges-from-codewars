const order = (words) => {
  return words
    .split(" ")
    .map((e) => e + e.split("").filter((e) => Number(e)))
    .map((e) => e.split(" ").sort((a, b) => a[0] - b[0]));
};
console.log(order("is2 Thi1s T4est 3a"));
