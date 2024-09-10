import { useState, useCallback } from 'react';
import { throttle } from 'lodash';

const ThrottleDemo = () => {
  const [count, setCount] = useState(0);

  const handleThrottledClick = useCallback(
    throttle(() => {
      setCount((prev) => prev + 1);
    }, 2000),
    []
  );

  return (
    <div>
      <h1>Throttling Demo</h1>
      <button
        onClick={handleThrottledClick}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Click Me Fast!
      </button>
      <p>Button clicked {count} times (throttled to once every 2 seconds).</p>
    </div>
  );
};

export default ThrottleDemo;