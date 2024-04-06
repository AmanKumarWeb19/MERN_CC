// Implement a series of functions that demonstrate closures to maintain state, such as a counter or a rate limiter.

const Counter = () => {
  let count = 0;

  function Increment() {
    count++;
    return count;
  }

  function Decrement() {
    count--;
    return count;
  }

  function getCount() {
    return count;
  }

  return { Increment, Decrement, getCount };
};

const checkCounter = Counter();
console.log(checkCounter.Increment());
console.log(checkCounter.Increment());
console.log(checkCounter.Increment());
console.log(checkCounter.Decrement());
console.log(checkCounter.Decrement());
console.log(checkCounter.getCount());
console.log(checkCounter.Increment());
console.log(checkCounter.Increment());
console.log(checkCounter.getCount());

