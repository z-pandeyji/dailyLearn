function* countUp(limit) {
    for (let i = 1; i <= limit; i++) {
      yield i;
    }
  }
  const counter = countUp(5);
  for (const value of counter) {
    console.log(value);
  }