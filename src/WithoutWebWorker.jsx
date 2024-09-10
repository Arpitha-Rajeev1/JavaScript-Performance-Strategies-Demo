import { useState } from 'react';

const WithoutWebWorker = () => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const findPrimesWithoutWorker = (num) => {
        const primes = [];
        let candidate = 2;

        while (primes.length < num) {
            if (isPrime(candidate)) {
                primes.push(candidate);
            }
            candidate++;
        }
        return primes;
    };

    const isPrime = (num) => {
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    const startComputation = () => {
        setLoading(true);
        const primes = findPrimesWithoutWorker(1000000);
        setResult(primes);
        setLoading(false);
    };

    return (
        <div>
            <h1>Without Web Worker Demo</h1>
            <button onClick={startComputation} style={{ padding: '10px 20px', fontSize: '16px' }}>
                Start Heavy Computation
            </button>
            {loading && <p>Calculating... (Main thread is blocked)</p>}
            {!loading && result.length > 0 && <p>Calculation done. First 1000000 primes found!</p>}
        </div>
    );
};

export default WithoutWebWorker;