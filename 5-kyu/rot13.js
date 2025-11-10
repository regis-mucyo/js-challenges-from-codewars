const rot13 = (message) => {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;
  let cipher = message
    .toLowerCase()
    .split("")
    .filter((e) => letters.includes(e))
    .map((e) => e.charCodeAt() - 96)
    .map((e) => (26 - e < 13 ? 13 - (26 - e) : e + 13))
    .map((e) => String.fromCharCode(e + 96))
    .join("");
  let final = message
    .toLowerCase()
    .split("")
    .map((e, i) => (letters.includes(e) ? cipher[count++] : e))
    .join("");
  return message
    .split("")
    .map((e, i) => (e === e.toUpperCase() ? final[i].toUpperCase() : final[i]))
    .join("");
};

console.log(rot13("%3Re&&gi__??s")); //%3Er&&tv__??f
