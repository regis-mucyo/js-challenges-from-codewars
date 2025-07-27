const countSmileys = (count) => {
  return count.filter((e) =>
    [
      ":)",
      ":D",
      ":-D",
      ":-)",
      ":~D",
      ":~)",
      ";)",
      ";D",
      ";-D",
      ";-)",
      ";~D",
      ";~)",
    ].includes(e)
      ? e
      : false
  ).length;
};
console.log(countSmileys([":)", ";(", ";}", ":-D"])); // should return 2;
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // should return 3;
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // should return 1;
console.log(countSmileys([])); //0
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); // should return 4;
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); // should return 2;
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // should return 1;
// This kata is to return number of smiles we have  in our array and there's a list of those all smiles ,
// so we was checking according to that lists of smiles
