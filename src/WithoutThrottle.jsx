import { useState } from 'react';

const WithoutThrottle = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Click Demo</h1>
      <button
        onClick={handleClick}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Click Me Fast!
      </button>
      <p>Button clicked {count} times.</p>
    </div>
  );
};

export default WithoutThrottle;
