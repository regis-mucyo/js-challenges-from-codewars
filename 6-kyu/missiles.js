const launchMissiles = (Missiles) => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      Missiles(i);
    }, i * 1000);
  }
};
launchMissiles((i) => {
  console.log(i);
});
