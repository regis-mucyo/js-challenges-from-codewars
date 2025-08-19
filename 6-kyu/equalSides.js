const findEvenIndex = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let leftSum = arr.slice(0, i).reduce((ac, cu) => ac + cu, 0);
    let rightSum = arr.slice(i + 1).reduce((ac, cu) => ac + cu, 0);
    array.push(`${leftSum === rightSum}`);
  }
  console.log(array.indexOf(array.find((e) => e === "true")));
};
findEvenIndex([1, 2, 3, 4, 3, 2, 1]); // 3
findEvenIndex([0, 8]); // 1
findEvenIndex([8, 8]); // -1
findEvenIndex([10, -80, 10, 10, 15, 35, 20]); // 6

// This kata is abo
