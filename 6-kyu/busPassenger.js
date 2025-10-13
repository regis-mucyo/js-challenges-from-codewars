const sit = (bus) => {
  let array = [];
  let str = "";
  let count = 4;
  let char = "x-";
  let arr = bus.split("").filter((e) => char.includes(e));
  for (let i = 0; i < arr.length; i += count) {
    array.push(arr.slice(i, i + count));
  }

  let hiphen = array.map((ele) => ele.filter((e) => e === "-").length);
  let max = Math.max(...hiphen);
  let index = hiphen.indexOf(max);
  let seat = array[index];
  let space = seat.indexOf("-");
  if (space !== -1) seat[space] = "0";
  let newAr = array.flat();
  for (let i = 0; i < newAr.length; i += count) {
    let row = (str += newAr.slice(i, i + count).join("") + "\n");
  }
  return str;
};

console.log(
  sit(
    `
    xx  x-
xx  xx
x-  -x
x-  xx`
  )
);
