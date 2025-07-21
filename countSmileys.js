const countSmileys = (count) => {
  console.log(count);
};
countSmileys([":)", ";(", ";}", ":-D"]); // should return 2;
countSmileys([";D", ":-(", ":-)", ";~)"]); // should return 3;
countSmileys([";]", ":[", ";*", ":$", ";-D"]); // should return 1;
