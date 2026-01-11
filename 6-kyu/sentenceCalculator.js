function lettersToNumbers(s) {
  let sum = 0;

  for (const char of s) {
    const code = char.charCodeAt(0);

    // lowercase a-z
    if (code >= 97 && code <= 122) {
      sum += code - 96;
    }
    // uppercase A-Z
    else if (code >= 65 && code <= 90) {
      sum += (code - 64) * 2;
    }
    // digits 0-9
    else if (code >= 48 && code <= 57) {
      sum += code - 48;
    }
  }

  return sum;
}
