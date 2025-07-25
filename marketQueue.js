const queueTime = (customers, n) => {
  let makeTillsFree = Array(n).fill(0);

  for (let i = 0; i < customers.length; ++i) {
    let index = makeTillsFree.indexOf(Math.min(...makeTillsFree));
    makeTillsFree[index] += customers[i];
  }
  return Math.max(...makeTillsFree);
};

console.log(queueTime([5, 3, 4], 1)); //12
console.log(queueTime([1, 2, 3, 4, 5], 100)); //5
console.log(queueTime([], 1)); // 0
console.log(queueTime([1, 2, 3, 4], 1)); //10
console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); //9
console.log(queueTime([1, 2, 3, 4, 5], 100)); //5

// This kata is about returning how much time the queue will take
// based on the number of customers and the time each customer
// will spend at tills.
