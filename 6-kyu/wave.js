const wave = (str) => {
  let array = new Array(str.length).fill(str.toLowerCase());
  return array
    .map((ele, ind) =>
      str[ind] === " "
        ? null
        : ele.slice(0, ind) + ele[ind].toUpperCase() + ele.slice(ind + 1)
    )
    .filter(Boolean);
};
console.log(wave("Hello There"));
