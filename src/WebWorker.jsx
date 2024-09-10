import { useState, useEffect } from 'react';

const WebWorker = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to start the web worker
  const startWorker = () => {
    setLoading(true);
    const worker = new Worker(new URL('./worker.js', import.meta.url));

    worker.postMessage(1000000);

    worker.onmessage = (e) => {
      setResult(e.data);
      setLoading(false);
      worker.terminate();
    };
  };

  return (
    <div>
      <h1>Web Worker Demo</h1>
      <button
        onClick={startWorker}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Start Heavy Computation
      </button>
      {loading && <p>Calculating...</p>}
      {!loading && result.length > 0 && (
        <p>First 1000000 prime numbers calculated!</p>
      )}
    </div>
  );
};

export default WebWorker;
