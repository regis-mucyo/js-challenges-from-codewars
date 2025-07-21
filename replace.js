const alphabetPosition = (text) => {
  if (typeof text === "object") {
    return text.toString();
  }
  return text
    .toLowerCase()
    .split("")
    .map((e) => e.charCodeAt() - 96)
    .filter((e) => e > 0 && e <= 26)
    .join(" ");
};
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//Output:"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

//This challenge is to return the position number of each alphabetic
