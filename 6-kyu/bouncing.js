// The height is unknown
// The height must be greater than 0
// The Bounce must be greater than 0 and less than 1
// Window must be less than h

const bouncingBall = (h, bounce, window) => {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let counter = 1;
  let height = h * bounce;
  while (height > window) {
    counter += 2;
    height *= bounce;
  }
  return counter;
};
console.log(bouncingBall(3, 0.66, 1.5));
console.log(bouncingBall(3, 0.66, 1.5));
console.log(bouncingBall(30, 0.66, 1.5));
console.log(bouncingBall(30, 0.75, 1.5));
console.log(bouncingBall(30, 0.4, 10));
console.log(bouncingBall(40, 0.4, 10));
console.log(bouncingBall(10, 0.6, 10));
console.log(bouncingBall(40, 1, 10));
console.log(bouncingBall(-5, 0.66, 1.5));
console.log(bouncingBall(5, -1, 1.5));
console.log(bouncingBall(4, 0.25, 1));
