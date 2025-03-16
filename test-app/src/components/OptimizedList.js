// src/components/OptimizedList.js
import React, { useState, useMemo } from 'react';

const expensiveCalculation = (num) => {
  console.log("Running expensive calculation...");
  let result = 0;
  // Simulate a time-consuming calculation (e.g. a large loop)
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
  return result + num;
};

const OptimizedList = () => {
  const [number, setNumber] = useState(0);
  const [dummy, setDummy] = useState(0); // Used to trigger re-render without affecting calculation

  // a console.log() statement is added to the component to track when it is rendered
  console.log("OptimizedList rendered");

  // use useMemo to cache the calculation result, only re-calculate when number changes
  const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

  // use useMemo to generate a large list, which is created only once
  const largeList = useMemo(() => {
    console.log("Generating large list...");
    return Array.from({ length: 1000 }, (_, i) => i + 1);
  }, []);

  return (
    <div>
      <h2>Calculated Value: {calculatedValue}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setDummy(dummy + 1)}>Trigger Re-render (dummy)</button>
      <ul>
        {largeList.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default OptimizedList;
