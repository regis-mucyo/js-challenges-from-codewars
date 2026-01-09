const order = (words) => {
  if (!words) return "";
  return words
    .split(" ")
    .sort(
      (a, b) =>
        a.split("").filter((e) => Number(e)) -
        b.split("").filter((e) => Number(e))
    )
    .join(" ");
};
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // Fo1r the2 g3ood 4of th5e pe6ople
