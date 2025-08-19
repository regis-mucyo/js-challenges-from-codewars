const camelCasing = (string) => {
  let camel = string
    .replaceAll("-", " ")
    .split(" ")
    .map((w) => `${w[0].toUpperCase()}${w.slice(1)}`)
    .join("");
  return `${camel[0].toLowerCase()}${camel.slice(1)}`;
};
console.log(camelCasing("the-stealth-warrior"));
