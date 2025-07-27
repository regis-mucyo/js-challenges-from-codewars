const persistante = (num) => {
  let result = [];
  for (let i = num; num > 9; i--) {
    let split = num
      .toString()
      .split("")
      .map(Number)
      .reduce((ac, cur) => ac * cur);
    num = split;
    result.push(num);
  }
  return result.length;
};
console.log(persistante(39)); // Prints 3
console.log(persistante(999)); // Prints 4

//This challenge kata from codewars was about to return how many times the number has multiplcated itself like,
//if you have '39' it will be 3*9=27 => 2*7=14 => 1*4=4, so as you can see we have numbers 27,14,4 and we have to return number of times , here is 3.
