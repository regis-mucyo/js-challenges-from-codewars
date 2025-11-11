const spinWords = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => {
      return word.length >= 5 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
};
console.log(
  `'Hey fellow warriors' becomes: '${spinWords("Hey fellow warriors")}'`
);
console.log(`'This is a test' becomes: '${spinWords("This is a test")}'`);
console.log(
  `'This is another test' becomes: '${spinWords("This is another test")}'`
);
console.log(`'Welcome' becomes: '${spinWords("Welcome")}'`);
console.log(`'to' becomes: '${spinWords("to")}'`);
