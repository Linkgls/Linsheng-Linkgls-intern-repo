// src/components/OptimizedComponent.js
import React, { useState, useCallback } from 'react';

// Child component: callback function without useCallback
const ChildWithoutCallback = React.memo(({ onClick }) => {
  console.log("ChildWithoutCallback rendered");
  return (
    <button onClick={onClick}>
      Without useCallback
    </button>
  );
});

// Child component: callback function with useCallback
const ChildWithCallback = React.memo(({ onClick }) => {
  console.log("ChildWithCallback rendered");
  return (
    <button onClick={onClick}>
      With useCallback
    </button>
  );
});

const OptimizedComponent = () => {
  const [count, setCount] = useState(0);

  // define an uncached callback function that creates a new function every time it is rendered
  const handleClickNoCallback = () => {
    console.log("Button clicked without useCallback");
  };
  // define a callback function that uses useCallback to cache the function
  // since the dependency array is empty, this function is created only once throughout the lifecycle
  const handleClickWithCallback = useCallback(() => {
    console.log("Button clicked with useCallback");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <div style={{ marginTop: '20px' }}>
        <ChildWithoutCallback onClick={handleClickNoCallback} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <ChildWithCallback onClick={handleClickWithCallback} />
      </div>
    </div>
  );
};

export default OptimizedComponent;
