function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  
  self.onmessage = function (e) {
    const num = e.data;
    const primes = [];
    let candidate = 2;
  
    while (primes.length < num) {
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
      candidate++;
    }
  
    postMessage(primes);
  };
  