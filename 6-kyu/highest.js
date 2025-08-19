const high = (x) => {
  let array = x.split(" ");
  let charCode = array.map((e) =>
    e
      .split("")
      .map((ele) => ele.charCodeAt() - 96)
      .reduce((acc, cur) => acc + cur, 0)
  );
  let highestWord = Math.max(...charCode);
  let index = charCode.indexOf(highestWord);
  return array[index];
};
console.log(high("a a"));
