const towerBuilder = (nFloors) => {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    let stars = "*".repeat(i * 2 + 1);
    let spaces = " ".repeat(nFloors - i - 1);
    tower.push(spaces + stars + spaces);
  }
  return tower;
};
console.log(towerBuilder(1)); //, ["*"]);
console.log(towerBuilder(2)); //, [" * ","***"]);
console.log(towerBuilder(3)); //, ["  *  "," *** ","*****"]);
