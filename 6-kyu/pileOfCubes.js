const findNb = (m) => {
  let total = 0;
  let n = 0;
  for (let i = 1; total < m; i++) {
    total += i ** 3;
    n = i;
  }
  return total === m ? n : -1;
};
console.log(findNb(1071225)); //45
console.log(findNb(534523542795248)); //-1
console.log(findNb(123123123)); //1

//This kata was about to input the total number of volume for cubes and then returns the number of
// cubes you will build, if it will be equal to m or the input it will return number of times , if not it is -1
