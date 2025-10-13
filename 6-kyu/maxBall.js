const maxBall = (v0) => {
  let result = 0;
  v0 = (v0 * 1000) / 3600;
  let g = 9.81;
  let check = -1;

  for (let i = 0; ; i++) {
    let t = i * 0.1;
    let h = v0 * t - 0.5 * g * t * t;

    if (h > check) {
      result = i;
      check = h;
    } else {
      break;
    }
  }
  return result;
};
console.log(maxBall(15));
