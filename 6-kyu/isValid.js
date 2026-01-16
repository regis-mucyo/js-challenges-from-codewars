const isValidWalk = (walk) => {
  let locations = ["n", "s", "w", "e"];
  let valid = walk.map((e) => locations.includes(e)).every((e) => e);
  let order = walk
    .map((e, i, a) => (e === a[i + 1] ? true : false))
    .some((e) => e === true);
  let check =
    walk.length === 10 && valid.every((e) => e === true) && !order
      ? true
      : false;
  return check;
};
isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]); //'should return true'
isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]); //'should return false'
isValidWalk(["w"]); //'should return false'
isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s", "z"]); //'should return false'
