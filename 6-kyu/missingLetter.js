const findMissingLetter = (array) => {
  let arr = array.map((e) => e.toLowerCase());
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let first = arr[0].toLowerCase().charCodeAt() - 97;
  let last = arr[arr.length - 1].toLowerCase().charCodeAt() - 97;
  let finalLetters = letters.slice(first, last + 1);
  let answer = [];
  for (let i = 0; i < finalLetters.length; i++) {
    if (finalLetters[i] !== arr[i]) {
      answer.push(finalLetters[i]);
    }
  }
  return array.join() === array.join().toUpperCase()
    ? answer[0].toUpperCase()
    : answer[0];
};

console.log(findMissingLetter(["f", "g", "i", "j", "k"]));
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["a", "c", "d", "e", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
